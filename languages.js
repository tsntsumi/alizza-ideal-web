const { join } = require("path")
const { readdirSync, lstatSync } = require("fs")

const defaultLanguage = "ja"

// based on the directories get the language codes
const languages = readdirSync(join(__dirname, "src/i18n/locales")).filter(
  fileName => {
    const joinedPath = join(join(__dirname, "src/i18n/locales"), fileName)
    const isDirectory = lstatSync(joinedPath).isDirectory()
    return isDirectory
  }
)
// defaultLanguage as first
languages.splice(languages.indexOf(defaultLanguage), 1)
languages.unshift(defaultLanguage)

module.exports = {
  languages,
  defaultLanguage,
}
