// Natives
const path = require('path')

// Packages
const recursive = require('recursive-readdir')

// Constants
const templatePath = path.resolve(__dirname, '..', 'templates')

module.exports = () => {
  return new Promise((resolve, reject) => {
    recursive(templatePath, (err, files) => {
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
