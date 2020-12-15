/*\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\
Filename : exploding-chickens/config/setup.js
Desc     : checks and sets up configuration values
           in env.json using data-store
Author(s): RAk3rman
\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\*/

//Packages
const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');
const chalk = require('chalk');
const ora = require('ora');
const spinner = ora('');

// Name : setup.check_values()
// Desc : checks all env.json values and configures each value if invalid
// Author(s) : RAk3rman
exports.check_values = function (config_storage) {
    spinner.start(`${chalk.cyan('Setup')}: Checking configuration values`);
    let invalid_config = false;
    //Config value: webserver_port | the port where the webserver will listen for requests
    if (!config_storage.has('webserver_port') || config_storage.get('webserver_port') === '') {
        config_storage.set('webserver_port', 3000);
        spinner.warn(`${chalk.cyan('Setup')}: "webserver_port" value in config.json set to default: "3000"`);
    }
    //Config value: mongodb_url | the url used to access an external mongodb database
    if (!config_storage.has('mongodb_url') || config_storage.get('mongodb_url') === '') {
        config_storage.set('mongodb_url', 'mongodb://localhost:27017');
        spinner.warn(`${chalk.cyan('Setup')}: "mongodb_url" value in config.json set to default: "mongodb://localhost:27017"`);
    }
    //Config value: express_secret | the session secret value used for express
    if (!config_storage.has('express_secret') || config_storage.get('express_secret') === '') {
        let new_secret = uuidv4();
        config_storage.set('express_secret', new_secret);
        spinner.warn(`${chalk.cyan('Setup')}: "express_secret" value in config.json set to default: "` + new_secret + `"`);
    }
    //Config value: verbose_debug_mode | the verbosity of output to the console
    if (!config_storage.has('verbose_debug_mode') || config_storage.get('verbose_debug_mode') === '') {
        config_storage.set('verbose_debug_mode', false);
        spinner.warn(`${chalk.cyan('Setup')}: "verbose_debug_mode" value in config.json set to default: "false"`);
    }
    //Exit if the config values are not set properly
    if (invalid_config) {
        spinner.info(`${chalk.cyan('Setup')}: Please check "env.json" and configure the appropriate values`);
        process.exit(0);
    } else {
        spinner.succeed(`${chalk.cyan('Setup')}: Configuration values have been propagated`);
    }
}