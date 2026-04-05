const router = require('express').Router();
const { createRecord, getRecords, deleteRecord } = require('../controllers/record.controller');
const auth = require('../middleware/auth.middleware');
const { authorizeRoles } = require('../middleware/role.middleware');

router.use(auth);

router.post('/', authorizeRoles('admin'), createRecord);
router.get('/', authorizeRoles('admin', 'analyst', 'viewer'), getRecords);
router.delete('/:id', authorizeRoles('admin'), deleteRecord);

module.exports = router;