'use strict';

// This plugin is a pure setup helper: it registers no server routes, stores
// no settings, and talks to no external services. The Strapi connection is
// created entirely inside the BubblaV dashboard, where the user pastes their
// Strapi base URL and a read-only API token.
module.exports = {
  register() {},

  bootstrap() {},
};
