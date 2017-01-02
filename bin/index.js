#!/usr/bin/env node

// Packages
const args = require('args')
const chalk = require('chalk')

const createDir = require('./create-dir')
const getTemplateFiles = require('./get-template-files')
const renderTemplate = require('./render-template')
const createFile = require('./create-file')

args
  .option('name', 'Name of the basic micro application', 'micro-service')

const {name} = args.parse(process.argv)

createDir(name)
  .then(getTemplateFiles)
  .then(data => renderTemplate(data, {name}))
  .then(data => {
    const promises = data.map(templateData => createFile(templateData, name))
    return Promise.all(promises)
  })
  .then(() => console.log(chalk.green('CREATED!')))
  .catch(err => {
    console.log(chalk.red(`ERROR`))
    console.error(err)
  })
