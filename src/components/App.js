//SGN
import React, {Component, useState} from "react";
import '../styles/App.css';

const projectList = [
      {name: "Smart-Way Coaching Institute app", 
        description: "It should be helpful to manage students, fee, syllabus etc. "
      },
      { name: "myPofile app", 
        description: "highlight my profile "
      }, 

      {
        name: "ToDoApp",
        description:" it should help to manage and remind daily task, weekly, monthly goals etc. ",
      },
]   

const App = () => {
  return (
    <div id="main" className="ns-wrapper">
       {/* ONS  */}
        {projectList.map((project, index) => (
          <div key={index} className="project">
            <h1 data-ns-test="project-name">{project.name}</h1>
            <h6 data-ns-test="project-description">{project.description}</h6>
          </div>
        ))}

    </div>
  )
}


export default App;
