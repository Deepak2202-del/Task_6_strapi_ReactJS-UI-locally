'use strict';

/**
 * my-react-app service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::my-react-app.my-react-app');
