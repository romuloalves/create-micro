#!/usr/bin/env node

// Packages
const path = require('path')
const {cd, exec} = require('shelljs')
const args = require('args')
const chalk = require('chalk')

const createDir = require('./create-dir')
const getTemplateFiles = require('./get-template-files')
const renderTemplate = require('./render-template')
const createFile = require('./create-file')

args
  .option('name', 'Name of the basic micro application', 'micro-service')
  .option('port', 'The port of initialization when started', 3000)

const parameters = args.parse(process.argv)

const {name} = parameters

createDir(name)
  .then(getTemplateFiles)
  .then(data => renderTemplate(data, parameters))
  .then(data => {
    const promises = data.map(templateData => createFile(templateData, name))
    return Promise.all(promises)
  })
  .then(() => {
    console.log(chalk.green('Created!\nInstalling packages...'))
    const projectPath = path.resolve(process.cwd(), name)
    return new Promise((resolve, reject) => {
      cd(projectPath)
      exec('npm install', (code, stdout, stderr) => {
        if (code === 0) {
          resolve()
        } else {
          reject(stderr)
        }
      })
    })
  })
  .then(() => console.log(chalk.green('Done!')))
  .catch(err => {
    console.log(chalk.red(`ERROR`))
    console.error(err)
  })
