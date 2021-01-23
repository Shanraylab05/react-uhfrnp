import React from "react";
import "./style.css";

import Skills from "./Skills";


export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>    
      <FirstComponent>        
      </FirstComponent>
    
      
    </div>
  );
}

class FirstComponent extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Murali</h1>
         <Skills empskill="React Js and Dotnet"></Skills>
      </div>
    );
  }
}

function Second(){
  return(
     <h1>function based Component</h1>
      
    
  )
}