import { defineConfig } from '@rspack/cli';
import rspack from '@rspack/core';
import ReactRefreshPlugin from '@rspack/plugin-react-refresh';

const isDev = process.env.NODE_ENV === 'development';

export default defineConfig({
  context: __dirname,
  extends: '../../base.rspack.config.ts',
  entry: {
    main: './src/main.tsx',
  },
  plugins: [
    new rspack.HtmlRspackPlugin({ template: './index.html' }),
    isDev && new ReactRefreshPlugin(),
  ].filter(Boolean),
});
