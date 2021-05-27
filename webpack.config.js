const path = require("path");
module.exports = {

    entry: path.resolve(__dirname, "./src/index.js"),
    module: {
      rules: [
        {
          test: /\.html$/i,
          loader: 'html-loader',
        },
      ],
    },
  };