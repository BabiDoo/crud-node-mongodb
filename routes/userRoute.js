const express = require('express');
const router = express.Router();
const user = require('../controllers/userController');

//CREATE
router.post(`/create`, user.create);

//READ
router.get('/users', (req, res) => {
  if (req.query.id) {
    return user.findById(req, res);
  }
  return user.findAll(req, res);
});

//Update
router.put(`/update`, user.update);

//Delete
router.delete(`/delete`, user.remove);


module.exports = router;