import React from 'react'
import {orginals, action , trending} from '../urls'
import RawPost from '../Components/RawPost/RawPost'
import SliderNew from '../Components/Slider/Slider'
import Footer from '../Components/Footer/Footer'

function Home() {
  return (
    <div className='container-fluid'>
     <div>
      <SliderNew /> 
      <RawPost url={orginals} title="Netflix Orginals" />
      <RawPost url={action} title="Action" isSmall />

      <RawPost url={trending} title="Trending Movies" isSmall />
      <Footer/>
      </div>
    </div>
  )
}

export default Home