import React from "react";
import TaskItem from "./TaskItem";

class TasksList extends React.Component {

  render() {  
    return (
      <div className="col">
        <div className="card">
          {this.props.tasks.map(task => (
            <TaskItem 
               key={task.id} 
               task={task} 
               handleChangeProps={this.props.handleChangeProps} //this was passed from Parent component through props
               deleteTaskProps={this.props.deleteTaskProps}
               selectTaskProps={this.props.selectTaskProps}
               editTaskProps={this.props.editTaskProps}
              />
          ))}     
        </div>
      </div>
    )
  }
}

export default TasksList