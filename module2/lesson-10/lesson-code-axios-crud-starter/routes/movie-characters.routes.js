const router = require("express").Router();
const ApiService = require('../services/api.service');
const apiService = new ApiService(); // creating an instance of service

// List all the characters from the API.
router.get('/movie-characters/list', (req, res) => {
    apiService
    .getAllCharacters()
    .then((response) => {
        console.log(response.data)
        res.render('pages/characters-list', { characters: response.data }) // <== leave this line commented for now
    })
    .catch(error => console.log(error));
  });
   
  // Render a form to create a new character.
  router.get('/movie-characters/create', (req, res) => {
    res.render("pages/new-character-form");
  });
   
  // Submit info to create a new character.
  router.post('/movie-characters/create', (req, res) => {
    //const { name, occupation, weapon} = req.body

    apiService
    .createCharacter(req.body)
    .then(() => res.redirect('/movie-characters/list'))
    .catch(err => console.log(err))
  });
   
  // Render a form to edit a character.
  router.get('/movie-characters/edit/:id', (req, res) => {
    apiService
    .getOneCharacter(req.params.id)
    .then((response) => {
        res.render("pages/edit-character-form", {character: response.data})
    })
 
  });
   
  // Submit info to edit a character with a matching id.
  router.post('/movie-characters/edit/:id', (req, res) => {
    console.log(req.params.id, req.body)
   apiService
   .editCharacter(req.params.id, req.body)
   .then(()=> res.redirect('/movie-characters/list'))
   .catch(err => console.log(err))
  });
   
  // Delete a character with a matching id.
  router.get('/movie-characters/delete/:id', (req, res) => {
    apiService
    .deleteCharacter(req.params.id)
    .then(() => res.redirect('/movie-characters/list'))
    .catch(err => console.log(err))
  });

module.exports = router;
