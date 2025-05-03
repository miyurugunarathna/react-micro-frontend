import path from 'node:path';
import { ModuleFederationPlugin } from '@module-federation/enhanced/rspack';
import FederatedTypesPlugin from '@module-federation/typescript';
import { defineConfig } from '@rspack/cli';
import rspack from '@rspack/core';
import ReactRefreshPlugin from '@rspack/plugin-react-refresh';
import config from './module-federation.config';

const isDev = process.env.NODE_ENV === 'development';

export default defineConfig({
  context: __dirname,
  extends: '../../base.rspack.config.ts',
  output: {
    publicPath: 'auto',
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
  },
  entry: {
    main: './src/main.tsx',
  },
  plugins: [
    new rspack.HtmlRspackPlugin({ template: './index.html' }),
    isDev && new ReactRefreshPlugin(),
    new ModuleFederationPlugin(config),
    isDev &&
      new FederatedTypesPlugin({
        federationConfig: {
          name: config.name,
          filename: config.filename,
          exposes: config.exposes,
        },
        disableDownloadingRemoteTypes: true,
      }),
  ].filter(Boolean),
});
