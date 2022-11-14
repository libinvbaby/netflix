import React,{useEffect,useState} from 'react'
import axios from '../../axios'
import {API_KEY, imageUrl} from '../../constants/constants'

function UpcomingMovie() {

  const [upcoming, setUpcoming] = useState([]);

useEffect(() => {
  axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`).then((res)=>{
    setUpcoming(res.data.results)
  })
},[])

 
  console.log(upcoming[1])
  
  return (
    <div className="Container">
        <div className="posters">
        {upcoming.map((obj)=>
<div>
                        <img  className="large" src={`${imageUrl+obj.backdrop_path}`} alt="movie"  />
                          <p className="text-center text-white"><b>{obj.original_name || obj.original_title}</b></p>
                          </div>
          )}  
        </div>
    </div>
  )
}

export default UpcomingMovie