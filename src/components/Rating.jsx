import React from 'react'
import { useNavigate } from 'react-router-dom'

const Rating = () => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-center items-center space-x-2 mt-4">
    <div className="flex space-x-1">
      <span>⭐</span>
      <span>⭐</span>
      <span>⭐</span>
      <span>⭐</span>
      <span>⭐</span>
    </div>
    <button className="bg-orange-500 text-white px-2 py-1 rounded" onClick={()=>{navigate('/')}}>Submit</button>
  </div>
  )
}
export default Rating


  