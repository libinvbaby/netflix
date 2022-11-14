import React,{useEffect,useState} from 'react'
import axios from '../axios'
import {API_KEY, imageUrl} from '../constants/constants'
function PoplarMovie() {
    const[urlId,setUrlId] = useState('')


    const [movie, setMovie] = useState([])

    useEffect(()=>{
        axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`).then((res)=>{
           setMovie(res.data.results) 
        })
    }, [])
  
  


  return (
   <div className="container py-5">
    <h3 className="text-white text-center">Poplar Movies</h3>
    <div className="row">
    {movie.map((item)=>{
          
          return <div style={{cursor:'pointer'}}  className="col-md-4 py-3 text-center">
           <div className="card bg-dark text-white" style={{width: "20  rem",height:"200px",backgroundImage:`url(${imageUrl+item.backdrop_path})`,backgroundSize:"cover",overflow:"hidden",backgroundRepeat:"no-repeat"}}>
 </div>
 <h5 className="card-title text-white pt-3">{item.original_title || item.original_name}</h5>

           </div>
           
         
        })
      }
   </div>
    </div>
  )
}

export default PoplarMovie