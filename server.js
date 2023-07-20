require('dotenv').config();
const express = require('express');
const cors = require('cors');
const controllers = require('./api/index');
const { Connect } = require('./utils/dbConnect');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/register', controllers.register);
app.use('/metamask_login', controllers.register);
app.use('/email_login', controllers.register);

app.listen(process.env.PORT || 5000, () => {
  console.log('Server Started');
  Connect();
});
