import React from 'react';
import logo from './logo.svg';
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

const ToDoComponent = () => {
  return (
    <div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 class="header-color">
          Things to do in React: 
        </h1>

        <div class="ui checkbox">
          <input type="checkbox" class="checkbox"  />
          <label>Learn to use props</label>
        </div>
        <div class="ui checkbox">
          <input type="checkbox" class="checkbox"  />
          <label>Learn to use State</label>
        </div>
        <div class="ui checkbox">
          <input type="checkbox" class="checkbox"  />
          <label>Learn to Destructure things</label>
        </div>
        <div class="ui checkbox">
          <input type="checkbox" class="checkbox"  />
          <label>Make API calls</label>
        </div>

      
      </header>
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
