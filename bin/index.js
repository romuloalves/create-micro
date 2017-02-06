#!/usr/bin/env node

// Natives
const path = require('path')

// Packages
const {cd, exec} = require('shelljs')
const args = require('args')
const chalk = require('chalk')
const hasYarn = require('has-yarn')

const createDir = require('./create-dir')
const getTemplateFiles = require('./get-template-files')
const renderTemplate = require('./render-template')
const createFile = require('./create-file')

args
  .option('name', 'Name of the basic micro application', 'micro-service')

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
    console.log(chalk.green('Created!\n'))
    const projectPath = path.resolve(process.cwd(), name)

    const hasYarnToInstall = hasYarn()
    let commandToInstallDeps = 'npm install'
    if (hasYarnToInstall) {
      commandToInstallDeps = 'yarn'
      console.log(chalk.green('\nInstalling packages usign yarn...'))
    } else {
      console.log(chalk.green('\nInstalling packages usign npm...'))
    }

    return new Promise((resolve, reject) => {
      cd(projectPath)
      exec(commandToInstallDeps, (code, stdout, stderr) => {
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
