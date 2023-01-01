const preprocess = require('svelte-preprocess');
const path = require('path');
const { loadConfigFromFile, mergeConfig } = require('vite');
module.exports = {
  'stories': [
    '../src/**/*.stories.mdx',
    '../src/**/*.stories.@(js|jsx|ts|tsx|svelte)',
  ],
  'addons': [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-svelte-csf',
  ],
  'framework': '@storybook/svelte',
  'core': {
    'builder': '@storybook/builder-vite',
  },
  svelteOptions: {
    preprocess: [
      preprocess({
        typescript: true,
        postcss: true,
        sourceMap: true,
        scss: {
          prependData: '@use "src/variables.scss" as *;',
        },
      }),
    ],
  },
  // "features": {
  //   "storyStoreV7": true
  // },
  async viteFinal(config, { configType }) {
    const { config: userConfig } = await loadConfigFromFile(
        path.resolve(__dirname, '../vite.config.ts'),
    );
    return mergeConfig(config, {
      ...userConfig,
      plugins,
    });
  },
};
