var express = require('express');
var router = express.Router();
var UserController = require('../controllers/userController.js');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send({name:"Lucifer"});
});
router.post('/signup', UserController.signUp);
router.post('/signin', UserController.login);
router.get('/users', UserController.getUser);
router.delete('/user/:id', UserController.deleteUser);

module.exports = router;
