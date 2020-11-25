import React, { useState, useEffect } from "react";

function TaskLatest(props) {

  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("tasks") || "[]"));
  useEffect(() => {
      let tasks = JSON.parse(localStorage.getItem("tasks"));
      if (tasks) {
        setTasks(tasks);
      }
    
    }, []);
  
    let a = tasks.reverse();   
    let b = a.slice(0,3);
    const listItems = b.map((task) => <li>{task.title}</li>);

    return (
        <div className="col-lg-4 col-xs-12 col-sm-12 pr-1 d-flex">
          <div className="card card-body flex-fill">
		      <div className="card-body ">
		        <h5 className="card-title">Latest Created Task</h5>
		        <ul>
                {listItems}     
            </ul>
		      </div>
	      </div>
        </div>

    )
  
}

export default TaskLatest