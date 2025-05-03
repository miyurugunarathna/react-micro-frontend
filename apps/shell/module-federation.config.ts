import { createModuleFederationConfig } from '@module-federation/enhanced';

export default createModuleFederationConfig({
  name: 'shell',
  filename: 'remoteEntry.js',
  remotes: {
    core: 'core@http://localhost:3001/remoteEntry.js',
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
