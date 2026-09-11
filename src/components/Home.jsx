import React from 'react'
import {useEffect,useState,useMemo} from 'react'
import Doctorcard from './Doctorcard';
import axios from 'axios'
import { useContext } from 'react';
import { DoctorContext } from './DoctorProvider';
function Home() {
  let {newdoctor} = useContext(DoctorContext)
  let [doctors,setDoctors]=useState([])
  let [search,setSearch]=useState('')
  let [specialization,setSpecialization]=useState('')

  async function getapidata() {
    try{
      let response = await axios.get(
        "https://doctorapibackend.onrender.com/doctors",);
        console.log(response);
        console.log(response.data);
        setDoctors(response.data);
    } catch(err){
      console.log(err);
    } 
  }

  // function getapidata(){
  //   let data = [
  //     {
  //       id: 1,
  //       name: "Teja",
  //       age: 26,
  //       gender: "Male",
  //       specialization: "Muscles",
  //       salary: 7000000,
  //     },

  //     {
  //       id: 2,
  //       name: "Sam",
  //       age: 26,
  //       gender: "Male",
  //       specialization: "Bones",
  //       salary: 4000000,
  //     },

  //     {
  //       id: 3,
  //       name: "Anu",
  //       age: 25,
  //       gender: "Female",
  //       specialization: "Heart",
  //       salary: 5000000,
  //     },
      
  //   ];
  // setDoctors(data)
  // }
  useEffect(()=>{
    getapidata()
  },[newdoctor])

  // useEffect(()=>{
  //   if(newdoctor){
  //     setDoctors(prev=>[...prev,newdoctor])
  //   }
  // },[newdoctor])

  let filtereddoctors=useMemo(
    ()=>{
      return doctors.filter((val)=>{
    return(val.name.toLowerCase().includes(search.toLowerCase()) && 
    (specialization=="" || val.specialization==specialization))
  })
},[search,specialization,doctors])

  // let filtereddoctors=doctors.filter((val)=>{
  //   return(val.name.toLowerCase().includes(search.toLowerCase()) && 
  //   (specialization=="" || val.specialization==specialization)
  // )
  //   // return(search.toLowerCase().includes(val.name.toLowerCase()))
  // })

//   async function getapidata(){
//     let response=await axios.get("https://doctorapibackend.onrender.com/doctors")
//     console.log(response)
//     console.log(response.data)//actual data
//     setDoctors(response.data)
// }
  useEffect(()=>{
      getapidata()
  },[])
  return (
    <div>
      <input value={search} onChange={(e)=>setSearch(e.target.value)} type="text" placeholder='Search doctor' />
      <select value={specialization} onChange={(e)=>setSpecialization(e.target.value)} name="" id="">
        <option value="Bones">Bones</option>
        <option value="Muscles">Muscles</option>
        <option value="Heart">Heart</option>
      </select>
      {doctors.length>0?(
        <div className='doctorcontainer'>
          {filtereddoctors.map((doctor)=>{
            return <Doctorcard 
            // deletedata={deletedata}
            // updatedata={updatedata}
            name={doctor.name}
            gender={doctor.gender}
            specialization={doctor.specialization}
            key={doctor.id}
             id={doctor.id}/>
          })}
        </div>):(<h1>loading</h1>)}
    </div>
  )
}

export default Home