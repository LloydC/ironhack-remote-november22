const express = require('express');
const router = express.Router();

// require the Drone model here
const Drone = require('../models/Drone.model');

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  Drone.find()
      .then(drones => res.render('drones/list', { drones }))
      .catch(err => console.log(err))
});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  res.render('drones/create-form')
});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  const {name, propellers, maxSpeed} = req.body;

  Drone.create({
    name,
    propellers: Number(propellers),
    maxSpeed: +maxSpeed
  })
  .then(()=> res.redirect('/drones'))
  .catch(err => console.log(err))
});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  const { id } = req.params;

  // Drone.findOne({_id: id})
  Drone.findById(id)
    .then(foundDrone => res.render('drones/update-form', foundDrone))
    .catch(err => console.log(err))
  
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  const { name, propellers, maxSpeed } = req.body;
  const { id } = req.params;

  Drone.findByIdAndUpdate(id, {name, propellers, maxSpeed})
      .then(() => res.redirect('/drones'))
      .catch(err => console.log(err))
  
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  const { id } = req.params;

  Drone.findByIdAndDelete(id)
      .then(() => res.redirect('/drones'))
      .catch(err => console.log(err))
});

module.exports = router;
