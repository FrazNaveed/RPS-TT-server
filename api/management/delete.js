const express = require('express');
const router = express.Router();
const Vehicle = require('../../models/vehicleSchema');

router.delete('/:id', async (req, res) => {
  const vehicleId = req.params.id;
  try {
    const vehicle = await Vehicle.findOne({ registrationNumber: vehicleId });
    const deletedVehicle = await Vehicle.findByIdAndRemove(vehicle._id);

    if (!deletedVehicle) {
      return res.status(404).json({ error: 'Vehicle not found' });
    }

    return res.status(200).json({ status: 'ok', data: deletedVehicle });
  } catch (error) {
    return res.status(500).json({ error: 'Failed to delete vehicle' });
  }
});

module.exports = router;
