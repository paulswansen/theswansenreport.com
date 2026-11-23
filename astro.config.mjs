// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// The public address of the site. Change this once swansenreport.com points here.
export default defineConfig({
  site: 'https://theswansenreport-com.paul-swansen.workers.dev',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
});
