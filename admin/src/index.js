import pluginId from './pluginId';

export default {
  register(app) {
    app.registerPlugin({
      id: pluginId,
      name: 'BubblaV',
    });
  },

  bootstrap(app) {
    app.addSettingsLink('global', {
      id: pluginId,
      to: pluginId,
      intlLabel: {
        id: `${pluginId}.plugin.name`,
        defaultMessage: 'BubblaV',
      },
      Component: () => import('./pages/SettingsPage'),
      permissions: [],
    });
  },
};
