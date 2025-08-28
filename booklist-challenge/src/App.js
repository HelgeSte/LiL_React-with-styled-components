// React 16.x code​​​​​​‌‌‌​​​​‌​​‌​​​​​‌​​‌‌​‌​​ below
import React from "react";
import { books } from "./components/Books";

///Write your answer here, and then test your code.
// Your job is to complete the BookList component and the BookDetails component to display the books in the data.json file.

import BookList from "./components/BookList";

// The App component needs to be here for the tests
const App = () => {
    
    return <BookList books={books} />
}

export default App;