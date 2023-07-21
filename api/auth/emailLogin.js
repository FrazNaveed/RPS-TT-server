const bcrypt = require('bcryptjs');
const Auth = require('../../models/authSchema');
const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET;
const express = require('express');
const router = express.Router();

router.post('/', async (req, res) => {
  const { email, password } = req.body;
  const user = await Auth.findOne({ email: email });

  if (!user) {
    return res.status(404).json({ error: 'User Not found' });
  }
  if (bcrypt.compare(password, user.password)) {
    const token = jwt.sign({ email: user.email }, JWT_SECRET, {
      expiresIn: '15m',
    });
    return res.status(201).json({ status: 'ok', data: token });
  } else {
    return res.status(401).json({ error: 'Invalid Password' });
  }
});
module.exports = router;
