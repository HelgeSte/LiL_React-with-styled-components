import BookDetails from "./BookDetails";

const BookList = ({ books }) => (
  <div>
    <h1>My Reading List</h1>
    <div>
        {books.books.map((book) => (
        <BookDetails key={book.id} book={book} />
      ))}
    </div>
  </div>
);

export default BookList;