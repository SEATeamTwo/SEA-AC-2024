import SkyLogo from "./components/SkyLogo"
import TitleBar from "./components/TitleBar"
import Sliders from "./components/Sliders"
import React, { useState } from 'react'
import MainContainer from './components/MainContainer'
import Button from "./components/Button"

function App() {

  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);
  const [value3, setValue3] = useState(0);
  const [value4, setValue4] = useState(0);

  const arr = [(value1 / 10), (value2 / 10), (value3 / 10), (value4 / 10)]

  return (
    <MainContainer>
      <div style={{display: "flex"}}>

      <SkyLogo/>
      <TitleBar/>

      </div>

      <div style={{display: "flex" }}>
        <Button title={"Use Webcam"}/>
        <Button title={"Choose File"}/>
        <Button title={"Submit"} arr={arr}/>

      </div>
      <Sliders value={value1} setValue={setValue1} /> 
      <Sliders value={value2} setValue={setValue2}/> 
      <Sliders value={value3} setValue={setValue3}/> 
      <Sliders value={value4} setValue={setValue4}/> 

    </MainContainer>

  )

}

export default App;

