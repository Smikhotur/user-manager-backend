const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');
const cors = require('cors');
const passport = require('passport');
require('dotenv').config();
const usersRouter = require('./routes/users');
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(cookieParser());
app.use(cors({
  credentials: true,
  origin: process.env.CLIENT_URL_HOST
}));
app.use('/api', usersRouter);
app.use(cookieSession({
  name: 'session',
  keys:['lama'],
  maxAge: 24 * 60 * 60 * 100,
}));
app.use(passport.initialize());
app.use(passport.session());

mongoose.connect(process.env.DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log("DB Connetion Successfull");
})
.catch((e) => {
  console.log(e.message);
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`)
});
