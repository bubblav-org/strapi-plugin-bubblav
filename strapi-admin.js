'use strict';

// The admin entry is bundled to plain CJS (dist/admin.js) at publish time —
// the source in admin/src uses ESM + JSX, which a bare require() cannot load.
const admin = require('./dist/admin.js');

module.exports = admin.default ?? admin;
