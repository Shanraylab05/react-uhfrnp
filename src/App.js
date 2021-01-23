import React from "react";
import "./style.css";

export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <FirstComponent></FirstComponent>
      <Second></Second>
      
    </div>
  );
}

class FirstComponent extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Murali</h1>
      </div>
    );
  }
}

function Second(){
  return(
     <h1>function based Component</h1>
  )
}