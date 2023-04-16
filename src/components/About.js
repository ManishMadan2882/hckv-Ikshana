import React from 'react'

const About = () => {
  return (
    <div className='p-4'>
      <p className='text-4xl font-bold text-center underline m-4'>About IKSHANA</p>
      <br /><p className='text-xl'>A very important aspect of life to overcome is the limiting thought that hospitals/doctors/healthcare professionals have their vested interests in organ donation. ... One brain dead donor can save up-to eight lives, lives of people suffering from end stage organ failures.</p>
      <br /><p className='text-xl'>Donation affects more than the donors and recipients. Hence we created Ikshana to encourage literacy and organ donation camps so that when one life ends another can be survived</p>
      <p className='text-right text-xl'>
        <br />
        <a target="_blank" href="https://github.com/Aryan6919/ikshana" className='hover:drop-shadow-md hover:text-purple'><i className="fa-brands fa-github"></i></a>&nbsp;&nbsp;&nbsp;
        <a target="_blank" href="https://www.linkedin.com/in/aryan-arora-875884224/" className='hover:drop-shadow-md hover:text-metal'><i className="fa-brands fa-linkedin"></i> </a>&nbsp;&nbsp;
      </p>
    </div>
  )
}

export default About