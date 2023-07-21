const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const express = require('express');
const router = express.Router();
const Auth = require('../../models/authSchema');

router.post('/', async (req, res) => {
  const { signature, address } = req.body;
  return;
});

module.exports = router;
