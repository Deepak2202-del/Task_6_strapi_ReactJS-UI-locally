'use strict';

/**
 * my-react-app router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::my-react-app.my-react-app');
