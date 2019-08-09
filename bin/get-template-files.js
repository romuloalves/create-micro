// Natives
const path = require('path')

// Packages
const recursive = require('recursive-readdir')

// Constants
const templatePath = path.resolve(__dirname, '..', 'templates')

module.exports = options => {
  function ignoreFiles(file) {
    const basenameFile = path.basename(file)
    if (!basenameFile.endsWith('.tmpl')) {
      return false
    }

    for (const key in options) {
      if (basenameFile.startsWith(key)) {
        return !options[key]
      }
    }
  }

  return new Promise((resolve, reject) => {
    recursive(templatePath, [ignoreFiles], (err, files) => {
      if (err) {
        reject(err)
      } else {
        resolve({
          path: templatePath,
          files
        })
      }
    })
  })
}
