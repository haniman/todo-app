import React , { useEffect, useState }  from "react"; //to make syre jsx works
import { v4 as uuidv4 } from "uuid";
import TasksList from "./TaskList";
import Header from "./Header";
import CreateTask from "./CreateTask";
import EditTask from "./EditTask";
import TaskCompleted from "./TaskCompleted";
import TaskLatest from "./TaskLatest";
import TaskPie from "./TaskPie"; 
import TaskSearch from "./TaskSearch"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


class TaskContainer extends React.Component {

constructor(props) {
    super(props);
    this.state = {
      tasks: [
         {
           id: uuidv4(),
           title: "Clean the room",
           completed: false
         },
         {
           id: uuidv4(),
           title: "Buy some vegetables,chicken & chips",
           completed: false
         },
         {
           id: uuidv4(),
           title: "Reinstall windows on PC",
           completed: true
         },
        {
           id: uuidv4(),
           title: "Start to work on new feature",
           completed: false
         }
        ]
    };   
}

 // on load get the task list
  componentDidMount = () => {
    // get the task list from the local storage
    let tasks = JSON.parse(localStorage.getItem("tasks"));
  };

//method to handle checkbox change
handleChange = (id) => {
  this.setState(prevState => ({ //prevState is an updater method. to ensure we get the latest data/state
    tasks: prevState.tasks.map((task) => {
      if (task.id === id) {
        task.completed = !task.completed;
      }
      return task;
      }),

    }));
};

//method to edit item from list
editTask = (id,newName) => {
  const editedTaskList = 
  this.setState(prevState => ({ //prevState is an updater method. to ensure we get the latest data/state
    tasks: prevState.tasks.map((task) => {
      if (task.id === id) {
        return {...task, title: newName}
      }
      return task;
      }),

  }));

};

//method to remove item from sopink list
selectTask = id => {
 this.setState(prevState => ({ //prevState is an updater method. to ensure we get the latest data/state
    tasks: prevState.tasks.map((task) => {
      if (task.id === id) {
        task.completed = !task.completed;
      }
      return task;
      }),
  }));
};

//method to count completed task
countTask = () => {
 this.setState(prevState => ({ //prevState is an updater method. to ensure we get the latest data/state
    tasks: prevState.tasks.map((tasks) => {
        let counter = 0;
        for (let i = 0; i < tasks.length; i++) {
          if (tasks[i].completed === true) {
            counter++;
          }
        }
      return counter,tasks.length;
      }),
  }));
};

//method to remove item from task list
delTask = id => {
  //console.log("deleted", id);
  //spread operator (…) allows us to grab the current tasks item(s) at every point
  this.setState({
    tasks: [
      ...this.state.tasks.filter(task => { //filter is used to remove deleieted item
        return task.id !== id;
      })
    ]
  });
  window.localStorage.setItem('tasks', JSON.stringify(this.state.tasks));
};

//method to add item
addTaskItem = (title) => {
  const newTask = {
    id: uuidv4(),
    title: title,
    completed: false
  };
  this.setState({
    tasks: [...this.state.tasks, newTask],  
  });
  localStorage.setItem('tasks', JSON.stringify(this.state.tasks));
};


componentDidUpdate(prevProps, prevState) {
  if (prevProps !== this.props) {
    console.log("props change");
  }
}

  //use (this.) because it is part of the class
  //passing handle method to TaskList component
  render() {
    return (
      <div>
        <Header />
        <div className="container">
            <div className="row row-top">
                <TaskCompleted 
                  tasks={this.state.tasks}
                  countTaskProps={this.countTask}
                />
                <TaskLatest tasks={this.state.tasks} />
                <TaskPie />
            </div>

          <div className="row row-search"> 
            <div className="ccol-lg-6 col-md-6 col-sm-12 col-xs-12">
              <h5>Tasks</h5>
            </div> 
            
            <TaskSearch />
            <CreateTask addTaskProps={this.addTaskItem} />
          </div>

          <div className="row">
            <TasksList 
              tasks={this.state.tasks} 
              handleChangeProps={this.handleChange} 
              deleteTaskProps={this.delTask}
              editTaskProps={this.editTask}
              selectTaskProps={this.selectTask}
            /> 
          </div>
        </div>
        </div>
    )
  }
  
}
export default TaskContainer