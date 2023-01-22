const { languages, defaultLanguage } = require("./languages")
process.env.NODE_ENV = "test"
module.exports = {
  presets: ["babel-preset-gatsby"],
  plugins: [
    [
      "i18next-extract",
      {
        keyAsDefaultValue: [defaultLanguage],
        useI18nextDefaultValue: [defaultLanguage],
        // discardOldKeys: true,
        defaultNS: "common",
        outputPath: "src/i18n/locales/{{locale}}/{{ns}}.json",
        customTransComponents: [["gatsby-plugin-react-i18next", "Trans"]],
        compatibilityJSON: "v4",
        languages,
        defaultLanguage,
      },
    ],
  ],
  overrides: [
    {
      test: [`**/*.js`, `**/*.jsx`, `**/*.ts`, `**/*.tsx`],
      plugins: [[`@babel/plugin-transform-typescript`, { isTSX: true }]],
    },
  ],
}
