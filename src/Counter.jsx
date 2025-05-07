import React, { useState } from 'react'

const Counter = () => {

  const [count, setCount] = useState(0)
  const [stepValue, setStepValue] = useState(1)


  const InCrement = () => {
    setCount(count + stepValue);
  }

  const DeCrement = () => {
    if (count > 0) {
      setCount(count - stepValue);
    }
  }

  const handleInputChange = (e) => {
    let value = Number(e.target.value);
    if(/^\d*$/.test(value)){
      if(value.length > 1 && value.startsWith('0')){
        value = value.replace(/^0+/,1)
      }
      setStepValue(value);
    }
    
  }

  const ReSet =()=>{
    setCount(0);
    setStepValue(1);
  }

  return (
    <div className="container">
      <h2>{count}</h2>
      <div className="button">
        <button className='main-button'  onClick={() => InCrement()}> + </button>
        <button className='main-button' onClick={() => DeCrement()}> - </button>
      </div>
      <div className='InputContainer'>
      <label htmlFor="">InCrement/DeCrement By : </label>
        <input type="text"
          onChange={handleInputChange}
          value={stepValue}
        />
      </div>
      <div className='reset'>
        <button className='reset-button' onClick={()=>ReSet()}>Reset</button>
      </div>
    </div>
  )
}

export default Counter;