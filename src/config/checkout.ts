import { CHECKOUT_URLS } from './checkout-redirects.mjs';

/**
 * External checkout URLs — server-side redirect targets only (never use as visible href).
 */
export const CHECKOUT = CHECKOUT_URLS;

export type CheckoutProduct = keyof typeof CHECKOUT;

/** URL slug for /go/[slug]/ checkout redirect pages. */
export const CHECKOUT_SLUGS: Record<CheckoutProduct, string> = {
  dbd: 'dbd',
  hwidSpoofer: 'hwid-spoofer',
  ugc: 'ugc',
  skinChanger: 'skin-changer',
};

export const CHECKOUT_SLUG_TO_PRODUCT = Object.fromEntries(
  Object.entries(CHECKOUT_SLUGS).map(([product, slug]) => [slug, product as CheckoutProduct]),
) as Record<string, CheckoutProduct>;

/** Internal checkout path shown to users (hides external URL on hover). */
export function checkoutPath(product: CheckoutProduct = 'dbd'): string {
  return `/go/${CHECKOUT_SLUGS[product]}/`;
}

/** Default product checkout redirect (navbar Try Now). */
export const PRIMARY_CHECKOUT_PATH = checkoutPath('dbd');

/** Map internal product slugs to checkout redirect paths. */
export function checkoutForSlug(slug: string): string {
  switch (slug) {
    case 'hwid-spoofer':
      return checkoutPath('hwidSpoofer');
    case 'ugc':
    case 'account-recovery':
    case 'game-accounts':
      return checkoutPath('ugc');
    case 'skin-changer':
      return checkoutPath('skinChanger');
    case 'lite':
    case 'pro':
    case 'elite':
    case 'unlock-all':
    default:
      return checkoutPath('dbd');
  }
}

/** Resolve blog CTA or legacy href values to internal checkout paths. */
export function resolveCheckoutHref(href: string): string {
  if (!href.startsWith('http')) {
    return href.startsWith('/') ? href : `/${href}`;
  }

  for (const [product, url] of Object.entries(CHECKOUT) as [CheckoutProduct, string][]) {
    if (href === url || href.startsWith(`${url}?`) || href.startsWith(`${url}/`)) {
      return checkoutPath(product);
    }
  }

  if (href.includes('%2Fhwid-spoofer') || href.includes('/hwid-spoofer')) {
    return checkoutPath('hwidSpoofer');
  }
  if (href.includes('%2Fgame-accounts') || href.includes('/game-accounts') || href.includes('%2Fugc') || href.includes('/ugc')) {
    return checkoutPath('ugc');
  }
  if (href.includes('%2Fskin-changer') || href.includes('/skin-changer')) {
    return checkoutPath('skinChanger');
  }
  if (
    href.includes('%2Fdbd') ||
    href.includes('/products/dbd') ||
    href.includes('%2Fdbd') ||
    href.includes('zadeyo.com')
  ) {
    return checkoutPath('dbd');
  }

  return href;
}
