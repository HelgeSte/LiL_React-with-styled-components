// React 16.x code​​​​​​‌‌‌​​​​‌​​‌​​​​​‌​​‌‌​‌​​ below
import React from "react";

///Write your answer here, and then test your code.
// Your job is to complete the BookList component and the BookDetails component to display the books in the data.json file.

export const BookList = ({ books }) => (
  <div>
    <h1>My Reading List</h1>
    <div>
        {books.books.map((book) => (
        <BookDetails key={book.id} book={book} />
      ))}
    </div>
  </div>
);

export const BookDetails = ({ book }) => (
  <div>
    <h2>{book.title}</h2>
      <p>Author: {book.author}</p>
      <p>Year: {book.year}</p>
  </div>
);


// The App component needs to be here for the tests
const App = () => {
    const books = {
      books: [
    {
      id: 1,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      year: 1925,
    },
    {
      id: 2,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      year: 1960,
    },
  ]};

    return <BookList books={books} />;
}

export default App;