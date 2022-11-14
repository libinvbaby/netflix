import React,{useState,useEffect} from 'react'
import axios from '../../axios'
import {API_KEY, imageUrl} from '../../constants/constants'
import Youtube from 'react-youtube'



function TopRated() {
  const[urlId,setUrlId] = useState('')

   const [movie, setMovie] = useState([])
  useEffect(() =>{
    axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`).then((res)=>{
      setMovie(res.data.results)
      
    })
  },[])
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const handleMovieTralier =(id)=>{
    console.log(id);
    axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response)=>{
      if(response.data.results.length!==0){
        setUrlId(response.data.results[0])
      }else{
        alert('No Related Videos')
      }
    })
  }
  
  console.log(movie);
  return (
    <div>
      <h1 className="text-center text-white py-3">Top Rated Movies</h1>
      <div className="container">
        <div className="row">
            {movie.map((item)=>{
            
                return <div onClick={()=>handleMovieTralier(item.id)} style={{cursor:'pointer'}}  className="col-md-4 py-3 text-center">
                <div className="card bg-dark text-white" style={{width: "20  rem",height:"200px",backgroundImage:`url(${imageUrl+item.backdrop_path})`,backgroundSize:"cover",overflow:"hidden",backgroundRepeat:"no-repeat"}}>
      </div>
      <h5 className="card-title text-white pt-3">{item.original_title || item.original_name}</h5>

                </div>
                
              
              })
            }

        </div>
     {urlId && <Youtube opts={opts} videoId={urlId.key}  />}

      </div>



    </div>
   
  )
}

export default TopRated