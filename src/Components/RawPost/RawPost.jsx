import React,{useEffect,useState} from 'react'
import './RawPost.css'
import {API_KEY, imageUrl} from '../../constants/constants'
import axios from '../../axios'
import Youtube from 'react-youtube'



function RawPost(props) {
  const [movie, setMovies] = useState([])
  
  const[urlId,setUrlId] = useState('')
  useEffect(() => {
    axios.get(props.url).then((response) => {
      console.log(response.data.results);
      setMovies(response.data.results)
    }).catch((err) => {
      alert(err)
    })
  
  }, [])

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
        console.log('Array Empty');
      }
    })
  }
  

  return (
    <div className="container-fluid">

    <div className="row">
        <h2 className='title_post'>{props.title}
        </h2>
        <div className="posters">
       
          
          {movie.map((obj)=>
<div>
                        <img onClick={()=>handleMovieTralier(obj.id)} className={props.isSmall?"isSmall":"large"} src={`${imageUrl+obj.backdrop_path}`} alt="movie"  />
                          <p className="text-center text-white hvr"><b>{obj.original_name}</b></p>
                          </div>
          )}  
          
          
         
        </div>
      
          
       
        
       {urlId && <Youtube opts={opts} videoId={urlId.key}  />}
       
    </div>
    </div>

  )
}

export default RawPost