const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.config.js");
const { EnvironmentPlugin } = require("webpack");

const devConfig = {
  mode: "development",
  plugins: [
    new EnvironmentPlugin({
      API: "https://prod.bradgarropy.com",
    }),
  ],
};

module.exports = merge(commonConfig, devConfig);
