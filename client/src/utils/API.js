import axios from "axios";


// ***********
//defaults still need to be updated with correct info and function names
// ***********

export default {
  // Gets all saved books
  getSavedBooks: function() {
    return axios.get("/api/tcms");
  },
  // Deletes the saved book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves an book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  }
};
