import type { APIRoute } from "astro";

interface Release {
  version: string;
  name: string;
  url: string;
  description?: string;
}

function parseDownloads(html: string): Release[] {
  const downloadPatterns = [
    // Match www2.disguise.one links with version numbers (e.g., /3222 = r32.2.2)
    /<a[^>]*href="([^"]*www2\.disguise\.one\/(\d+)(?:\.\d+)*)"[^>]*>([^<]*)<\/a>/gi,
    /href="([^"]*www2\.disguise\.one\/(\d+)(?:\.\d+)*)"[^>]*/gi,
    // Match direct file downloads
    /<a[^>]*href="([^"]*\.(exe|dmg|zip|msi))"[^>]*>([^<]*r(\d+(?:\.\d+)*(?:\.\d+)?)[^<]*)<\/a>/gi,
    /<a[^>]*href="([^"]*)"[^>]*>([^<]*Designer[^<]*r(\d+(?:\.\d+)*(?:\.\d+)?)[^<]*)<\/a>/gi,
    /href="([^"]*download[^"]*r(\d+(?:\.\d+)*(?:\.\d+)?)[^"]*)"[^>]*/gi,
  ];

  const allMatches: Array<{ href: string; text: string; version: string }> = [];

  downloadPatterns.forEach((pattern, patternIndex) => {
    const matches = Array.from(html.matchAll(pattern));
    matches.forEach((match) => {
      if (!match) return;
      const href = match[1];
      let versionMatch: string | null = null;
      let text = "";

      // Handle www2.disguise.one pattern (patternIndex 0 or 1)
      if (patternIndex === 0 || patternIndex === 1) {
        const versionNumber = match[2]; // e.g., "3222"
        if (versionNumber) {
          // Convert "3222" to "r32.2.2" format
          if (versionNumber.length === 4) {
            versionMatch = `r${versionNumber[0]}${versionNumber[1]}.${versionNumber[2]}.${versionNumber[3]}`;
          } else if (versionNumber.length === 3) {
            versionMatch = `r${versionNumber[0]}${versionNumber[1]}.${versionNumber[2]}`;
          } else {
            versionMatch = `r${versionNumber}`;
          }
          text = match[3]?.trim() || `Designer ${versionMatch}`;
        }
      } else {
        // Handle other patterns
        text = match[2]?.trim() || match[3]?.trim() || "";
        versionMatch = match[4] || match[2] || text.match(/r(\d+(?:\.\d+)*(?:\.\d+)?)/i)?.[1];
      }

      if (
        versionMatch &&
        href &&
        (href.includes("www2.disguise.one") ||
          href.includes(".exe") ||
          href.includes(".dmg") ||
          href.includes("download") ||
          href.includes("get.disguise"))
      ) {
        const existing = allMatches.find((m) => m.version === versionMatch);
        if (!existing) {
          allMatches.push({
            href,
            text: text || `Designer ${versionMatch}`,
            version: versionMatch,
          });
        }
      }
    });
  });

  return allMatches
    .map((match) => {
      // Handle www2.disguise.one URLs - ensure they're complete
      let url = match.href;
      if (url.includes("www2.disguise.one") && !url.startsWith("http")) {
        url = `https://${url.startsWith("/") ? "www2.disguise.one" : "www2.disguise.one/"}${url}`;
      } else if (!url.startsWith("http")) {
        url = `https://get.disguise.one${url}`;
      }

      const cleanName = match.text.replace(/Release Notes/gi, "").replace(/Designer/gi, "").trim();

      return {
        version: match.version,
        name: `Disguise Designer ${match.version}`,
        url,
        description: cleanName || match.version,
      };
    })
    .filter((release) => release.version && release.version !== "Release Notes")
    .sort((a, b) => {
      const aNum = a.version.match(/\d+/)?.[0] || "0";
      const bNum = b.version.match(/\d+/)?.[0] || "0";
      return parseInt(bNum) - parseInt(aNum);
    })
    .slice(0, 100);
}

export const GET: APIRoute = async ({ request }) => {
  try {
    // Use a proper user agent to identify ourselves
    const userAgent = "Mozilla/5.0 (compatible; DisguiseDownloadsAggregator/1.0; +https://yourwebsite.com/disguise-downloads)";
    
    // Try get.disguise.one first
    const response = await fetch("https://get.disguise.one/", {
      headers: {
        "User-Agent": userAgent,
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
        "Accept-Language": "en-US,en;q=0.5",
        "Referer": "https://get.disguise.one/",
      },
    });
    if (response.ok) {
      const html = await response.text();
      const releases = parseDownloads(html);

      if (releases.length > 0) {
        return new Response(JSON.stringify(releases), {
          status: 200,
          headers: {
            "Content-Type": "application/json",
            "Cache-Control": "public, max-age=604800", // Cache for 7 days
          },
        });
      }
    }

    // Fallback to release notes page
    const notesResponse = await fetch("https://help.disguise.one/designer/release-notes/release-notes", {
      headers: {
        "User-Agent": userAgent,
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
        "Referer": "https://help.disguise.one/",
      },
    });
    if (notesResponse.ok) {
      const html = await notesResponse.text();
      const downloadLinkPattern =
        /<a[^>]*href="([^"]*)"[^>]*>([^<]*r(\d+(?:\.\d+)*(?:\.\d+)?)[^<]*(?:Download|\.exe|\.dmg)[^<]*)<\/a>/gi;
      const matches = Array.from(html.matchAll(downloadLinkPattern));

      const releases = matches
        .map((match) => {
          if (!match) return null;
          const href = match[1];
          const text = match[2].trim();
          const versionMatch = match[3];
          const url = href.startsWith("http") ? href : `https://help.disguise.one${href}`;

          return {
            version: `r${versionMatch}`,
            name: `Disguise Designer r${versionMatch}`,
            url,
            description: text,
          };
        })
        .filter((release): release is Release => release !== null && !!release.version)
        .sort((a, b) => {
          const aNum = a.version.match(/\d+/)?.[0] || "0";
          const bNum = b.version.match(/\d+/)?.[0] || "0";
          return parseInt(bNum) - parseInt(aNum);
        })
        .slice(0, 100);

      if (releases.length > 0) {
        return new Response(JSON.stringify(releases), {
          status: 200,
          headers: {
            "Content-Type": "application/json",
            "Cache-Control": "public, max-age=604800",
          },
        });
      }
    }

    return new Response(JSON.stringify([]), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("Error fetching downloads:", error);
    return new Response(JSON.stringify({ error: "Failed to fetch downloads" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
};

