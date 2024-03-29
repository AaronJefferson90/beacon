/* eslint-disable @typescript-eslint/no-var-requires */
/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)
const preprocessor = require("@cypress/webpack-preprocessor");
const codeCoverage = require("@cypress/code-coverage/task");
const clipboardy = require("clipboardy");

const webpackOptions = require("./webpack.config.js");

/**
 * @type {Cypress.PluginConfig}
 */
module.exports = (on, config) => {
  if (config.testingType === "component") {
    const { startDevServer } = require("@cypress/webpack-dev-server");

    on("dev-server:start", (options) =>
      startDevServer({ options, webpackConfig: webpackOptions })
    );
  } else {
    // load the webpack preprocessor
    on("file:preprocessor", preprocessor({ webpackOptions }));
  }

  // collect code coverage
  codeCoverage(on, config);

  // listen to clipboard
  on("task", {
    getClipboard() {
      return clipboardy.read();
    },
  });

  return config;
};

require("@applitools/eyes-cypress")(module);
