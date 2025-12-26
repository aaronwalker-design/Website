import type { Config } from "@interfaces/site";
import * as fs from "node:fs";
import * as path from "node:path";
import yaml from "js-yaml";

// Configuration file path
const configPath = path.resolve("frosti.config.yaml");
// Translation file path
const translationsPath = path.resolve("src/i18n/translations.yaml");
// Read and parse YAML file
const config = yaml.load(fs.readFileSync(configPath, "utf8")) as Config;
// Read and parse translation file
const translationsConfig = yaml.load(fs.readFileSync(translationsPath, "utf8")) as Record<string, any>;

// Site basic information
export const SITE_TAB = config.site.tab;
export const SITE_TITLE = config.site.title;
export const SITE_DESCRIPTION = config.site.description;
export const SITE_LANGUAGE = config.site.language;
export const SITE_FAVICON = config.site.favicon;
export const SITE_THEME = config.site.theme;
export const DATE_FORMAT = config.site.date_format;

// Blog configuration
export const BLOG_CONFIG = config.site.blog;
export const BLOG_PAGE_SIZE = config.site.blog.pageSize;

// Code block theme
export const CODE_THEME = config.site.theme.code;

// User personal information
export const USER_NAME = config.user.name;
export const USER_SITE = config.user.site;
export const USER_AVATAR = config.user.avatar;

// Social icon configuration (sidebar and footer)
export const USER_SIDEBAR_SOCIAL_ICONS = config.user.sidebar.social;
export const USER_FOOTER_SOCIAL_ICONS = config.user.footer.social;

// Site menu item configuration
export const SITE_MENU = config.site.menu;

// Multi-language text configuration
export const TRANSLATIONS = translationsConfig;

// Create translation cache
const translationCache: Record<string, string> = {};

export function t(key: string): string {
  // Check if translation exists in cache
  if (translationCache[key] !== undefined) {
    return translationCache[key];
  }

  // Get current language translations
  const currentLangTranslations = TRANSLATIONS[SITE_LANGUAGE];
  if (!currentLangTranslations) {
    translationCache[key] = key; // Cache result
    return key;
  }

  // Find nested translation
  const keyParts = key.split(".");
  let result = currentLangTranslations;

  for (let i = 0; i < keyParts.length; i++) {
    const part = keyParts[i];

    if (!result || typeof result !== "object") {
      translationCache[key] = key; // Cache result
      return key;
    }

    result = result[part];
  }

  // Save result to cache
  translationCache[key] = typeof result === "string" ? result : key;
  return translationCache[key];
}
