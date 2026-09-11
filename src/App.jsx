import React from 'react'
import Navbar from './components/Navbar'
import './components/styles.css'
import Section from './components/Section'
import Doctorcard from './components/Doctorcard'
import Addnewdoctor from './components/Addnewdoctor'
import { Route,Routes } from 'react-router-dom'
import Doctordetails from './components/Doctordetails'
import Protectedroute from './components/Protectedroute'
import useCounter from './components/useCounter'
//import { useEffect } from 'react'
import { useState } from 'react'
import DoctorProvider from './components/DoctorProvider'
function App() {
  let [islogin,setIslogin] = useState(false)
  let {count,inc,dnc} = useCounter()
  //let [count, setCount] = useState(0)
  //let [data, newData] = useState('')
  //useEffect(() => {
  //  console.log('api calling')
  //},[data])
  return (
    <div>
      {count}
      <button onClick={inc}>inc</button>
      <button onClick={dnc}>dnc</button>
      
      {/* {data}
      <button onClick={() => {
        let a = prompt('enter a name')
        newData(a)}}>newdata</button>
      count is {count}
      <button onClick={() => {setCount(count + 1)}}>add</button> */}
      <button onClick={()=>setIslogin(true)}>Login here</button>
      <Navbar />
      <Routes>
        <Route path='/' element={<Section />} />
        <Route path='/addnewdoctor' element={<Protectedroute islogin={islogin}><DoctorProvider><Addnewdoctor/></DoctorProvider></Protectedroute>} />
        <Route path='/doctordetails/:id' element={<Doctordetails />} />
        
      </Routes>

      {/* <Section /> */}

      {/* <div className='doctorcontainer'>
        <Doctorcard imglink='./images/deepika.jpg' name='deepika' gender='female' specialization='Cardiologist' />
        <Doctorcard imglink='./images/bharat.jpg' name='bharat' gender='male' specialization='Heart Specialist' />
        <Doctorcard imglink='./images/rohith.jpg' name='rohith' gender='male' specialization='Neurologist' />
        <Doctorcard imglink='./images/babu.jpg' name='babu' gender='male' specialization='Orthopedic' />
        <Doctorcard imglink='./images/ekanth.jpg' name='ekanth' gender='male' specialization='Heart Specialist' />
        <Doctorcard imglink='./images/layatri.jpg' name='layatri' gender='female' specialization='Heart Specialist' />
        <Doctorcard imglink='./images/sankar.jpg' name='sankar' gender='male' specialization='Heart Specialist' />
      </div> */}
      {/* <Addnewdoctor /> */}
    </div>
  )
}

export default App