import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { API_KEY,imageUrl } from '../../constants/constants'
import axios from '../../axios'
import {useState, useEffect} from 'react'
import './Slider.css'
import Container from 'react-bootstrap/Container';


function SliderNew() {
    var settings = {
        dots: true,
        fade: true,        
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        
      };    
      const [movie,setMovie] = useState()
    useEffect(() => {
      
    axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`).then((response) => {
        
        setMovie(response.data.results[Math.floor(Math.random()*response.data.results.length)])
    })
     
    }, [])
    const [secondMovie, setSecondMovie] = useState()
     useEffect(() => {
      
        axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`).then((response) => {
            
            setSecondMovie(response.data.results[Math.floor(Math.random()*response.data.results.length)])
        })
         
        }, [])
        const[thirdMovie, setThirdMovie] = useState()
        useEffect(() => {
      
            axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`).then((response) => {
                
                setThirdMovie(response.data.results[Math.floor(Math.random()*response.data.results.length)])
            })
             
            }, [])
  return (
    <Container>
    <Slider {...settings}>
    <div>
    <div style={{backgroundImage:`url(${movie ? imageUrl+movie.backdrop_path: ''})`}} className="banner">
        <div className="content">
            <h1 className="title">{movie ? movie.original_title|| movie.original_name:''}</h1>
            <div className="banner_buttons">
                <button className="button"> Play</button>
                <button className="button">MyList</button>
            </div>
            <h1 className="description">{movie ? movie.overview : ''}</h1>

        </div>
        <div className="fade_bottom"></div>
    </div>
    </div>
    <div>
    <div style={{backgroundImage:`url(${secondMovie ? imageUrl+secondMovie.backdrop_path: ''})`}} className="banner">
        <div className="content">
            <h1 className="title">{secondMovie ? secondMovie.original_title|| secondMovie.original_name:''}</h1>
            <div className="banner_buttons">
                <button className="button"> Play</button>
                <button className="button">MyList</button>
            </div>
            <h1 className="description">{secondMovie ? secondMovie.overview : ''}</h1>

        </div>
        <div className="fade_bottom"></div>
    </div>
    </div>
    <div>
    <div style={{backgroundImage:`url(${thirdMovie ? imageUrl+thirdMovie.backdrop_path: ''})`}} className="banner">
        <div className="content">
            <h1 className="title">{thirdMovie ? thirdMovie.original_title|| thirdMovie.original_name:''}</h1>
            <div className="banner_buttons">
                <button className="button"> Play</button>
                <button className="button">MyList</button>
            </div>
            <h1 className="description">{thirdMovie ? thirdMovie.overview : ''}</h1>

        </div>
        <div className="fade_bottom"></div>
    </div>
    </div>
    
    
  </Slider>
  </Container>
  )
}

export default SliderNew