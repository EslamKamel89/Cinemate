// @ts-check
import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt({
  rules: {
    "vue/multi-word-component-names": "off",
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": "off",
  },
});
// Your custom configs here
