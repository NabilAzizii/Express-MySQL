const logRequest = (req, res, next) => {
  console.log('Log Request ke PATH: ', req.path);
  next();
};

module.exports = logRequest;
