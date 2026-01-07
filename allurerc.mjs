const { defineConfig } = require("allure");

module.exports = defineConfig({
  name: "Allure Report Example",
  output: "./out/allure-report",
  plugins: {
    awesome: {
      options: {
        singleFile: true,
        reportLanguage: "en",
      },
    },
  },
});