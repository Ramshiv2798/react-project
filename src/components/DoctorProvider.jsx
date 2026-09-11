import { createContext } from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios'
import {usecontext} from 'react'


export const DoctorContext=createContext()
function DoctorProvider({ children }) {

  let [newdoctor, setNewdoctor] = useState();
  async function deletedata(id){
      try{
        await axios.delete(`https://doctorapibackend.onrender.com/doctors/${id}`)
        alert('deleted')
        setNewdoctor(id)
      } catch(err){
        console.log(err)
      }
    }
    async function updatedata(id){
      try{
      let updated={
         name: 'john', 
         age: 25,
        gender:'male',
        salary: 50000,
        specialization: 'bones'
      }
      await axios.put(`https://doctorapibackend.onrender.com/doctors/${id}`,updated)
      alert('updated')
      setNewdoctor(updated)
    } catch(err){
      console.log(err)
    }           
  }
  return (
    <DoctorContext.Provider value={{ newdoctor, setNewdoctor, deletedata, updatedata }}>
      {children}
    </DoctorContext.Provider>
  )
}

export default DoctorProvider