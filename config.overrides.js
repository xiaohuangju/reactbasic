const {
  override,
  addDecoratorsLegacy,
  disableEsLint,
  addBundleVisualizer,
  addWebpackAlias,
  adjustWorkbox,
} = require("customize-cra");
const path = require("path");
const paths = require("react-scripts/config/paths");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const addCustomize = () => (config) => {
  console.log(config,'==config')
  // eslint-disable-next-line no-undef
  if (process.env.NODE_ENV !== "development") {
    // 关闭sourceMap
    // eslint-disable-next-line no-param-reassign
    config.devtool = false;
    paths.appBuild = path.join(path.dirname(paths.appBuild), "app/public");
    // eslint-disable-next-line no-param-reassign
    config.output.path = path.join(
      path.dirname(config.output.path),
      "app/public"
    );
    // 修改publicPath
    // eslint-disable-next-line no-param-reassign
    config.output.publicPath = "/";
    config.output.library = "compliance";
    config.output.libraryTarget = "umd";
    config.output.jsonpFunction = "webpackJsonp_compliance";
  }
  // eslint-disable-next-line no-param-reassign
  config.resolve = {
    extensions: [".js", ".ts", ".tsx", ".jsx"],
    alias: {
      // eslint-disable-next-line no-undef
      "@": path.resolve(__dirname, "src"),
    },
  };
  return config;
};
// const path = require("path");
module.exports = override(
  addCustomize(),
  process.env.NODE_ENV === 'production' && addWebpackPlugin(new UglifyJsPlugin({
    uglifyOptions: {
      warnings: false,
      compress: {
        drop_debugger: true,
        drop_console: true,
        // comments:false,
      }
    }
  }))
 
);
