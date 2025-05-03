import { createModuleFederationConfig } from '@module-federation/enhanced';

export default createModuleFederationConfig({
  name: 'core',
  filename: 'remoteEntry.js',
  exposes: {
    './header': './src/modules/header/index.tsx',
  },
  shared: [
    {
      react: {
        singleton: true,
        eager: true,
      },
    },
    {
      'react-dom': {
        singleton: true,
        eager: true,
      },
    },
  ],
});
