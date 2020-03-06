const path = require("path");
const webpack = require("webpack");

module.exports = {
  mode: "development",
  devtool: "source-map",
  entry: "./index.js",
  output: {
    filename: "serverless.js",
    path: path.join(__dirname, "build"),
    libraryTarget: "commonjs2"
  },
  target: "node",
  resolve: {
    alias: {
      // Needed for bundling Koa's server in a single file.
      "any-promise": "promise-monofill"
    }
  },
  module: {
    rules: [
      {
        // Embed the images in base64. No size limit.
        test: /\/static\/.*\.png$/i,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: true
            }
          }
        ]
      },
      {
        // Embed the js and txt files in a raw string.
        test: /\/static\/.*\.(js|txt)$/i,
        use: [
          {
            loader: "raw-loader"
          }
        ]
      }
    ]
  },
  plugins: [new webpack.IgnorePlugin(/^encoding$/)]
};
