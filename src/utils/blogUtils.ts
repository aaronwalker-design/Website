import type { CollectionEntry } from "astro:content";
import { getCollection } from "astro:content";

/**
 * Get all blog posts and filter drafts based on environment
 * @returns Blog post collection
 */
export async function getAllPosts(): Promise<CollectionEntry<"blog">[]> {
  const allBlogPosts = await getCollection("blog");

  // Filter out draft posts in production environment
  return import.meta.env.PROD
    ? allBlogPosts.filter((post: CollectionEntry<"blog">) => !post.data.draft)
    : allBlogPosts;
}

/**
 * Sort posts by publication date (newest first)
 * @param posts Posts to sort
 * @returns Sorted posts
 */
export function sortPostsByDate(posts: CollectionEntry<"blog">[]): CollectionEntry<"blog">[] {
  return [...posts].sort(
    (a: CollectionEntry<"blog">, b: CollectionEntry<"blog">) =>
      new Date(b.data.pubDate).getTime() - new Date(a.data.pubDate).getTime(),
  );
}

/**
 * Sort posts by pin status and date
 * @param posts Posts to sort
 * @returns Sorted posts (pinned posts first, then sorted by date)
 */
export function sortPostsByPinAndDate(posts: CollectionEntry<"blog">[]): CollectionEntry<"blog">[] {
  const topPosts = posts.filter((blog: CollectionEntry<"blog">) => blog.data.badge === "Pin");
  const otherPosts = posts.filter((blog: CollectionEntry<"blog">) => blog.data.badge !== "Pin");

  const sortedTopPosts = sortPostsByDate(topPosts);
  const sortedOtherPosts = sortPostsByDate(otherPosts);

  return [...sortedTopPosts, ...sortedOtherPosts];
}

/**
 * Get all post tags and count occurrences of each tag
 * @param posts Post collection
 * @returns Tag map (tag name -> count)
 */
export function getTagsWithCount(posts: CollectionEntry<"blog">[]): Map<string, number> {
  const tagMap = new Map<string, number>();

  posts.forEach((post: CollectionEntry<"blog">) => {
    if (post.data.tags) {
      post.data.tags.forEach((tag: string) => {
        tagMap.set(tag, (tagMap.get(tag) || 0) + 1);
      });
    }
  });

  return tagMap;
}

/**
 * Get all post categories and group posts by category
 * @param posts Post collection
 * @returns Category map (category name -> post array)
 */
export function getCategoriesWithPosts(posts: CollectionEntry<"blog">[]): Map<string, CollectionEntry<"blog">[]> {
  const categoryMap = new Map<string, CollectionEntry<"blog">[]>();

  posts.forEach((post: CollectionEntry<"blog">) => {
    if (post.data.categories) {
      post.data.categories.forEach((category: string) => {
        if (!categoryMap.has(category)) {
          categoryMap.set(category, []);
        }
        categoryMap.get(category)!.push(post);
      });
    }
  });

  return categoryMap;
}

/**
 * Get posts grouped by year and month
 * @param posts Post collection
 * @returns Nested map (year -> (month -> post array))
 */
export function getPostsByYearAndMonth(posts: CollectionEntry<"blog">[]): Map<string, Map<string, CollectionEntry<"blog">[]>> {
  const postsByDate = new Map<string, Map<string, CollectionEntry<"blog">[]>>();

  posts.forEach((post: CollectionEntry<"blog">) => {
    const date = new Date(post.data.pubDate);
    const year = date.getFullYear().toString();
    const month = (date.getMonth() + 1).toString().padStart(2, "0");

    if (!postsByDate.has(year)) {
      postsByDate.set(year, new Map<string, CollectionEntry<"blog">[]>());
    }

    const yearMap = postsByDate.get(year)!;
    if (!yearMap.has(month)) {
      yearMap.set(month, []);
    }

    yearMap.get(month)!.push(post);
  });

  return postsByDate;
}

/**
 * Generate page links for pagination
 * @param totalPages Total number of pages
 * @returns Object containing active and hidden links
 */
export function generatePageLinks(totalPages: number): {
  active: string[];
  hidden: string[];
} {
  const pages = {
    active: [] as string[],
    hidden: [] as string[],
  };

  if (totalPages > 3) {
    pages.active.push("1");
    pages.active.push("...");
    pages.active.push(totalPages.toString());
    for (let i = 2; i <= totalPages - 1; i++) {
      pages.hidden.push(i.toString());
    }
  }
  else {
    for (let i = 1; i <= totalPages; i++) {
      pages.active.push(i.toString());
    }
  }

  return pages;
}

/**
 * Get posts and add reading time and word count statistics
 * @param posts Post collection
 * @returns Post collection with statistics
 */
export async function getPostsWithStats(posts: CollectionEntry<"blog">[]): Promise<any[]> {
  return Promise.all(
    posts.map(async (blog: CollectionEntry<"blog">) => {
      const { remarkPluginFrontmatter } = await blog.render();
      return {
        ...blog,
        remarkPluginFrontmatter: {
          readingTime: remarkPluginFrontmatter.readingTime,
          totalCharCount: remarkPluginFrontmatter.totalCharCount,
        },
      };
    }),
  );
}

/**
 * Get tag color class based on tag frequency
 * @param count Tag count
 * @param max Maximum count
 * @returns Color class name
 */
export function getTagColorClass(count: number, max: number): string {
  const ratio = count / max;
  if (ratio > 0.8)
    return "tag-high";
  if (ratio > 0.6)
    return "tag-medium-high";
  if (ratio > 0.4)
    return "tag-medium";
  if (ratio > 0.2)
    return "tag-medium-low";
  return "tag-low";
}

/**
 * Calculate tag font size based on tag frequency
 * @param count Tag count
 * @param max Maximum count
 * @param min Minimum count
 * @returns Font size (rem)
 */
export function getTagFontSize(count: number, max: number, min: number): number {
  // Normalize count value to 0-1 range
  const normalized = (count - min) / (max - min || 1);
  // Map to font size between 0.9rem and 2rem
  return 0.9 + normalized * 1.1;
}

/**
 * Generate category color class
 * @param index Category index
 * @returns Color class name
 */
export function getCategoryColorClass(index: number): string {
  const colorClasses = [
    "category-primary",
    "category-secondary",
    "category-accent",
    "category-info",
    "category-success",
    "category-warning",
    "category-error",
  ];
  return colorClasses[index % colorClasses.length];
}
