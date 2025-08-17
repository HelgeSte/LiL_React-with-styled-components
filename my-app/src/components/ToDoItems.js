import React from "react";



const ToDoList = ({label}) => {
    let uniqueId=55;
    return (
        <div>
            <h1>My ToDo list</h1>
            <ul>
                { label.map (item => (
                <li key={uniqueId++}>{item}</li>
                ))}
            </ul>

            
        </div>
    );
}

export default ToDoList;