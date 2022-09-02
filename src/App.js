import React, { useState } from 'react'

const App = () => {

  const [temp, setTemp] = useState(12)
  const [tempColor, setTempColor] = useState('cold')

  const increaseTemp = () => {
    if(temp >= 30) return
    
    if (temp >= 14) {
      setTempColor('hot')
    }
    setTemp(temp + 1)
    
  }

  const decreaseTemp = () => {
    if(temp <= 0) return
    if (temp <= 15) {
      setTempColor('cold')
    }
    setTemp(temp - 1)
   
  }



  return (
    <div className='app-container'>
      <div className="temperature-display-container">
        <div className={`temperature-display ${tempColor}`}>{temp}°C</div>
      </div>
      <div className="button-container">
        <button onClick={increaseTemp}>+</button>
        <button onClick={decreaseTemp}>-</button>
      </div>
    </div>
  )
}

export default App