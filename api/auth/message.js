const express = require('express');
const router = express.Router();
const { sign_message } = require('../../constants/index');

router.get('/', async (req, res) => {
  try {
    res.send({ message: `${sign_message}` });
  } catch (error) {
    res.send({ status: 'error' });
  }
});
module.exports = router;
