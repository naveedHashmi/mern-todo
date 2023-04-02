import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";


function EditTodo() {
  const [description, setDescription] = useState('')
  const [responsible, setResponsible] = useState('')
  const [priority, setPriority] = useState('')
  const [completed, setCompleted] = useState(false)
  const params = useParams();

  const onChangeDescriptionHandler = (e) => {
    setDescription(e.target.value)
  }

  const onChangeResponsibleHandler = (e) => {
    setResponsible(e.target.value)
  }

  const onChangepriorityHandler = (e) => {
    setPriority(e.target.value)
  }

  const onChangeCompletedHandler = (e) => {
    setCompleted(e.target.value == 'false')
  }

  const onFormSubmitHandler = (e) => {
    e.preventDefault();

    const updatedTodo = {
      description: description,
      responsible: responsible,
      priority: priority,
      completed: completed,
    }

    axios.post(`http://localhost:4000/todos/update/${params.id}`, updatedTodo)
         .then((response) => console.log(response))
         .catch((error) => console.log(error));

    console.log('Form submitted with values: ', description, responsible, priority)
  }

  useEffect(() => {
    axios.get(`http://localhost:4000/todos/${params.id}`)
         .then((response) => {
          console.log(response.data)
          const data = response.data;
          setCompleted(data.completed);
          setDescription(data.description);
          setPriority(data.priority);
          setResponsible(data.responsible);
         })
         .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <div>
        <h3>Edit Todo</h3>
        <form onSubmit={onFormSubmitHandler}>
          <div className="form-group">
            <label>Description: </label>
            <input
              type="text"
              className="form-control"
              value={description}
              onChange={onChangeDescriptionHandler}
            />
          </div>
          <div className="form-group">
            <label>Responsible: </label>
            <input
              type="text"
              className="form-control"
              value={responsible}
              onChange={onChangeResponsibleHandler}
            />
          </div>
          <div className="form-group">
            <label>Priority: </label>
            <div className="form-check form-check-inline">
              <input
                type="radio"
                id="priorityLow"
                name="priorityOptions"
                className="form-check-input"
                value='Low'
                checked={priority=='Low'}
                onChange={onChangepriorityHandler}
              />
              <label>Low</label>
            </div>
            <div className="form-check form-check-inline">
              <input
                type="radio"
                id="perioritMedium"
                name="priorityOptions"
                className="form-check-input"
                value='Medium'
                checked={priority=='Medium'}
                onChange={onChangepriorityHandler}
              />
              <label>Medium</label>
            </div>
            <div className="form-check form-check-inline">
              <input
                type="radio"
                id="priorityHigh"
                name="priorityOptions"
                className="form-check-input"
                value='High'
                checked={priority=='High'}
                onChange={onChangepriorityHandler}
              />
              <label>High</label>
            </div>
          </div>
          <div>
            <label>Completed: </label>
            <input
              type="checkbox"
              id="completedCheckbox"
              name="completedCheckbox"
              onChange={onChangeCompletedHandler}
              checked={completed}
              value={completed}
            />
          </div>
          <div className="form-group">
            <input type="submit" value="Update Todo" className="btn btn-primary"/>
          </div>
        </form>
      </div>
    </div>
  )
}

export default EditTodo;
