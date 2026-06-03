import React from 'react'

const Card = (probs) => {
    console.log(probs);
  return (
     <div className="card">
          <img src={probs.img} alt="" />
          <h1>{probs.user}</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <button> View Profile</button>
        </div>
  )
}

export default Card