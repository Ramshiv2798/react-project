import Navbar from './components/Navbar'
import './components/styles.css'
import Section from './components/Section'
import Addnewdoctor from './components/Addnewdoctor'
import { Route, Routes } from 'react-router-dom'
import Doctordetails from './components/Doctordetails'
// import {useEffect} from 'react'
// import { useState } from 'react'
function App() {
  // let [count,setCount]=useState(0)
  // let [data,newData]=useState('')
  // useEffect(()=>{
  //   console.log('api calling')
  // },[data])
  return (
    <div>
      {/* {data}
      <button onClick={()=>{
        let a=prompt('enter a name')
        newData(a)}}>newdata</button>
      count is {count}
      <button onClick={
        ()=>{
          setCount(count+1)
      }}>add</button>
import Doctordetails from './components/Doctordetails'
      
      */}
      <Navbar/>
      <Routes>
        <Route path='/' element={<Section/>}/>
        <Route path='/addnewdoctor' element={<Addnewdoctor/>}/>
        <Route path='/doctordetails/:id' element={<Doctordetails/>}/>
      </Routes>
      {/* <Section/> */}
     
     {/* <div className='doctorcontainer'>
      <Doctorcard imglink='' name='jessy' gender='female' specialization='heart specialist'/>
      <Doctorcard name='ram' gender='male' specialization='Bones specialist'/>
      <Doctorcard name='siva' gender='male' specialization='Neuro specialist'/>
      <Doctorcard name='Madhu' gender='male' specialization='Ortho specialist'/>
      <Doctorcard name='Vasavi' gender='female' specialization='Psycho specialist'/>
  
     </div> */}

     {/* <Addnewdoctor/> */}
    </div>
  )
}

export default App