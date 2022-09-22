const LoadablePlugin = require('@loadable/webpack-plugin');

module.exports = {
  webpack: (config) => {
    config.plugins.push(new LoadablePlugin());

    return config;
  },
};
