import React from 'react'

const Keyboard = ({handleClick,handleClear,calculate}) => {
  return (
    <div className='calculator'>
        <div className='row'>

        <button onClick={()=>{
            handleClick("7")
        }} className='digits' >7</button>
        <button onClick={()=>{
            handleClick("8")
        }} className='digits' >8</button>
        <button  onClick={()=>{
            handleClick("9")
        }}className='digits' >9</button>
        <button onClick={()=>{
            handleClick("/")
        }} className='operator' >/</button>
        </div>
        <div className='row'>

        <button onClick={()=>{
            handleClick("4")
        }} className='digits' >4</button>
        <button onClick={()=>{
            handleClick("5")
        }} className='digits' >5</button>
        <button onClick={()=>{
            handleClick("6")
        }} className='digits' >6</button>
        <button onClick={()=>{
            handleClick("*")
        }} className='operator' >*</button>
        </div>
        <div className='row'>

        <button onClick={()=>{
            handleClick("1")
        }} className='digits' >1</button>
        <button onClick={()=>{
            handleClick("2")
        }} className='digits' >2</button>
        <button onClick={()=>{
            handleClick("3")
        }} className='digits' >3</button>
        <button onClick={()=>{
            handleClick("-")
        }} className='operator' >-</button>
        </div>
        <div className='row'>

        <button onClick={()=>{
            handleClick("0")
        }} className='digits' >0</button>
        <button className='fun-key' onClick={()=>{
            calculate()
        }} >=</button>
        <button className='fun-key'  onClick={()=>{
            handleClear("0")
        }} >C</button>
        <button onClick={()=>{
            handleClick("+")
        }} className='operator' >+</button>
        </div>
      
    </div>
  )
}

export default Keyboard
