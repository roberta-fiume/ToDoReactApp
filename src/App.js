import React from 'react';
import logo from './logo.svg';
import { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  return (
    <div className="App">
        <Granparent />
    </div>
  );
}

const Granparent = (props) => {

  const learnString = " I learned to:";

  const [checkboxstate, setCheckboxState] = useState({
    firstCheckbox: "",
    secondCheckbox:"",
    third: "",
    fourth: ""
  });

  const [showCheckboxState, setShowCheckboxState] = useState(false);

  const handleChange = event => {
    setCheckboxState({
      ...checkboxstate,
      [event.target.name]: event.target.value
    });
  };

  console.log(checkboxstate);
  
 function printArray(event){
    event.preventDefault();
    console.log("THIS IS MY NEW STATE", checkboxstate);
    setShowCheckboxState(true);
    console.log("THIS IS MY NEW STATE for showCheckboxState", showCheckboxState);
  }
  
  return (
  <div>
    <h2>{props.value}</h2>
    <form onSubmit = {printArray}>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="header-color">
          Things to do in React: 
        </h1>

        <div className="ui checkbox">
          <input type="checkbox"  name="firstCheckbox" type="checkbox" value={"Learn to use props"} onChange={handleChange}  />
          <label>Learn to use props</label>
        </div>
        <div className="ui checkbox">
          <input type="checkbox" name="secondCheckbox"  type="checkbox" value={"Learn to use state"}  onChange={handleChange} className="checkbox" />
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
    
    <Parent value = {learnString} checkboxstate = {checkboxstate} showCheckboxState = {showCheckboxState}/>
  
  </div>
  );
}
const Parent = ({ value, checkboxstate, showCheckboxState }) => { //prop destructuring
  return (
    <div className="App-header">
      <h1>{value}</h1>
      {showCheckboxState &&
        <div>
          <p>{checkboxstate.firstCheckbox}</p>
          <p>{checkboxstate.secondCheckbox}</p>
          <p>{checkboxstate.third}</p>
          <p>{checkboxstate.fourth}</p>
        </div>
      }
    </div>
  )
}

export default App;
