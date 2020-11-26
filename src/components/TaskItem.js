import React , { useState, useEffect  } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

  function TaskItem(props) {

    const completedStyle = {
      fontStyle: "italic",
      color: "#666666",
      opacity: 0.4,
      textDecoration: "line-through",
    }

    const { completed, id, title } = props.task;
    const [tasks, setTasks] = useState(props.task);
    const [newName, setNewName] = useState('');
    const [isEditing, setEditing] = useState(false);

    function handleNameChange(e) {
      setNewName(e.target.value);
    }

    function handleSubmit(e) {
      e.preventDefault();
      props.editTaskProps(id, newName);
      setNewName("");
      setEditing(false);
    }

  //editing template
  const editingTemplate = (
    <form onSubmit={handleSubmit}>
     <div className="row">
        <div className="col-6">
          <div className="form-group">
            <label className="todo-label" htmlFor={id}>
              Enter the new name for {title}
            </label> &nbsp;
            <input id={props.id} className="from-control" type="text" value={newName} onChange={handleNameChange} />
          </div>
        </div>
        <div className="col-6">
          <div className="btn-group">
            <button type="button" className="btn btn-primary ">
              Cancel 
            </button> &nbsp;
            <button type="submit" className="btn btn-primary">
              Save 
            </button>
          </div>
        </div>
      </div>
    </form>
  );

//empty template
const viewTemplate = (
  <div></div>
 );

return (
   <ul className ="list-group list-group-flush">
      <li className="list-group-item">
        <div className="row">
          <div className="col-10">
            <input
              type="checkbox"
              checked={completed}
              onChange={() => props.handleChangeProps(id)}
            />
            <span className="item-text" style={completed ? completedStyle : null}>{title}</span>
          </div>
          <div className="col-2">
            <button type="button" className="btn float-right" onClick={() => props.deleteTaskProps(id)}><FontAwesomeIcon icon="trash" /></button>
            <button type="button" className="btn float-right" onClick={() => setEditing(true)}><FontAwesomeIcon icon="pencil-alt" /></button>
          </div>
        </div>
            {isEditing ? editingTemplate : viewTemplate}
      </li>
    </ul>
)

  
}

export default TaskItem