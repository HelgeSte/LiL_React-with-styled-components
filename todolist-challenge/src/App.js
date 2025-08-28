import React from "react";
import TodoList from "./components/todolist";

// The App component needs to be here for the tests
const App = () => {
    const todos = [{ id: "1", title: "Buy groceries", age: 45}, {id: "2", title: "Finish homework", age: 46}, {id:"3", title: "Go for a run", age: 47}];
    return <TodoList todos={todos} />;
}

export default App;