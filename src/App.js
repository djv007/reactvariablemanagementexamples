import React,{useEffect, useRef, useState} from 'react';
import { createStore } from 'redux';

import LanguageContext from './LanguageContext';
import DisplaySelectedLanguage from './DisplaySelectedLanguage';
import ShowSomeMoreVarsFromContext from "./ShowSomeMoreVarsFromContext";
function App() {  


  //react does not know if defaultValue is an object unless u specify it

  let [defaultValue,setDefaultValue]=useState({});

 
  useEffect(()=>{

    setTimeout(function()
 {

  //fetch().then("")
  console.log("change the context provider value")
  setDefaultValue({ language:"English",var1:"valueOfVar1",var2:"valueOfVar2",var3:[4,5,6],var4:{name:"reactlearner",age:45}});

 }
 ,3000);


  } , [])



const initialState = 0;


//slice is a reducer for reduxjs toolkit library 

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'PLUS': {
      return state + (action.payload || 0);
    }
    case 'MINUS': {
      return state - (action.payload || 0);
    }
    default: {
      return state;
    }
  }
};

//shallow/weak reference to the variable in the DOM

let inputRef= useRef();
let input2Ref= useRef();



const store = createStore(counterReducer);

const initialstate = store.getState();

store.dispatch({ type: 'PLUS', payload: 2 });
const dispatch_1 = store.getState();

store.dispatch({ type: 'PLUS', payload: 1 });
const dispatch_2 = store.getState();

store.dispatch({ type: 'MINUS', payload: 2 });
const dispatch_3 = store.getState(); 


//1

store.dispatch({ type: 'PLUS', payload: 7 });
const dispatch_4 = store.getState(); 


const styleInputs = (inputRef,defaultValue) => {
  inputRef.current.focus()
  inputRef.current.style.backgroundColor = "darkred";
  inputRef.current.style.width = "150px";
  inputRef.current.style.height = "10px";
  inputRef.current.style.color = "white";
  inputRef.current.style.margin = "5px";
  inputRef.current.style.borderRadius = "10px";
  inputRef.current.defaultValue =`${defaultValue} DJ`;
}

const handleFirstInput = () =>  {
  styleInputs(inputRef, "Input 1 : ");
}

const handleSecondInput = () =>  {
  styleInputs(input2Ref , "Input 2 : ");
}

//8
 
  return (

  
   <div>
  <p> Initial state: { initialstate } </p>
  <p> State after +2 payload: { dispatch_1 } </p>
  <p> State after +1 payload: { dispatch_2 } </p>
  <p> State after -2 payload: { dispatch_3 } </p>
  <p> State after 7 payload: { dispatch_4 } </p>

  <button onClick={handleFirstInput}>Focus switch to input1  using ref</button>
  
  
  <button onClick={handleSecondInput}>Focus switch to input2  using ref</button>
  
  
  <input type="text" ref={inputRef} />
  <input type="text" ref={input2Ref} />
  
</div>

/*
 
    <div>
  <LanguageContext.Provider value={defaultValue}>
    <div className="content">
      <div className="sidebar" />
      <div className="mainContent">
        <DisplaySelectedLanguage />
        <ShowSomeMoreVarsFromContext />
      </div>
    </div> 
    
  </LanguageContext.Provider>
  </div> 

  */

  
  

)

  }

export default App;
