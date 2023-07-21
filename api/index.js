const register = require('./auth/register');
const metamask_login = require('./auth/metamaskLogin');
const email_login = require('./auth/emailLogin');
const sign_message = require('./auth/message');
const controllers = {
  register,
  metamask_login,
  email_login,
  sign_message,
};

module.exports = controllers;
