import { t } from '../i18n';
import { SITE_HOST as INDEXNOW_HOST_NAME, SITE_URL } from './site';
import { getPageSeoEntry } from './pageSeo';

export const SITE_ORIGIN = SITE_URL;

export const DEFAULT_OG_IMAGE = '/images/hero-dbd.webp';

export const GA_MEASUREMENT_ID = import.meta.env.PUBLIC_GA_MEASUREMENT_ID as string | undefined;

/** @example @dbdcheats */
export const TWITTER_SITE = import.meta.env.PUBLIC_TWITTER_SITE as string | undefined;

export const TWITTER_CREATOR = import.meta.env.PUBLIC_TWITTER_CREATOR as string | undefined;

/** Comma-separated profile URLs (X, YouTube, etc.) for Organization sameAs. */
export function getOrganizationSameAs(): string[] {
  const raw = import.meta.env.PUBLIC_ORG_SAME_AS as string | undefined;
  if (!raw?.trim()) return [];
  return raw
    .split(',')
    .map((entry) => entry.trim())
    .filter(Boolean);
}

export const INDEXNOW_KEY = import.meta.env.INDEXNOW_KEY as string | undefined;

export function canonicalUrl(pathname: string): string {
  let path = pathname || '/';
  if (!path.startsWith('/')) path = `/${path}`;
  if (path !== '/' && !path.endsWith('/')) path = `${path}/`;
  return `${SITE_ORIGIN}${path}`;
}

export function absoluteAssetUrl(path: string): string {
  if (path.startsWith('http://') || path.startsWith('https://')) return path;
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `${SITE_ORIGIN}${normalized}`;
}

export function resolvePageSeo(pathname: string): { title: string; description: string } {
  const entry = getPageSeoEntry(pathname);
  if (entry) return entry;
  return { title: t.site.title, description: t.site.description };
}

export function pageTitle(keyword: string, brand = t.site.name): string {
  const max = 60;
  // Already in SERP length band — keep as-is (no truncation / suffix).
  if (keyword.length >= 50 && keyword.length <= max) return keyword;
  // Avoid repeating brand tokens already present in the keyword (e.g. "DBD … | DBD Cheats").
  const brandToken = brand.split(/\s+/)[0];
  if (brandToken && new RegExp(`\\b${brandToken}\\b`, 'i').test(keyword)) {
    return keyword.length <= max ? keyword : keyword.slice(0, max).trim();
  }
  const suffix = ` | ${brand}`;
  if (`${keyword}${suffix}`.length <= max) return `${keyword}${suffix}`;
  // Prefer the bare keyword when adding a brand suffix would force a mid-word cut.
  if (keyword.length >= 45 && keyword.length <= max) return keyword;
  const trimmed = keyword.slice(0, Math.max(20, max - suffix.length - 1)).trim();
  return `${trimmed}${suffix}`;
}

/** Keep meta descriptions blunt about DBD Cheats for SERP snippets. */
export function cheatMetaDescription(text: string): string {
  const trimmed = text.trim();
  if (/dbd\s*cheat/i.test(trimmed) || /dead by daylight/i.test(trimmed)) return trimmed;
  return `DBD cheats guide: ${trimmed}`;
}

export const DEFAULT_OG_IMAGE_WIDTH = 1200;
export const DEFAULT_OG_IMAGE_HEIGHT = 630;

export const RSS_FEED_PATH = '/rss.xml';

/** Used by IndexNow postbuild script. */
export const INDEXNOW_HOST = INDEXNOW_HOST_NAME;
