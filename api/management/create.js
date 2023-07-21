const express = require('express');
const router = express.Router();
const Vehicle = require('../../models/vehicleSchema');
const Auth = require('../../models/authSchema');

router.post('/', async (req, res) => {
  const { email, categories, color, model, make, registrationNumber } = req.body;
  try {
    const user = await Auth.findOne({ email: email });
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    const userId = user._id;
    const newVehicle = new Vehicle({
      userId,
      categories,
      color,
      model,
      make,
      registrationNumber,
    });

    const savedVehicle = await newVehicle.save();

    return res.status(201).json({ status: 'ok', data: savedVehicle });
  } catch (error) {
    return res.status(500).json({ error: 'Failed to create vehicle' });
  }
});

module.exports = router;
