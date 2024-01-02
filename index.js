import noOmitIndex from "./src/rules/no-omit-index";

export default {
  rules: {
    "no-omit-index": noOmitIndex,
  },
  configs: {
    all: {
      plugins: ["no-omit-index"],
      rules: {
        "no-omit-index": "error",
      },
    },
  },
};