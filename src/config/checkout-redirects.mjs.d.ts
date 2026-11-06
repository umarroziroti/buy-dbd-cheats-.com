export const CHECKOUT_URLS: {
  readonly dbd: string;
  readonly hwidSpoofer: string;
  readonly ugc: string;
  readonly skinChanger: string;
};

export const CHECKOUT_PATH_REDIRECTS: Map<string, string>;

export function resolveCheckoutPathRedirect(pathname: string): string | null;
