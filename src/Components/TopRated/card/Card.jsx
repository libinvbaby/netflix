import React from 'react'

function card(props) {
  return (
    <div className="card" style="width: 18rem;">
  <img className="card-img-top" src={props.image} alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">{props.desc}</p>
  </div>
</div>
  )
}

export default card