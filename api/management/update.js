const express = require('express');
const router = express.Router();
const Vehicle = require('../../models/vehicleSchema');

router.put('/:id', async (req, res) => {
  const { categories, color, model, make, registrationNumber } = req.body;
  const vehicleId = req.params.id;

  try {
    const vehicle = await Vehicle.findOne({ registrationNumber: vehicleId });

    if (!vehicle) {
      return res.status(404).json({ error: 'Vehicle not found' });
    }
    const updatedVehicle = await Vehicle.findByIdAndUpdate(
      vehicle._id,
      {
        categories,
        color,
        model,
        make,
        registrationNumber,
      },
      { new: true },
    );

    if (!updatedVehicle) {
      return res.status(404).json({ error: 'Vehicle not found' });
    }

    return res.status(200).json({ status: 'ok', data: updatedVehicle });
  } catch (error) {
    return res.status(500).json({ error: 'Failed to update vehicle' });
  }
});

module.exports = router;
