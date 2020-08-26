module.exports = function(config, { isClient, isDev }) {
  module: {
    rules: [
      { test: /\.(woff|woff2|eot|ttf|svg)(\?.*$|$)/, loader: "file-loader" },
      {
        test: /\.(ttf|otf|eot|woff|woff2)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "fonts/[name].[ext]",
          },
        },
      },
    ];
  }
  return config;
};
