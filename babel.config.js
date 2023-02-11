module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        "module-resolver",
        {
          root: ['./src'],
          alias: {
            '@screens': './src/screens',
            '@components': './src/components',
            '@assets': './src/assets',
            '@routes': './src/routes',
            '@types': './src/@types',
            '@reducers': './src/reducers',
            '@store': './src/store',
            '@utils': './src/utils',
            '@i18n': './src/i18n',
            '@theme': './src/theme'
          }
        }
      ]
    ]
  };
};
