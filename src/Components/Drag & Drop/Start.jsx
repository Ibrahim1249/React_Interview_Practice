import React from 'react'
import DragAndDrop from './DragAndDrop';
import "./drag.css"

function Start() {
    const initialData = {
        Todo: [
          "Design UI mockups",
          "Set up project repository",
          "Write unit test",
          "Integrate payment gateway",
        ],
        "In Progress": ["Develop authentication flow", "Implement responsive design"],
        Completed: [
          "Set up CI/CD pipeline",
          "Conduct code reviews",
          "Deploy initial version to staging",
        ],
      };
  return (
     <>
      <DragAndDrop initialData={initialData}/>
     </>
  )
}

export default Start