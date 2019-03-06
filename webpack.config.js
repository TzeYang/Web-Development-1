const path = require("path");

var about = {
  entry: "./app/assets/scripts/About.js",
  output: {
    path: path.resolve(__dirname, "./app/temp/scripts"),
    filename: "About.js"
  },
  module: {
    rules: [
      {
        use: "babel-loader",
        test: /\.js$/,
        exclude: /node_modules/
      }
    ]
  }
};

var load = {
  entry: "./app/assets/scripts/Load.js",
  output: {
    path: path.resolve(__dirname, "./app/temp/scripts"),
    filename: "Load.js"
  }
};

var config = {
  performance: { hints: false },
  entry: "./app/assets/scripts/App.js",
  output: {
    path: path.resolve(__dirname, "./app/temp/scripts"),
    filename: "App.js"
  },
  module: {
    rules: [
      {
        use: "babel-loader",
        test: /\.js$/,
        exclude: /node_modules/
      }
    ]
  }
};

module.exports = [config, about, load];
