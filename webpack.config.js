const path = require("path");

module.exports = {
  mode: "development",
  devtool: "source-map",
  entry: "./index.js",
  output: {
    filename: "server.js",
    path: path.join(__dirname, "build"),
    libraryTarget: "commonjs2"
  },
  target: "node",
  resolve: {
    alias: {
      "any-promise": "promise-monofill"
    }
  },
  module: {
    rules: [
      {
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
        test: /\/static\/.*\.(js|txt)$/i,
        use: [
          {
            loader: "raw-loader"
          }
        ]
      }
    ]
  }
};
