const express = require('express');
const router = express.Router();
const eventController = require('../controllers/eventController');

router.post('', eventController.addEvent);
router.get('', eventController.getEvents);
router.get('/:id', eventController.getEventById);
router.put('/:id', eventController.modifyEvent)
router.delete('/:id', eventController.deleteEvent);

module.exports = router;