const router = require('express').Router();
const { getSummary } = require('../controllers/summary.controller');
const auth = require('../middleware/auth.middleware');
const { authorizeRoles } = require('../middleware/role.middleware');

router.get('/', auth, authorizeRoles('admin', 'analyst'), getSummary);

module.exports = router;