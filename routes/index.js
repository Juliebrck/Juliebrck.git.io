var express = require('express');
var router = express.Router();

require('../models/connection');

var emailModel = require('../models/emails');

var parfums = [{
  url: "../images/Marine.jpg",
  name: "Slow Burn Desire",
  description: "Ce parfum évoque la passion dévorante dans laquelle deux êtres se plongent avec urgence, éperdument...",
},
{
  url: "../images/Marine.jpg",
  name: "Slow Burn Desire",
  description: "Ce parfum évoque la passion dévorante dans laquelle deux êtres se plongent avec urgence, éperdument...",
},
{
  url: "../images/Marine.jpg",
  name: "Slow Burn Desire",
  description: "Ce parfum évoque la passion dévorante dans laquelle deux êtres se plongent avec urgence, éperdument...",
}]

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('menu', {parfums});
});

// Ajouter email à la base de données //

router.post('/new-email', async function(req, res, next) {

  var newEmail = new emailModel({
     email: req.body.monemail,
   });

   var newEmail = await newEmail.save();

  res.render('menu', {parfums})
});

// Route vers HISTOIRE //

router.get('/histoire', function(req, res, next) {
  res.render('histoire');
});

// Route vers PARFUMS //

router.get('/parfums', function(req, res, next) {
  res.render('parfums', {parfums});
});

// Route vers ATELIERS //

router.get('/ateliers', function(req, res, next) {
  res.render('ateliers');
});

module.exports = router;
