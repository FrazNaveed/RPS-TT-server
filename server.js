require('dotenv').config();
const express = require('express');
const cors = require('cors');
const controllers = require('./api/index');
const { VerifyToken } = require('./middleware/verifytoken');
const { Connect } = require('./utils/dbConnect');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/register', controllers.register);
app.use('/metamask_login', controllers.metamask_login);
app.use('/email_login', controllers.email_login);
app.use('/message', controllers.sign_message);
app.use('/create', VerifyToken, controllers.create_car);
app.use('/update', VerifyToken, controllers.update_car);
app.use('/delete', VerifyToken, controllers.delete_car);
app.use('/read', VerifyToken, controllers.read_car);

app.listen(process.env.PORT || 5000, () => {
  console.log('Server Started');
  Connect();
});
