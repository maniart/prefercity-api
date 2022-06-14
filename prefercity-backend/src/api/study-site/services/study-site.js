'use strict';

/**
 * study-site service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::study-site.study-site');
