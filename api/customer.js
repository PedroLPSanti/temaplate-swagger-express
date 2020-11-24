const express = require('express');

const route = express();

module.exports = app => {
  const { customer } = app.controllers;
/**
 * @swagger
 * /api/customer?email={email}:
 *  get:
 *    parameters:
 *       - in: path
 *         name: email
 *         type: string
 *         required: true
 *         description: teste
 *    description: Use to request all customers
 *    responses:
 *      '200':
 *        description: A successful response
 */
  route.get('/', customer.get);


/**
 * @swagger
 *
 * /api/customer:
 *   post:
 *     description: Creates a user
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: user
 *         description: User object
 *         in:  body
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: users
 */
  route.post('/', customer.post);


  return route;
};
