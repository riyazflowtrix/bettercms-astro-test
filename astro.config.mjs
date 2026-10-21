// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://lumen-demo.example.com',
  integrations: [mdx()],
});
