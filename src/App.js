import React from 'react';
import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

const App = () => {

  const learnString = " I learned to:"

  return (
    <div className="App">
        <ToDoComponent />
        <WhatIlearned value = {learnString}/>
    </div>
  );
}

//not possible to send props to child to sibling!

//send state to the parent (App) and then send it back to the child (What I learned). Probably need to remove state from ToDoComponent and put it in App


const ToDoComponent = () => {
    const [checkboxstate, setCheckboxState] = useState({
      firstCheckbox: "",
      secondCheckbox:"",
      third: "",
      fourth: ""
    }
  )

  const handleChange = event => {
    setCheckboxState({
      ...checkboxstate,
      [event.target.name]: event.target.value
    });
  };

  console.log(checkboxstate);
  
 function printArray(event){
    event.preventDefault();
    let arrCheckboxes = [];
    arrCheckboxes.push(checkboxstate);
    console.log("HELLOOO THIS IS MY ARRAY", arrCheckboxes)
  }
  
  return (
    <div>
        <form onSubmit = {printArray}>
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="header-color">
              Things to do in React: 
            </h1>

            <div className="ui checkbox">
              <input type="checkbox"  name="firstCheckbox" type="checkbox" value={"Learn to use props "} onChange={handleChange}  />
              <label>Learn to use props</label>
            </div>
            <div className="ui checkbox">
              <input type="checkbox"    name="secondCheckbox"  type="checkbox" value={"Learn to use state"}  onChange={handleChange} className="checkbox" />
              <label>Learn to use State</label>
            </div>
            <div className="ui checkbox">
              <input type="checkbox"   name="third" type="checkbox" value={"Learn to use destructure things"} onChange={handleChange} className="checkbox"/>
              <label>Learn to Destructure things</label>
            </div>
            <div className="ui checkbox">
              <input type="checkbox"  name="fourth" value={"Learn to use make API calls"} onChange={handleChange} className="checkbox"/>
              <label>Make API calls</label>
            </div>

            <button>SUBMIT</button>
          </header>
        </form>
    </div>

  )
}

const WhatIlearned = (props) => {
  console.log("THIS IS THE PROP", props);
  return (
    <div className="App-header">
        <h2>{props.value}</h2>
    </div>
  )
}


export default App;
