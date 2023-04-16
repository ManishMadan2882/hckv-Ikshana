import React,{useState} from 'react'


export const Register = () => {
    
    const [name,setName]= useState("");
    const [email,setEmail]= useState("");
    const [password,setPassword]= useState("");
    const [type,setType] = useState("patient");

    const handleInputChange = event => {
        const { name, value } = event.target;
          
          if(name === 'name')
          setName(value)
          
          else if (name === 'email') {
          setEmail(value);
          console.log(name,email);
          } 
          
          else if (name === 'password') {
          setPassword(value);
          console.log(name,password);
        }
        else if(name === 'type')
        setType(value);
        console.log(type);
        ;
      }
    
      const handleSubmit = async (event) => {
        console.log({name:name, email:email, password:password,type:type });
        event.preventDefault();
        fetch("/register", {
            method: 'POST',
            headers: {
              
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({name:name, email:email, password:password,type:type })
          })
          .then((res)=> res.json())
          .then((data)=> {
            if(data.newUserCreated)
            window.location.replace('/login');
            console.log(data)
        })
          .catch((err)=> console.log(err))
        
      };

    return (
<div className="bg-grey-lighter min-h-screen flex flex-col">
            <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                    <h1 className="mb-8 text-3xl text-center">Sign up</h1>
                    <label >
                     You are  
                     </label>

                     <select className='p-2 my-2' value={type} name='type' onChange={handleInputChange}>
                       <option value="patient">Patient</option>
                       <option value="donar">Donar</option>
                     </select>
                   
                    <input 

                        value={name}
                        onChange={handleInputChange}
                        type="text"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="name"
                        placeholder="Full Name" />

                    <input 
                        value={email}
                        onChange={handleInputChange}
                        type="text"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="email"
                        placeholder="Email" />

                    <input 
                        value={password}
                        onChange={handleInputChange}
                        type="password"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="password"
                        placeholder="Password" />
                    <input 
                        onChange={(eve)=>{
                            
                        }}
                        type="password"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="confirm_password"
                        placeholder="Confirm Password" />

                    <button
                        onClick={handleSubmit}
                        className="w-full text-center py-3 rounded bg-green-500  text-white hover:bg-green-900 focus:outline-none my-1"
                    >Create Account</button>

                    <div className="text-center text-sm text-grey-dark mt-4">
                        By signing up, you agree to the 
                        <a className="no-underline border-b border-grey-dark text-grey-dark" href="#">
                            Terms of Service
                        </a> and 
                        <a className="no-underline border-b border-grey-dark text-grey-dark" href="#">
                            Privacy Policy
                        </a>
                    </div>
                </div>

                <div className="text-grey-dark mt-6">
                    Already have an account? 
                    <a className="no-underline border-b border-blue text-blue" href="/login">
                        Log in
                    </a>.
                </div>
            </div>
        </div>
  )
}
