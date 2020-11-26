import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function TaskSearch() {

  const [tasks,setTask] = useState(JSON.parse(localStorage.getItem("tasks") || "[]"));
  
  useEffect(() => { 
      let tasks = JSON.parse(localStorage.getItem("tasks"));
      //setTask(tasks);
  });

const people = [];

for (let i = 0; i < tasks.length; i++){
  people.push(String(tasks[i].title));
} 


 const [searchTerm, setSearchTerm] = React.useState("");
 const [searchResults, setSearchResults] = React.useState([]);
 const handleChange = event => {
    setSearchTerm(event.target.value);
  };
 React.useEffect(() => {
    const results = people.filter(person =>
      person.toLowerCase().includes(searchTerm)
    );
    setSearchResults(results);
  }, [searchTerm]);

  return (
    <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
          <div className="form-group has-search">
              <span className="form-control-feedback"><FontAwesomeIcon icon="{['fas', 'fa-search']}" /></span>
               <input
                type="text"
                placeholder="Search by task name"
                className="form-control w-75 float-right"
                value={searchTerm}
                onChange={handleChange}
               /> 
          </div>
          <ul>
           {searchResults.map(item => (
             <li>{item}</li>
            ))}
          </ul>
      </div>
  );
}

export default TaskSearch