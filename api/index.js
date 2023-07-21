const register = require('./auth/register');
const metamask_login = require('./auth/metamaskLogin');
const email_login = require('./auth/emailLogin');
const sign_message = require('./auth/message');
const create_car = require('./management/create');
const update_car = require('./management/update');

const controllers = {
  register,
  metamask_login,
  email_login,
  sign_message,
  create_car,
  update_car,
};

module.exports = controllers;
