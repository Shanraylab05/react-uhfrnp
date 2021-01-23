import React from "react";
import "./style.css";

//function Skills(props){
 // return(
 //    <h1 style={{color:"red"}}>My Skill: {props.empskill} </h1>
 // )
//}

class Skills extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  render() {
    return (
      <div>
       <h1 style={{color:"red"}}>My Skill: {this.props.empskill} </h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}




export default Skills