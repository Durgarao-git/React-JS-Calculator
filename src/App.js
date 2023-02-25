import React,{useState} from 'react';
import Keyboard from './Keyboard';
import "./App.css";

const App = () => {
  const [input,setInput]=useState("");

  function handleClick(value){
    setInput(input+value)
  }
  function calculate(){
    let outputVal=eval(input);
    setInput(outputVal)
  }
  function handleClear(){
    setInput('');
  }



  return (
    <div className='container'>
      <h1>Calculator using React JS</h1>
      <div className='calculator'>
        <input className='output' type="text" value={input} />
        <Keyboard handleClick={handleClick} calculate={calculate} handleClear={handleClear} ></Keyboard>          

      </div>
    

      
    </div>
  )
}

export default App
