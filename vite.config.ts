import { defineConfig, type UserConfig } from 'vite'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { sveltekit } from '@sveltejs/kit/vite'

export default defineConfig(() => {
  return {
    server: {
      host: '0.0.0.0',
      port: 1025,
      fs: {
        allow: ['.']
      },
      // cors: true,
      // proxy: 'https://api.airtable.com',
    },
    plugins: [
      sveltekit(),
      {
        name: 'setup-vitest-plugin',
        config: () =>
          ({
            test: {
              setupFiles: ['./vitestSetup.ts']
            }
          } as UserConfig)
      },
    ],
    resolve: {
      alias: [
        {
          find: '$lib',
          replacement: `${__dirname}/src/lib/`
        }
      ],
    },
    css: {
      preprocessorOptions: {
        scss: {
          // additionalData: '@use "src/variables.scss" as *;'
        }
      }
    },
    ssr: {},
    test: {
      globals: true,
      environment: 'jsdom',
      include: ['**/*.vitest.ts']
    }
  }
})
