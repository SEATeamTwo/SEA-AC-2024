import SkyLogo from "./components/SkyLogo"
import TitleBar from "./components/TitleBar"
import Sliders from "./components/Sliders"
import React from 'react'
import MainContainer from './components/MainContainer'

function App() {
  return (
    <MainContainer>
      <SkyLogo/>
      <TitleBar/>
      Calm <Sliders/> 
      Cheerful <Sliders/> 
      Awake <Sliders/> 
      Fearless <Sliders/> 

    </MainContainer>

  )

}

export default App;
