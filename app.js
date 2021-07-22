const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const dotenv = require('dotenv');

const getWeather = require('./controller/weather');

dotenv.config();

const app = express();

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short';

app.use(logger(formatsLogger));
app.use(express.json());

app.use(cors());

const PORT = process.env.PORT || 5555;

app.listen(PORT, () => {
  console.log(`Started listen on ${PORT}`);
});

app.use('/hello?', getWeather);

app.use((req, res) => {
  res.status(404).json({ message: 'Not found' });
});

app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
});

module.exports = app;
