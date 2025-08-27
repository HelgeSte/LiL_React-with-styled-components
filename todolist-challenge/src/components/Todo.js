import React from "react";

const Todo = ({key, title, age, id}) => {
    return <li key={key}>{id}{age}: {title}</li>;
};

export default Todo;