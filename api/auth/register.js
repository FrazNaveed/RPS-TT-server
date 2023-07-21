const bcrypt = require('bcryptjs');
const express = require('express');
const router = express.Router();
const Auth = require('../../models/authSchema');
const { GetSignerAddress } = require('../../utils/ecrecover');
const { GeneratePassword } = require('../../utils/generatePassword');
const { SendEmail } = require('../../utils/sendMail');

const register = async (email, address, password) => {
  try {
    const res = await Auth.create({
      email,
      address,
      password,
    });
    return { success: true, message: 'User created successfully' };
  } catch (error) {
    console.log(error);
    return { success: false, error: 'Failed to create user' };
  }
};

router.post('/', async (req, res) => {
  const { email, address, signature } = req.body;

  const userAddress = address.toLowerCase() || '';
  const usersignature = signature || '';

  if (userAddress && usersignature) {
    const recoveredAddress = GetSignerAddress(usersignature);

    if (recoveredAddress !== userAddress) {
      return res.status(400).json({ error: 'Invalid signature for the provided address' });
    }
  }

  try {
    const existingUser = await Auth.findOne({ email });
    if (existingUser) {
      if (userAddress && usersignature) {
        const recoveredAddress = GetSignerAddress(usersignature);
        if (recoveredAddress === userAddress) {
          existingUser.address = userAddress;
          await existingUser.save();
          return res
            .status(200)
            .json({ status: 'ok', message: 'User address updated successfully' });
        } else {
          return res.status(400).json({ error: 'Invalid signature for the provided address' });
        }
      } else {
        return res.status(409).json({ error: 'User already exists' });
      }
    } else {
      const password = GeneratePassword();
      const encryptedPassword = await bcrypt.hash(password, 10);
      const registrationResult = await register(email, userAddress, encryptedPassword);

      if (registrationResult.success) {
        await SendEmail(email, password).then((response) => {
          const regexPattern = /^250\s2\.0\.0\sOK/gm;
          if (regexPattern.test(response)) {
            return res.status(200).json({ status: 'ok', message: 'User created successfully' });
          } else {
            return res.status(500).json({ error: 'Failed to send email' });
          }
        });
      } else {
        return res.status(500).json({ error: 'Failed to create user' });
      }
    }
  } catch (error) {
    return res.status(500).json({ error: 'Something went wrong' });
  }
});

module.exports = router;
