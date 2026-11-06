import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import { sitemapSerialize } from './src/config/sitemap.ts';

export default defineConfig({
  site: 'https://www.buydbdcheats.com',
  trailingSlash: 'always',
  redirects: {
    '/cheats/': '/products/dbd-cheats/',
    '/cheats/lite/': '/products/dbd-cheats/',
    '/cheats/pro/': '/products/dbd-cheats/',
    '/cheats/elite/': '/products/dbd-cheats/elite/',
    '/cheats/compare/': '/blog/dbd-cheat-feature-comparison/',
    '/products/payday-3-cheats/': '/products/dbd-cheats/',
    '/products/payday-3-cheats/elite/': '/products/dbd-cheats/elite/',
    '/products/dota-2-cheats/': '/products/dbd-cheats/',
    '/products/dota-2-cheats/elite/': '/products/dbd-cheats/elite/',
    '/products/dota-2-cheats/utilities/': '/products/dbd-cheats/utilities/',
    '/contact/': '/support/',
    '/go/payday-3/': '/go/dbd/',
  },
  compressHTML: true,
  prefetch: {
    prefetchAll: false,
    defaultStrategy: 'hover',
  },
  devToolbar: {
    enabled: false,
  },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404') && !page.includes('/go/'),
      serialize: sitemapSerialize,
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
    build: {
      cssMinify: true,
      minify: 'esbuild',
      target: 'es2022',
      modulePreload: { polyfill: false },
    },
  },
  build: {
    inlineStylesheets: 'always',
  },
});
