import React, { useState } from 'react';
import '../css/Organdonation.css'; // Import the CSS file for styling

function OrganDonationForm() {
//   const [fullName, setFullName] = useState('');
//   const [email, setEmail] = useState('');
//   const [phoneNumber, setPhoneNumber] = useState('');
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
      data.forEach((val)=>{
              
         return (
            <div className='justify-between flex flex-wrap px-1 mt-5 bg-red-300 text-black'>
               <span>{val.name}</span>
               <span>{val.email}</span>
            </div>
        )
      })
  }

  return (
    <div className="organ-donation-form">
   
      <h1>Find an Organ!</h1>
      <br></br>
      <div><h2> Choose an Organ</h2></div>
      <label>
        {/* <h1>Find an Organ!</h1> */}
        {/* Choose an Organ */}
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
    
      <br></br>

      <button  onClick={handleSubmit}  className="submit-button">Submit</button>
    </div>
  );
}

export default OrganDonationForm;