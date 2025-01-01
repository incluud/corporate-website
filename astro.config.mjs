import { defineConfig } from 'astro/config'
import compress from 'astro-compress'
import icon from 'astro-icon'

// https://astro.build/config
export default defineConfig({
  compressHTML: true,
  integrations: [icon(), compress()],
  i18n: {
    locales: ['en', 'nl'],
    defaultLocale: 'en',
  },
})
