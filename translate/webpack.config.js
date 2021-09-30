module.exports = {
  module: {
    rules: [{
      test: /data[\\\/].*\.json$/,
      use: require.resolve('./static-translate-loader')
    }, {
      test: /node_modules[\\\/]@angular[\\\/]core[\\\/].*\.js$/,
      use: require.resolve('./runtime-translate-loader'),
    }, {
      test: /\.css$/,
      use: require.resolve('./base-path-loader'),
    },],
  },
};
