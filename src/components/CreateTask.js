import React, { Component, useState, useEffect } from "react"


function CreateTask (props) {
  
const [task, setTask] = useState();
// Get the persisted tasks on first render only
const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("tasks") || "[]"));

const [state, setState] = useState("");
  
  const onChange = (e) => {
    setState({title:e.target.value,});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addTaskProps(state.title);
    setState({title: "",});
    //localStorage.setItem('tasks',JSON.stringify(tasks));
  };

  useEffect(() => {
      const tasks = JSON.parse(localStorage.getItem('tasks'));
      if (tasks) {
        setTasks(tasks);
      }
    }, []);
 
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  
  return (
    <div className="col-lg-2 col-md-2 col-sm-12 col-xs-12">

      <button type="button" className="btn btn-primary float-right" data-toggle="modal" data-target="#exampleModal">
        + New Task
      </button>

      <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">New Task</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="modal-body">
                  <input type="text" className="form-control" placeholder="Task Name" value={state.title} name="title" 
                  onChange={onChange} />  
              </div>
              <div className="modal-footer">
                <div class="w-100">
                  <input type="submit" className="btn btn-primary w-100" value="+ New Task" />
                  </div>
              </div>
            </form>
          </div>
        </div>
      </div>

    </div>
    )
  
}
export default CreateTask