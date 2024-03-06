module.exports = function (api) {
  api.cache(true);
  return {
    plugins: [
      "macros",
      ["@babel/plugin-transform-class-properties", { loose: true }],
      ["@babel/plugin-transform-private-methods", { loose: true }],
      ["@babel/plugin-transform-private-property-in-object", { loose: true }],
    ],
    presets: ["babel-preset-expo"],
  };
};
