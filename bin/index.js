#!/usr/bin/env node

// Natives
const fs = require('fs')
const {resolve} = require('path')

// Packages
const args = require('args')
const chalk = require('chalk')
const copy = require('copy')

args
  .option('name', 'Name of the basic micro application', 'micro-service')

const {name} = args.parse(process.argv)

const path = resolve(process.cwd(), name)

const templatePath = resolve(__dirname, 'templates')

fs.access('/etc/passwd', fs.constants.W_OK, err => {
  if (err) {
    chalk.red(`ERROR: ${err.message}`)
    return
  }
  fs.mkdirSync(path);
  copy(resolve(templatePath, 'package.json'), resolve(path, 'package.json'))
  copy(resolve(templatePath, 'index.js'), resolve(path, 'src/index.js'))
})
