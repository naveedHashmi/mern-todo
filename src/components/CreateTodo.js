import { useState } from "react";
import axios from "axios";

function CreateTodo() {
  const [description, setDescription] = useState('')
  const [responsible, setResponsible] = useState('')
  const [priority, setPriority] = useState('')

  const onChangeDescriptionHandler = (e) => {
    setDescription(e.target.value)
  }

  const onChangeResponsibleHandler = (e) => {
    setResponsible(e.target.value)
  }

  const onChangepriorityHandler = (e) => {
    setPriority(e.target.value)
  }

  const onFormSubmitHandler = (e) => {
    e.preventDefault();

    const newTodo = {
      description: description,
      responsible: responsible,
      priority: priority,
    }

    axios.post('http://localhost:4000/todos/add', newTodo)
         .then((response) => console.log(response))
         .catch((error) => console.log(error));

    console.log('Form submitted with values: ', description, responsible, priority)

    setDescription('');
    setPriority('');
    setResponsible('');
  }

  return (
    <div>
      <div>
        <h3>Create Todo Form</h3>
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
            <label>priority: </label>
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
          <div className="form-group">
            <input type="submit" value="Create Todo" className="btn btn-primary"/>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CreateTodo;
