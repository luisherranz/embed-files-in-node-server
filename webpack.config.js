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
    alias: {
      "any-promise": "promise-monofill"
    }
  }
};
