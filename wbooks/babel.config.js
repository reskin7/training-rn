module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@app': './src/app',
          '@components': '.src/app/components/',
          '@assets': './src/assets',
          '@config': './src/config',
          '@constants': './src/constants',
          '@interfaces': './src/interfaces',
          '@redux': './src/redux',
          '@services': './src/services',
          '@utils': './src/utils'
        }
      }
    ]
  ]
};