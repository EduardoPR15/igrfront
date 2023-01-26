import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, Navigate, NavLink, useNavigate } from 'react-router-dom'

const Login = () => {

  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [login, setlogin] = useState()
  const navigate = useNavigate

  function logeed () {
    navigate('/Home')
  }

  const handleSubmit = (e) =>{
    e.preventDefault()
    console.log(email);
    console.log(password);
    
    if (email === 'ApiAdmin' && password === '123456' ) {
      console.log('entrando');
        setlogin(true)
        //logeed()
        
    }
    else{
      console.log('no auth');
      setlogin(false)
    }
  }

  useEffect(() => {
    
    if (email === 'ApiAdmin' && password === '123456' ) {
      console.log('entrando');
        setlogin(true)
      
        
    }
    else{
      console.log('no auth');
      setlogin(false)
    }
    
  }, [email, password])
  

  const url = 'https://crazy-stonebraker.68-168-208-58.plesk.page/api/Auth/Auth'
  // useEffect(() => {
  //   axios.post(url,{
  //     nombre: email,
  //     Password: password
  //   })
  //   .then(res => setlogin(res.data))
  //   .catch(err =>console.log(err));

    
  // }, [handleSubmit])
  
  
  // const options = {
  //   method: 'POST',
  //   url: 'https://crazy-stonebraker.68-168-208-58.plesk.page/api/Auth/Auth',
  //   headers: {Authorization: 'Basic Og==', nombre: 'ApiAdmin', Password: '123456'},
  //   data: {Nombre: 'ApiAdmin', Password: '123456'}
  // };
  
  // axios.request(options).then(function (response) {
  //   console.log(response.data);
  // }).catch(function (error) {
  //   console.error(error);
  // });




  console.log(login);
  return (
    <div className="w-full font-Kanit bg-primary-blue h-screen text-white sm:screen overflow-hidden">

    <div className="absolute w-full overflow-hidden">
      <img className= "relative right-20" src="/Recurso 8principal1 .png" alt="" />
      <div className='hidden absolute top-0 w-full h-full bg-primary-blue' ></div>
    </div>
    <div className='absolute w-full sm:w-auto right-0 h-52 bottom-0 overflow-hidden'>
          <img className='relative' src="/Recurso 5principal1.png" alt="" />
        </div>
    <form onSubmit={handleSubmit}>

    <div className="w-8/12  sm:w-2/5 h-2/3 mt-48 pt-6 justify-center items-center m-auto">
        <div className='lg-mx-36'>
            <h1 className='mb-5 text-4xl relative bottom-10 text-center "'>Iniciar sesion</h1>
            <label htmlFor='email'>
              <h2 className='pb-6 text-2xl'>Email</h2>
             
                <input value={email} onChange={(e)=> setEmail(e.target.value)} className=' rounded-md mb-6 border-solid border-4 h-10 w-full p-3 border-primary-cyan pt-2 bg-transparent' type="text" />
              </label>
              <h2 className='pb-6 text-2xl relative text'>Password</h2>
              <label htmlFor='password'>
                <input value={password} onChange={(e)=> setPassword(e.target.value)} className='rounded-md border-4 mb-6 w-full h-10 border-primary-cyan p-3 bg-transparent' type="password" />
              </label>
            
              <button type='submit' className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 border-4 border-primary-cyan animate-pulse drop-shadow-lg rounded-full w-full text-transparent text-4xl font-bold bg-clip-text bg-gradient-to-r from-primary-cyan to-white mt-6 pt-3 pb-4 ' > { login ? <Link to='/Home' > Log in</Link> : <p>Log in</p>  } </button>   
        </div>

    </div>
    </form>
    
       {/* <Link to='/Home'> Log in</Link> */}
      
    </div>
  )
}

export default Login