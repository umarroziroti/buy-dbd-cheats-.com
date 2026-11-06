/**
 * Apex → www host redirect, then serve static assets (incl. _redirects).
 * Requires assets.run_worker_first = true so HTML pages are not served before this runs.
 */
const APEX = 'buydbdcheats.com';
const WWW = 'www.buydbdcheats.com';

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.hostname === APEX) {
      url.hostname = WWW;
      url.protocol = 'https:';
      return Response.redirect(url.href, 301);
    }

    return env.ASSETS.fetch(request);
  },
};
