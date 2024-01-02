module.exports = {
  rules: {
    "no-omit-index": require('./rules/no-omit-index')
  },
  configs: {
    recommended: {
      plugins: ["no-omit-index"],
      rules: {
        "no-omit-index/no-omit-index": "error",
      },
    },
  },
};