module.exports = {
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|otf|svg)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },
};