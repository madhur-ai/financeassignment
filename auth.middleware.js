module.exports = (req, res, next) => {
  // Mock user (for assignment simplicity)
  req.user = { role: 'admin' };
  next();
};