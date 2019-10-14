import React from 'react';
// import logo from './logo.svg';
import reactIcons from './react-icons.svg'
import crossIcon from './cross.png'
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

  const learnString = "I learned to:";
  const [checkboxstate, setCheckboxState] = useState({
    firstCheckbox: "",
    secondCheckbox:"",
    third: "",
    fourth: ""
  });

  const [showCheckboxState, setShowCheckboxState] = useState(false);



  const [showIconState, setIconState] = useState({
    display: "none"
  })


  const handleChange = event => {
    setCheckboxState({
      ...checkboxstate,
      [event.target.name]: event.target.value
    });
    setIconState({
      display:"flex"
    })
    console.log("THIS IS MY NEW STATE  FOR ICON", showIconState);
  };

  
 function changeCheckboxState(event){
    event.preventDefault();
    setShowCheckboxState(true);
    console.log("THIS IS THE ICON THAT BECOMES FLEX", showIconState)
  }

  return (
  <div className="wrapper-form">
    <h2 className="wrapper-title">{props.value}</h2>
    <form onSubmit = {changeCheckboxState} className="form">

     
      <div className="form__img-wrapper">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <img src={reactIcons} className="App-logo" alt="logo" />
          <h1 className="header-color" className="form__header rainbow">
            Things to do in React 
          </h1>
      </div>

      <div className="form__input-wrapper">
        <div className="ui checkbox" className="form__checkbox-box">
          <input type="checkbox"  name="firstCheckbox" type="checkbox" value={"Learn to use props"} onChange={handleChange} className="checkbox" />
          <label>Learn to use props</label>
        </div>
        <div className="form__checkbox-box">
          <input type="checkbox" name="secondCheckbox"  type="checkbox" value={"Learn to use state"}  onChange={handleChange} className="checkbox" />
          <label>Learn to use State</label>
        </div>
        <div className="form__checkbox-box">
          <input type="checkbox"   name="third" type="checkbox" value={"Learn to use destructure things"} onChange={handleChange} className="checkbox"/>
          <label>Learn to Destructure things</label>
        </div>
        <div className="form__checkbox-box">
          <input type="checkbox"  name="fourth" value={"Learn to use make API calls"} onChange={handleChange} className="checkbox"/>
          <label>Make API calls</label>
        </div>
      </div>
        <button className="button">SUBMIT</button>
    </form>
    
    <Parent value = {learnString} checkboxstate = {checkboxstate} showCheckboxState = {showCheckboxState} showIconState = {showIconState}/>
  
  </div>
  );
}
const Parent = ({ value, checkboxstate, showCheckboxState, showIconState }) => { //prop destructuring

  console.log("THIS IS MY CHECKBOX STATE IN PARENT",showIconState);

  

  

  // function renderImage() {
  //   console.log("I WORKKKK")
  //   if (showIconState) {
  //       return (
  //         <img src={crossIcon} alt="logo"  className="cross"/>
  //       );
  //   }


  return (
    <div className="parent-wrapper">
 
      {showCheckboxState &&
        <div>
          <div>
              <h1 className="parent-title">{value}</h1>
          </div>
          <div className="parent__image-wrapper">
              <img src={crossIcon}  style={showIconState} alt="logo"  className="cross"/>
              <p className="parent-paragraph" >{checkboxstate.firstCheckbox}</p>
          </div>
          <div className="parent__image-wrapper"> 
              <img src={crossIcon} style={showIconState} alt="logo" className="cross"/>
              <p className="parent-paragraph" >{checkboxstate.secondCheckbox}</p>
            </div>
          <div className="parent__image-wrapper">
              {/* <img src={crossIcon} alt="logo" className="cross"/> */}
              <p className="parent-paragraph" >{checkboxstate.third}</p>
          </div>
          <div className="parent__image-wrapper">
            {/* <img src={crossIcon} alt="logo" className="cross"/> */}
            <p className="parent-paragraph">{checkboxstate.fourth}</p>
        </div>
       </div>
        
      }
    </div>
  )
}

export default App;
