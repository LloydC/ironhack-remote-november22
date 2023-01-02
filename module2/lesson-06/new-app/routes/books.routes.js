const express = require('express');
const router = express.Router();

const Book = require('../models/Book.model');

/* GET all the books page */
router.get("/", (req, res, next) => {
  Book.find()// query all the books
      .then(books => res.render("books/books", { books: books }))
      .catch(err => console.log(err))
  
});
// GET Create book route
router.get('/create', (req,res) =>{
    res.render('books/new-book')
})


// POST Create book route
router.post('/create', (req,res) =>{
    console.log(req.body)
    const { title, description, author, rating } = req.body;

    Book.create({ title, description, author, rating: Number(rating)})
        .then(() => res.redirect('/books/create'))
        .catch(err => console.log(err))
    
})

// password ---> bcrypt(password) --> Salt + Hashedpassword
// salt ---> khbdoibhsoihsiuvbe373873
// hashedPassword ---> iuehfoisehfiwhaowdeihweidhoewiu
// passwordHashing ---> khbdoibhsoihsiuvbe373873iuehfoisehfiwhaowdeihweidhoewiu

// saltRounds = 1
// ghuyeg
//saltRounds = 2
// 627hieugiw

module.exports = router;