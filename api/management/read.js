const express = require('express');
const router = express.Router();
const Vehicle = require('../../models/vehicleSchema');
const Auth = require('../../models/authSchema');

router.get('/', async (req, res) => {
  const { email } = req.query;

  try {
    const user = await Auth.findOne({ email: email });
    console.log(user);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    const userId = user._id;
    const vehicles = await Vehicle.find({ userId });

    return res.status(201).json({ status: 'ok', data: vehicles });
  } catch (error) {
    return res.status(500).json({ error: 'Failed to get vehicles' });
  }
});

module.exports = router;
