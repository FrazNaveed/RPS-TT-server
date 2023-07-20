const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const express = require('express');
const router = express.Router();
const Auth = require('../../models/authSchema');

router.post('/', async (req, res) => {
  const { email, password, address } = req.body;
  return;

  const encryptedPassword = await bcrypt.hash(password, 10);
  try {
    const oldUser = await User.findOne({ email });

    if (oldUser) {
      return res.json({ error: 'User Exists' });
    }
    await User.create({
      fname,
      lname,
      email,
      password: encryptedPassword,
      userType,
      income,
    });
    res.send({ status: 'ok' });
  } catch (error) {
    res.send({ status: 'error' });
  }
});

module.exports = router;
