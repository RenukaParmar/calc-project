import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import React,{useState} from 'react'
import { click } from '@testing-library/user-event/dist/click'; 
// import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
function App() {
const [result,setResult]=useState("");
// const [previousOperand,setPreviousOperand]=useState("");

const clickEvent=(event)=>{
  setResult(result.concat(event.target.value));
  console.log(result)
}   
const calculate=()=>{
  setResult(eval(result).toString());
}       
const clearDisplay=()=>{
  setResult("");
  // setPreviousOperand(previousOperand(result));

}      
const clearDisplayOneByOne=()=>{
  // result.pop();
  console.log(setResult(result));
}                                     
  return ( 
<div className='calculator-grid'>
  {/* <input className='output' value={result}/> */}
    <div className='previous-operand'>3434</div>
    <input className='output' value={result} placeholder="0"/>
<button className='span-two'  onClick={clearDisplay}>AC</button>
<button onClick={clearDisplayOneByOne}>DEL</button>
<button onClick={clickEvent} value="/" className='specialBtn'>/</button>
<button onClick={clickEvent} value="1">1</button>
<button onClick={clickEvent} value="2">2</button>
<button onClick={clickEvent} value="3">3</button>
<button onClick={clickEvent}  value="*" className='specialBtn'>*</button>
<button onClick={clickEvent} value="4" >4</button>
<button onClick={clickEvent} value="5">5</button>
<button onClick={clickEvent} value="6">6</button>
<button onClick={clickEvent}  value="+" className='specialBtn'>+</button>
<button onClick={clickEvent} value="7">7</button>
<button onClick={clickEvent} value="8">8</button>
<button onClick={clickEvent} value="9">9</button>
<button onClick={clickEvent}  value="-" className='specialBtn'>-</button>
<button onClick={clickEvent} value=".">.</button>
<button onClick={clickEvent} value="0">0</button>
<button className='span-two specialBtn' onClick={calculate} value="=" >=</button>
</div>

  
  ) 
}
export default App; 