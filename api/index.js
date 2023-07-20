const register = require('./auth/register');
const metamask_login = require('./auth/metamaskLogin');
const email_login = require('./auth/emailLogin');

const controllers = {
  register,
  metamask_login,
  email_login,
};

module.exports = controllers;
