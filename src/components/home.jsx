import React,{useState,useEffect} from 'react'
import Img1 from '../assets/organ1.jpg'
import eye from '../assets/i.png'
import About from './About'
export const Home = () => {
  
  const [email,setEmail] = useState('')
  const [type,setType] = useState('')
   useEffect(()=>{
      fetch('/me')
      .then((res)=>res.json())
      .then((data)=>{
        if(data.found)
        setEmail(data.email)
        setType(data.type)
      })     
   }) 
  const GetNav =()=> {
    return(
      <div className='float-right'>
      {(type==='donar' ) && <a className='mr-5 hover:border-b-2 border-b-white p-1' href='/profile'>Update</a>}
      {(type==='patient' ) && <a className='mr-5 hover:border-b-2 border-b-white p-1' href='/profile'>Find Organs</a>}
     {(email.length !== 0) && <a className='mr-5 hover:border-b-2 border-b-white p-1' href='/profile'>{email}</a>}
      {(email.length!==0) && < button onClick={()=>{
        fetch('/logout',{
          method:"DELETE"
        })
        .then((res)=>res.json())
        .then((data)=> {
          window.location.reload(false);
        })
        .catch((err)=>console.log(err))
      }} className='mr-5 hover:border-b-2 border-b-white p-1'>LogOut</button>}
      {(email.length === 0) && <a className='mr-5 hover:border-b-2 border-b-white p-1' href='/login'>Login</a>}
      {(email.length === 0) && <a className='mr-5 hover:border-b-2 border-white p-1' href='/register'>Register</a>}
  </div>
    )
  }
  return (

    <div className=''>
     <div className= ' flex justify-end rounded-b-lg mt-0 p-2 bg-rose-950 text-white '> 
      <GetNav/>
     </div>
    <div className='flex justify-evenly flex-wrap'>
    <div className='p-7 w-[500px]'>
    <span className='bg-rose-900 p-2 text-4xl rounded-md font-medium text-white'>ikshana +</span>
     <h1 className='font-bold mb-14  text-6xl'>
         <br/> A solution to Donate & Recieve Organs  
     </h1>
     <a className='border-2 p-2 hover:bg-black hover:text-white border-black' href='/login'>Get Started</a>
    </div>
     <img src={Img1} className='w-[40%] mt-6 rounded-full'/>
    </div>
    <div className='flex justify-evenly flex-wrap'>
    <div className='p-7 w-[500px]'>
     <h1 className='font-semibold mb-14 text-gray-800 text-6xl'>
      "See beyond your lifetime, Give the gift of sight"
      <br/>Become an Eye Donar  
     </h1>
     <a className='border-2 p-2 hover:bg-black hover:text-white border-black' href='/login'>Learn more</a>
    </div>
     <img src={eye} className='w-[40%] mt-6 rounded-full'/>
    </div>
    <About/>
    </div>
  )
}
