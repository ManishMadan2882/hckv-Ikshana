import React from 'react'
import { useState,useEffect } from 'react'
const Profile = () => {
    const submit = async (event) => {
        
        event.preventDefault();
    
        const response = await fetch('/avail', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({arr:avail})
        });
    
        const data = await response.json();
        console.log(data);
        
      };
    const organs=[
       "Liver","Pancreas","Lungs","Heart","Eye","Kidney","Plasma","Intestine","Brain"
    ]
   
    let [avail,setAvail] = useState([false,false,false,false,false,false,false,false,false])
    const change =(event)=>{
        let a = avail;
        a[Number(event.target.name)] = ! a[Number(event.target.name)];
        console.log("a,",a);
        setAvail(a)
        console.log("av",avail);
        
    };
    
    useEffect(()=>{
       fetch('/avail')
       .then((res)=>res.json())
       .then((data)=> setAvail(data.arr))
    })
    return(
    <div className=''>
         <h1 className='text-center text-2xl font-bold' >Update your Availability status</h1>
         <button onClick={submit} className='p-1 m-6  hover:bg-green-500 hover:text-white border-2 border-green-500 text-green-500  font-bold text-2xl'>  SAVE </button>
        <div className='flex justify-evenly flex-wrap p-6 w-[300px] '>
       {
        organs.map((value,key)=>{
            return (<div className=' border-2 m-4 rounded-lg border-blue-900 p-8'>
           <h1 className='font-semibold text-2xl border-b-2 border-rose-700'>{value}</h1>
           <label className='font-bold' > Availability Status </label>

           <input type="checkbox"  name={key} className='float-right p-6 ' onChange={change} checked={avail[key]}/>  
                      
                       
        
       </div>)
        })
       }
        </div>
    </div>
    )
    
}

export default Profile