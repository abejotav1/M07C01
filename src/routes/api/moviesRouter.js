const express = require('express');
const router = express.Router();
const moviesController = require('../../controllers/api/moviesController');

router.get('/', moviesController.list);
router.get('/search', moviesController.search);
router.get('/:id', moviesController.detail);
router.post('/', moviesController.create);
router.delete('/:id', moviesController.delete);


module.exports = router;