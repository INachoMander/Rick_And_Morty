import React from 'react'
import AlienWorld from '../assets/AlienWorld.mp4'

const Main = () => {
  return (
    <div className='main'>
        <video src={AlienWorld} autoPlay loop muted />
    </div>
  )
}

export default Main