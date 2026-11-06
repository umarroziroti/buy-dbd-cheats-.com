/** Static path redirects (301). Keys are pathname without query/hash. */
export const PATH_REDIRECTS = new Map([
  ['/blog', '/blog/'],
  ['/about', '/about/'],
  ['/contact', '/support/'],
  ['/contact/', '/support/'],
  ['/support', '/support/'],
  ['/privacy', '/privacy/'],
  ['/terms', '/terms/'],
  ['/faq', '/faq/'],
  ['/cheats', '/products/dbd-cheats/'],
  ['/cheats/', '/products/dbd-cheats/'],
  ['/cheats/lite', '/products/dbd-cheats/'],
  ['/cheats/lite/', '/products/dbd-cheats/'],
  ['/cheats/pro', '/products/dbd-cheats/'],
  ['/cheats/pro/', '/products/dbd-cheats/'],
  ['/cheats/elite', '/products/dbd-cheats/elite/'],
  ['/cheats/elite/', '/products/dbd-cheats/elite/'],
  ['/cheats/compare', '/blog/dbd-cheat-feature-comparison/'],
  ['/cheats/compare/', '/blog/dbd-cheat-feature-comparison/'],
  ['/products/dbd-cheats/utilities', '/products/dbd-cheats/utilities/'],
  ['/products/dbd-cheats', '/products/dbd-cheats/'],
  ['/products/dbd-cheats/account-recovery', '/products/dbd-cheats/ugc/'],
  ['/products/dbd-cheats/account-recovery/', '/products/dbd-cheats/ugc/'],
  ['/products/eft-cheats', '/products/dbd-cheats/'],
  ['/products/eft-cheats/', '/products/dbd-cheats/'],
]);

/** Paths that should not receive a forced trailing slash. */
export const TRAILING_SLASH_SKIP = /\.[a-z0-9]+$/i;

export function resolvePathRedirect(pathname) {
  const direct = PATH_REDIRECTS.get(pathname);
  if (direct) return direct;

  if (pathname !== '/' && !pathname.endsWith('/') && !TRAILING_SLASH_SKIP.test(pathname)) {
    return `${pathname}/`;
  }

  return null;
}
