import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className="w-full font-Kanit bg-primary-blue h-screen text-white sm:screen overflow-hidden">

    <div className="absolute w-full overflow-hidden">
      <img className= "relative right-20" src="/Recurso 8principal1 .png" alt="" />
      <div className='hidden absolute top-0 w-full h-full bg-primary-blue' >aa z</div>
    </div>
    <div className='absolute w-full sm:w-auto right-0 h-52 bottom-0 overflow-hidden'>
          <img className='relative' src="/Recurso 5principal1.png" alt="" />
        </div>
    
    <div className="w-8/12  sm:w-2/5 h-2/3 mt-48 pt-6 justify-center items-center m-auto">
        <div className='lg-mx-36'>
            <h1 className='mb-5 text-4xl relative bottom-10 text-center "'>Iniciar sesion</h1>
              <h2 className='pb-6 text-2xl'>Email</h2>
              <label htmlFor="">
                <input className=' rounded-md mb-6 border-solid border-4 h-10 w-full p-3 border-primary-cyan pt-2 bg-transparent' type="text" />
              </label>
              <h2 className='pb-6 text-2xl relative text'>Password</h2>
              <label htmlFor="">
                <input className='rounded-md border-4 mb-6 w-full h-10 border-primary-cyan p-3 bg-transparent' type="password" />
              </label>
            
              <button className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 border-4 border-primary-cyan animate-pulse drop-shadow-lg rounded-full w-full text-transparent text-4xl font-bold bg-clip-text bg-gradient-to-r from-primary-cyan to-white mt-6 pt-3 pb-4 ' > <Link to='/Home'> Log in</Link> </button>   
        </div>
    </div>
       
      
    </div>
  )
}

export default Login