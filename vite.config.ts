/// <reference types="histoire" />
import { defineConfig} from 'vite'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { sveltekit } from '@sveltejs/kit/vite'
import { HstSvelte } from '@histoire/plugin-svelte'

export default defineConfig({
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
    // {
    //   name: 'setup-vitest-plugin',
    //   config: () =>
    //     ({
    //       test: {
    //         setupFiles: ['./vitestSetup.ts']
    //       }
    //     } as UserConfig)
    // },
  ],
  histoire: {
    plugins: [
      HstSvelte(),
    ],
    setupFile: './src/histoire.setup.ts',
    tree: {
      groups: [
        {
          id: 'top',
          title: '',
        },
      ],
    },
  },
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
})
