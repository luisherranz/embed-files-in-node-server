const path = require("path");

module.exports = {
  mode: "production",
  entry: "./index.js",
  output: {
    filename: "server.js",
    path: path.join(__dirname, "build"),
    libraryTarget: "commonjs2"
  },
  target: "node",
  resolve: {
    extensions: [".js", ".png"],
    alias: {
      "any-promise": "promise-monofill"
    }
  },
  module: {
    rules: [
      {
        test: /\.png$/i,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: true
            }
          }
        ]
      }
    ]
  }
};
