import React from 'react'
import { useNavigate } from 'react-router-dom'

function Doctorcard({name, gender, specialization,id,deletedata,updatedata}) {
  let navigate = useNavigate()
  return (
    <div className='card'>
        <div><img src="https://th.bing.com/th/id/OIP.8YzXYqbMPLGAi-52wjjhegHaHa?w=174&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" alt="Doctor" /></div>
        <h1>{name}</h1>
        <p>{gender}</p>
        <p>{specialization}</p>
        <button onClick={() =>navigate(`/doctordetails/${id}`)}>view details</button>
        <button onClick={() =>deletedata(id)}>delete</button>
        <button onClick={() =>updatedata(id)}>update</button>
    </div>
  )
}

export default Doctorcard