import React from 'react'
import { useState,useEffect } from 'react'
const Profile = () => {
    const [booleanArray, setBooleanArray] = useState([false, false, true,false, false, true,false, true, false]);

  const handleButtonClick = (index) => {
    let newBooleanArray = [...booleanArray];
    newBooleanArray[index] = !newBooleanArray[index];
    setBooleanArray(newBooleanArray);
    console.log(booleanArray);
  };
    const submit = async (event) => {
        console.log(booleanArray);
        event.preventDefault();
    
        const response = await fetch('/avail', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({arr:booleanArray})
        });
    
        const data = await response.json();
        const arr = data.arr;

      };
    const organs=[
       "Liver","Pancreas","Lungs","Heart","Eye","Kidney","Plasma","Intestine","Brain"
    ]
   
    
        const load = ()=>{
            fetch('/avail')
            .then((res)=>res.json())
            .then((data)=> {
             setBooleanArray(data.arr)
         })
         .catch((Err)=>console.log(Err))
         }
        
   
    return(
    <div className='w-[90%]'>
    {load}
         <h1 className='text-center text-2xl font-bold' >Update your Availability status</h1>
         <button onClick={submit} className='p-1 m-6  hover:bg-green-500 hover:text-white border-2 border-green-500 text-green-500  font-bold text-2xl'>  SAVE </button>
        <div className='flex justify-between  flex-row  w-[250px] '>
       {
        organs.map((value,key)=>{
            return (<div className=' border-2 m-4 rounded-lg border-blue-900 p-8'>
            
           <h1 className='font-semibold text-2xl border-b-2 border-rose-700'>{value}</h1>
           <label className='font-bold' > Availability Status </label>
            <button className='border-2 p-2 border-black' onClick={(event)=>{
                handleButtonClick(key)
            }}>{booleanArray[key]?"Mark as Available": "Mark as Unavailable"}</button>
            {()=>{
                if(key == 5)
            return <br></br>
            }}           
          
       </div>)
        })
       }
        </div>
    </div>
    )
    
}

export default Profile