const express = require('express');
const router = express.Router();
const Auth = require('../../models/authSchema');
const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET;
const { GetSignerAddress } = require('../../utils/ecrecover');

router.post('/', async (req, res) => {
  const { address, signature } = req.body;
  const userAddress = address.toLowerCase() || '';
  const usersignature = signature || '';
  const recoveredAddress = GetSignerAddress(usersignature);
  const addr = await Auth.findOne({ address: userAddress });

  if (!addr) {
    return res.json({ error: 'User Not found' });
  }
  if (recoveredAddress == userAddress) {
    const token = jwt.sign({ address: addr.address }, JWT_SECRET, {
      expiresIn: '15m',
    });
    return res.status(201).json({ status: 'ok', data: token });
  } else {
    return res.status(400).json({ error: 'Invalid signature for the provided address' });
  }
});

module.exports = router;
