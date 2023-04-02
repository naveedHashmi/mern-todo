import axios from "axios";
import { useState, useEffect } from "react";
import Todo from "./Todo";


function TodoList() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4000/todos')
         .then((response) => setTodos(response.data))
         .catch((error) => console.error(error));
  }, []);
  return (
    <div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Description</th>
            <th>Responsible</th>
            <th>Priority</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          { todos.map(todo => <Todo todo={todo} />)}
        </tbody>
      </table>
    </div>
  )
}

export default TodoList;
