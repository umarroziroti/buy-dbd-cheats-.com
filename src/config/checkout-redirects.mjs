/** Checkout destinations keyed by internal product id (affiliate hop URLs). */
export const CHECKOUT_URLS = {
  dbd: 'https://zadeyo.com/go/UMAR?to=%2Fproducts%2Fdbd',
  hwidSpoofer: 'https://zadeyo.com/go/UMAR?to=%2Fproducts%2Fhwid-spoofer',
  ugc: 'https://zadeyo.com/go/UMAR?to=%2Fproducts%2Fugc',
  skinChanger: 'https://zadeyo.com/go/UMAR?to=%2Fproducts%2Fskin-changer',
};

/** Checkout paths → external product URLs (used by Node serve + Astro middleware). */
export const CHECKOUT_PATH_REDIRECTS = new Map([
  ['/go/dbd', CHECKOUT_URLS.dbd],
  ['/go/dbd/', CHECKOUT_URLS.dbd],
  ['/go/hwid-spoofer', CHECKOUT_URLS.hwidSpoofer],
  ['/go/hwid-spoofer/', CHECKOUT_URLS.hwidSpoofer],
  ['/go/ugc', CHECKOUT_URLS.ugc],
  ['/go/ugc/', CHECKOUT_URLS.ugc],
  ['/go/skin-changer', CHECKOUT_URLS.skinChanger],
  ['/go/skin-changer/', CHECKOUT_URLS.skinChanger],
]);

export function resolveCheckoutPathRedirect(pathname) {
  const direct = CHECKOUT_PATH_REDIRECTS.get(pathname);
  if (direct) return direct;

  if (pathname !== '/' && !pathname.endsWith('/')) {
    return CHECKOUT_PATH_REDIRECTS.get(`${pathname}/`) ?? null;
  }

  return null;
}
