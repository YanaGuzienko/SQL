const getWeather = async (req, res) => {
  const { name } = req.query;

  try {
    if (!name) {
      res.status(404).json({
        message: 'Enter your name',
      });
    } else {
      res.status(200).json({
        status: 'success',
        code: 200,
        message: `Hello ${name}`,
      });
    }
  } catch (error) {
    res.status(404).json({ message: 'Not found' });
  }
};

module.exports = getWeather;
