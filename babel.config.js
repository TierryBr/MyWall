module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo', '@babel/preset-typescript'],
    plugins: [
      ['react-native-paper/babel'],
      ["module:react-native-dotenv", {
        "moduleName": "@env",
        "path": ".env",
        "safe": false,
        "allowUndefined": true
      }],
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
