import React, { useState } from "react"
import ProgressBar from "../ProgressBar/ProgressBar.js"
import "./Card.css"

const Card = () => {

  let [ isOn, setIsOn ] = useState(false) 
  let [ progVal, setProgVal ] = useState(0)

  const counter = () => {
    if (progVal >= 100){
      setIsOn(false)
      clearInterval(window.progTimer);
      }else{
        setProgVal( (state) => state + 1) 
        setCurrentUpload( (state) => state + 1) 
        setRemainingTime( (state) => state -1) 
        progVal = progVal + 1
    }
  }

  const stop  = () =>  {
    setIsOn(false)
    clearInterval(window.progTimer)   
  }

  const reset = () =>{    
    setProgVal(0)
    clearInterval(window.progTimer)
    setIsOn(false)
    setRemainingTime(100)
    setCurrentUpload(0)
  }
  
  const start = ()=>{
    setIsOn(true)
    const timer = window.setInterval(counter, 500)
    window.progTimer = timer
  }

  //--  These can be set to inject dynamic numbers --//
  const [ files, setFiles ] = useState(11)
  const [ recipients, setRecipients ] = useState(4)
  const [ currentUpload, setCurrentUpload ] =useState(0)
  const [ totalUpload, setTotalCurrentUpload ] = useState(100)
  const [ remainingTime, setRemainingTime ] = useState(100)

  return (
    <div className="card">
    <div className="card-container">
      <ProgressBar
          progress={progVal}
          size={170}
          strokeWidth={10}
          circleOneStroke={"rgb(232, 235, 237)"}
          circleTwoStroke={"#409fff"}
      />

      <section className="sect">
          <div className="transfer-data-container">
            {isOn ? (
              <div>
                <h2>Transferring...</h2>
            <p>Sending <span className="sending-style">{files} files to <span className="underlined">{recipients} recipients</span></span></p>
            <p>{currentUpload}MB of {totalUpload}MB uploaded</p>
            <p>{remainingTime} seconds remaining</p>
              </div>
            ):(
              <div>
              </div>
            )}
          </div>    
      </section>

      <div className='button-container'>          
        {isOn ? (
          <button className="stop" onClick={ stop }>Stop</button>
        ) : (
          <button className="start" onClick={ start }>Start</button>
        )}
        <button onClick={ reset }>Reset</button>
      </div>
    </div>
    </div>
  )
}

export default Card