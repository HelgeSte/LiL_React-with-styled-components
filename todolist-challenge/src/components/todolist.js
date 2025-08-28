// Write your answer here, and then test your code.
// Your job is to re-write the TodoList component using a map function
import Todo from "./Todo";
const TodoList = ({ todos }) => {
    return (
        <ul>
            {todos.map((todo) => (
                // in Todo: {key, id, title, age}
                <Todo key={todo.id+10} id={todo.id} title={todo.title} age={todo.age} />
            ))
            }    
        </ul>
    );
};

export default TodoList;