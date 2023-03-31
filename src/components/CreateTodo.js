import { useState } from "react";

function CreateTodo() {
  const [description, setDescription] = useState('')
  const [responsible, setResponsible] = useState('')
  const [periority, setPeriority] = useState('')

  const onChangeDescriptionHandler = (e) => {
    setDescription(e.target.value)
  }

  const onChangeResponsibleHandler = (e) => {
    setResponsible(e.target.value)
  }

  const onChangePeriorityHandler = (e) => {
    setPeriority(e.target.value)
  }

  const onFormSubmitHandler = (e) => {
    e.preventDefault();

    console.log('Form submitted with values: ', description, responsible, periority)
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
            <label>Periority: </label>
            <div className="form-check form-check-inline">
              <input
                type="radio"
                id="periorityLow"
                name="periorityOptions"
                className="form-check-input"
                value='Low'
                checked={periority=='Low'}
                onChange={onChangePeriorityHandler}
              />
              <label>Low</label>
            </div>
            <div className="form-check form-check-inline">
              <input
                type="radio"
                id="perioritMedium"
                name="periorityOptions"
                className="form-check-input"
                vlaue='Medium'
                checked={periority=='Medium'}
                onChange={onChangePeriorityHandler}
              />
              <label>Medium</label>
            </div>
            <div className="form-check form-check-inline">
              <input
                type="radio"
                id="periorityHigh"
                name="periorityOptions"
                className="form-check-input"
                vlaue='High'
                checked={periority=='High'}
                onChange={onChangePeriorityHandler}
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
