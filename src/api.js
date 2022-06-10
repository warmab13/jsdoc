import express from 'express';
const app = express();

/**
 * @module api
 */
/**
 * Index route
 * @name index
 * @path {GET} /
 */
app.get('/', (req, res) => res.send('Welcome'));

/**
 * Index route
 * @name users
 * @path {POST} /users
 */
app.post('/users', (req, res) => res.send('Users'));

/**
 * Index route
 * @name products
 * @path {DELETE} /products
 */
app.delete('/products', (req, res) => res.send('Producst'));

/**
 * Index route
 * @name signin
 * @path {POST} /signin
 */
app.post('/signin', (req, res) => res.send('Auth'));