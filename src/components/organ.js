import React, { useState } from 'react';
import '../css/Organdonation.css'; // Import the CSS file for styling
import { useEffect } from 'react';
function OrganDonationForm() {
//   const [fullName, setFullName] = useState('');
//   const [email, setEmail] = useState('');
   const [data, setData] = useState([]);

  const [donationType, setDonationType] = useState('');
  
  const handleSubmit = async(event) => {
    event.preventDefault()
    const response = await fetch('/filter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({organ:donationType})
      });
  
      const data = await response.json();
      console.log(data);
      setData(data)
     
      
  }
   useEffect(()=>{
    const load = async ()=>{
        const response = await fetch('/filter', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({organ:donationType})
          });
      
          const data = await response.json();
          
          setData(data)
         
       }
       load()
   })
  return (
    <div className="organ-donation-form">
   
      <h1>Find an Organ!</h1>
      <br></br>
      <div><h2> Choose an Organ</h2></div>
      <label>
        
        <select value={donationType} onChange={(e) => setDonationType(e.target.value)}>
          
          <option value="Pancreas">Pancreas</option>
          <option value="Lungs">Lungs</option>
          <option value="Heart">Heart</option>
          <option value="Brain">Brain</option>
          <option value="Plasma">Plasma</option>
          <option value="Liver">Liver</option>
          <option value="Intestine">Intestine</option>
          <option value="Kidney">Kidney</option>
          <option value="Eyes">Eyes</option>
        </select>
      </label>
    
    {
        data.map((val,key)=>{
             return(<div className='border-2 border-black mt-4 px-8 py-3 '>
                  <h1 className='text-4xl float-left'>
                     {val.name}
                  </h1>
                  <br></br>
                    <span>
                    {val.email}
                    </span>
                    </div>)
          })
    }
      <br></br>

      {/* <button  onClick={handleSubmit}  className="submit-button">Submit</button>
       */}
    </div>
  );
}

export default OrganDonationForm;