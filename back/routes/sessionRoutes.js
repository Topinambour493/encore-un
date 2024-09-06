const express = require('express');
const router = express.Router();
const sessionController = require('../controllers/sessionController');

router.post('', sessionController.addSession);
router.get('', sessionController.getSessions);
router.get('/:id', sessionController.getSessionById);
router.put('/:id', sessionController.modifySession)
router.delete('/:id', sessionController.deleteSession);

module.exports = router;