const BookDetails = ({ book }) => (
  <div>
    <h2>{book.title}</h2>
      <p>Author: {book.author}</p>
      <p>Year: {book.year}</p>
  </div>
);

export default BookDetails;