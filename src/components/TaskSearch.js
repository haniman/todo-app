import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom";



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
    <div className="App">
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleChange}
      />
      <ul>
         {searchResults.map(item => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default TaskSearch