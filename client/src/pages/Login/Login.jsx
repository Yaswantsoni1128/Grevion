import React, { useState } from 'react';

const Login = () => {
  const [email , setEmail] = useState("")
  const [password , setPassword] = useState("")

  const submitHandler = (e)=> {
    e.preventDefault() 
  }
  
  return (
    <div className='flex flex-col min-h-screen bg-green-50'>
      {/* Main content */}
      <div className='flex items-center justify-center flex-grow'>
        <section className="w-1/4 h-[80%] absolute left-0 ">
          <img src="./left_login.png" alt="" className=''/>
        </section>

        <div className='fixed flex items-center justify-center w-1/2 gap-5 left-1/4'>

          <img src="./parali.jpg" alt="" className='w-1/2 h-1/2'/>
          
          <form action="" onSubmit={submitHandler} className="flex flex-col gap-2">
            <input 
            type="email"
            placeholder='Email'
            value={email}
            onChange={(e)=> setEmail(e.target.value)}
            className='px-4 py-2 bg-transparent outline-none'
            />
            <input 
            type="password"
            placeholder='Password'
            value={password}
            onChange={(e)=> setPassword(e.target.value)}
            />
            <button 
            type="submit"
            >Login</button>
          </form>
        </div>
      </div>

      {/* Footer */}
      <div className='min-h-[20%] flex justify-center items-center'>
        <span className='p-20 font-serif text-3xl text-black'>Grevian</span>
      </div>
    </div>
  );
};

export default Login;