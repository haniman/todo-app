import React, { useState, useEffect } from "react";

function TaskCompleted(props) {

    const [tasksCompleted,setTasksCompleted] = useState(0);
    const [task,setTask] = useState(props.tasks);
    const [totalTask, setTotalTask] = useState(props.tasks.length)

    useEffect(() => { 
        let tasks = JSON.parse(localStorage.getItem("tasks"));
        setTask(tasks);
        setTotalTask(tasks.length);
        setTasksCompleted(tasks.filter(task => task.completed).length) 
    });

    return (
        <div className="col-lg-4 col-xs-12 col-sm-12 pr-1 d-flex">
          <div className="card card-body flex-fill">
            <div className="card-body">
              <h5 className="card-title">Task Completed</h5>
              <p className="card-text">
                <span className="taskdone"> {tasksCompleted} </span><span className="tasktotal"> / {props.tasks.length} </span>
              </p>
            </div>
          </div>
        </div>
      )
}

export default TaskCompleted