
import React,{useState} from 'react'

export const Login = () => {
    const [email,setEmail]  = useState("");
    const [password,setPassword]  = useState("");
    const [type,setType] = useState("patient")
    const handleInputChange = event => {
        const { name, value } = event.target;
        if (name === 'email') {
          setEmail(value);
         
        } else if (name === 'password') {
          setPassword(value);
         
        }
        else if(name === 'type')
        setType(value)
      }
      const handleSubmit = async (event) => {
        console.log(password,email);
        event.preventDefault();
    
        const response = await fetch('/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ email, password,type })
        });
    
        const data = await response.json();
        console.log(data);
        if(data.type === 'donar')
        window.location.replace('/profile')
        else window.location.replace('/organs')

      };

  return (
<div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
	<div className="relative py-3 sm:max-w-xl sm:mx-auto">
		<div
			className="absolute inset-0 bg-gradient-to-r from-rose-300 to-rose-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
		</div>
		<div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
			<div className="max-w-md mx-auto">
				<div>
					<h1 className="text-2xl font-semibold">Login</h1>
				</div>
				<div className="divide-y divide-gray-200">
					<div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
						<div className='relative'>
                        <label >
                         You are  
                      </label>

                     <select className='p-2 my-2' value={type} name='type' onChange={handleInputChange}>
                       <option value="patient">Patient</option>
                       <option value="donar">Donar</option>
                     </select>
                   
                        </div>
                        <div className="relative">
							<input value={email} onChange={handleInputChange} id="email" name="email" type="text" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Email address" />
							<label  className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Email Address</label>
						</div>
						<div className="relative">
							<input value={password} onChange={handleInputChange}  id="password" name="password" type="password" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Password" />
							<label  className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Password</label>
						</div>
						<div className="relative">
							<button onClick={handleSubmit} className="bg-rose-500 hover:bg-rose-900  text-white rounded-md px-2 py-1">Sign In</button>
						</div>
					</div>
				</div>
			</div>

        <span>Don't have an account? <a href='/register' className='text-cyan-600'>Create One</a></span>
		</div>
	</div>
</div>
  )
}
