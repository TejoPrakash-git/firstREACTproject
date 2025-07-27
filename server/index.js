const express = require('express');
const app = express();
const mongoose = require('mongoose');
const userRouter = require('./routes/user.js');

mongoose.connect('mongodb://localhost/mydatabase', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(express.json());
app.use('/api', userRouter);

app.listen(5000, () => {
  console.log('Server listening on port 5000');
});