const express = require('express');

const route = express();

module.exports = app => {
  const { customer } = app.controllers;
/**
 * @swagger
 * /api/customer:
 *  get:
 *    description: Use to request all customers
 *    responses:
 *      '200':
 *        description: A successful response
 */
  route.get('/', customer.get);
  return route;
};
