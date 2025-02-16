import { defineConfig } from 'astro/config'
import compress from 'astro-compress'
import icon from 'astro-icon'
import sentry from '@sentry/astro'
import dotenv from 'dotenv'

// Load the environment variables
dotenv.config()

// https://astro.build/config
export default defineConfig({
  compressHTML: true,
  site: 'https://incluud.dev',
  integrations: [
    icon(),
    compress(),
    sentry({
      dsn: process.env.SENTRY_DSN,
      environment: process.env.SENTRY_ENVIRONMENT,
      sourceMapsUploadOptions: {
        project: process.env.SENTRY_PROJECT,
        authToken: process.env.SENTRY_AUTH_TOKEN,
      },
    }),
  ],
  i18n: {
    locales: ['en', 'nl'],
    defaultLocale: 'en',
  },
})
