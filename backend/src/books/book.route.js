const express = require('express');
const req = require('./book.model');
const { postABook, getAllBooks, getSingleBook, UpdateBook, deleteABook } = require('./book.controller');
const verifyAdminToken = require('../middleware/verifyAdminToken');
const router = express.Router();

//frontend => backend server => controller=> book schema => database => send to server=>back to frontend
//post = when submit something from frontend to db
//get = when get something from db to frontend 
//put/pstch = when edit/update something
//delete = to delete 

// post a book
router.post("/create-book",verifyAdminToken,postABook)

//get all books
router.get("/", getAllBooks)

//single book endpoint
router.get("/:id", getSingleBook)

//update a book
router.put("/edit/:id",verifyAdminToken ,UpdateBook)

router.delete("/:id",verifyAdminToken,deleteABook)

module.exports = router;