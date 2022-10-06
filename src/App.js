import React from 'react'
import './App.css'
import {orginals, action , trending} from './urls'
import Header from './Components/Header/Header'
import RawPost from './Components/RawPost/RawPost'
import SliderNew from './Components/Slider/Slider'
import Container from 'react-bootstrap/Container';


function App() {
  return (
    <div >
     <Container>
      <Header/>
      <SliderNew />
      <RawPost url={orginals} title="Netflix Orginals" />
      <RawPost url={action} title="Action" isSmall />

      <RawPost url={trending} title="Trending Movies" isSmall />
      </Container>
    </div>
  )
}

export default App