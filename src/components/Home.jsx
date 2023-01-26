
import React, { useEffect, useState } from 'react'
import Products from './Products'
import { Link } from 'react-router-dom'

const Home = () => {
   
 const [menu, setmenu] = useState(false)
 const [display, setdisplay] = useState('-right-full')
 
 function displayMenu() {
    if (menu === true) {
      
        setmenu(false)
        setdisplay('-right-full')
        
        
      }
      if (menu === false) {
        setmenu(true)
        setdisplay('right-1')
    
    }
  
 }

  return (
    <div className='w-full sm:screen overflow-hidden'>
            <div>
    <div className='w-full h-24 bg-primary-blue justify-between  flex  overflow-hidden' > 
    <div>
        <img className='w-48 h-24' src="/b99408_982097b09c11413abf876837ea8069aa_mv2.gif" alt="" />
    </div>
    <div className='hidden sm:flex justify-center h-full overflow-hidden'>
        
        <h1 className=' m-auto text-white font-Kanit'>Bienvenido Usuario</h1>
    </div>
    <div className='flex w-48  sm:justify-between overflow-hidden' >
    <div className=' flex flex-col justify-center items-center overflow-hidden'>
            <h1 className='text-white font-rubik text-center sm:hidden'>Bienvenido Usuario</h1>
            <p>
                
                <svg className='w-14 h-14 hidden sm:block' fill="white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M21.822 7.431A1 1 0 0 0 21 7H7.333L6.179 4.23A1.994 1.994 0 0 0 4.333 3H2v2h2.333l4.744 11.385A1 1 0 0 0 10 17h8c.417 0 .79-.259.937-.648l3-8a1 1 0 0 0-.115-.921zM17.307 15h-6.64l-2.5-6h11.39l-2.25 6z"/><circle cx="10.5" cy="19.5" r="1.5"/><circle cx="17.5" cy="19.5" r="1.5"/></svg></p>
            </div>
            <div className='flex justify-center w-10 '>
                <button onClick={displayMenu}>
                <svg className='h-full w-10 sm:w-28 sm:pr-10' xmlns="http://www.w3.org/2000/svg" fill='white' width="24" height="24" viewBox="0 0 24 24"><path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"/></svg>
                </button>
                </div>  

            
    </div>
 
       
                  
    </div>
    <div className='relative'>
 <div className={`absolute ${display} z-20  transform ease-in duration-200  w-1/3 sm:w-48 h-36 sm:h-28 rounded-2xl border-2 border-secondary-blue  bg-primary-cyan`}>
        <div className='mt-6 text-white font-Kanit flex flex-wrap m-auto  w-2/3 gap-y-2'>
        <svg className='w-1/3' xmlns="http://www.w3.org/2000/svg" fill='white' width="24" height="24" viewBox="0 0 24 24"><path d="M12 2A10.13 10.13 0 0 0 2 12a10 10 0 0 0 4 7.92V20h.1a9.7 9.7 0 0 0 11.8 0h.1v-.08A10 10 0 0 0 22 12 10.13 10.13 0 0 0 12 2zM8.07 18.93A3 3 0 0 1 11 16.57h2a3 3 0 0 1 2.93 2.36 7.75 7.75 0 0 1-7.86 0zm9.54-1.29A5 5 0 0 0 13 14.57h-2a5 5 0 0 0-4.61 3.07A8 8 0 0 1 4 12a8.1 8.1 0 0 1 8-8 8.1 8.1 0 0 1 8 8 8 8 0 0 1-2.39 5.64z"/><path d="M12 6a3.91 3.91 0 0 0-4 4 3.91 3.91 0 0 0 4 4 3.91 3.91 0 0 0 4-4 3.91 3.91 0 0 0-4-4zm0 6a1.91 1.91 0 0 1-2-2 1.91 1.91 0 0 1 2-2 1.91 1.91 0 0 1 2 2 1.91 1.91 0 0 1-2 2z"/></svg>
        <p className='w-1/2' > Perfil</p>
        <svg className='w-1/3 sm:hidden block' xmlns="http://www.w3.org/2000/svg" fill='white' width="24" height="24" viewBox="0 0 24 24"><path d="M21.822 7.431A1 1 0 0 0 21 7H7.333L6.179 4.23A1.994 1.994 0 0 0 4.333 3H2v2h2.333l4.744 11.385A1 1 0 0 0 10 17h8c.417 0 .79-.259.937-.648l3-8a1 1 0 0 0-.115-.921zM17.307 15h-6.64l-2.5-6h11.39l-2.25 6z"/><circle cx="10.5" cy="19.5" r="1.5"/><circle cx="17.5" cy="19.5" r="1.5"/></svg>
        <p className='sm:hidden block'>Carrito</p>
        <Link to='/'>
        <div className='flex flex-row sm:w-28 sm:pl-2'>
          <svg className='w-1/3' xmlns="http://www.w3.org/2000/svg" fill='white' width="24" height="24" viewBox="0 0 24 24"><path d="M16 13v-2H7V8l-5 4 5 4v-3z"/><path d="M20 3h-9c-1.103 0-2 .897-2 2v4h2V5h9v14h-9v-4H9v4c0 1.103.897 2 2 2h9c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2z"/></svg>
        <p className='w-28'>Log out</p>  
        </div>
        </Link>
        
        
        </div>
       
       </div>
    </div>
   
    <div className='justify-center w-3/4 sm:w-1/4 m-auto mt-6'>
       <label htmlFor="">
                <input className='p-3 rounded-xl border-solid border-4 h-10 w-full border-primary-cyan pt-2 bg-transparent' type="text" placeholder='Que estas buscando ' />
                <svg className='relative bottom-7 left-60 sm:left-[90%]' width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.8541 11.5833H12.097L11.8287 11.3021C12.4276 10.5458 12.8653 9.65497 13.1105 8.69335C13.3557 7.73172 13.4023 6.72308 13.247 5.73958C12.7966 2.84375 10.5732 0.53125 7.88991 0.177084C6.94655 0.0473606 5.98838 0.153929 5.08873 0.488635C4.18908 0.82334 3.3718 1.37731 2.69942 2.10816C2.02704 2.839 1.51739 3.72736 1.20946 4.70523C0.901529 5.68311 0.803486 6.7246 0.922832 7.75C1.24866 10.6667 3.37617 13.0833 6.04033 13.5729C6.94515 13.7417 7.8731 13.691 8.7578 13.4245C9.64249 13.158 10.4621 12.6822 11.1578 12.0313L11.4166 12.3229V13.1458L15.4895 17.5729C15.8824 18 16.5245 18 16.9174 17.5729C17.3103 17.1458 17.3103 16.4479 16.9174 16.0208L12.8541 11.5833ZM7.10408 11.5833C4.71783 11.5833 2.79158 9.48958 2.79158 6.89583C2.79158 4.30208 4.71783 2.20833 7.10408 2.20833C9.49033 2.20833 11.4166 4.30208 11.4166 6.89583C11.4166 9.48958 9.49033 11.5833 7.10408 11.5833Z" fill="#6E6A6C"/>
</svg>

              </label>
        
    </div>
    <div>
        
    </div>
    <div className='m-auto pb-14'>
        <h1 className='text-center my-6 font-Kanit text-2xl'>Productos</h1>
        <Products/>
   
        </div>
        <div></div>
    </div>
    <footer className='w-full h-40 mb-16 sm:mb-0 sm:border-t-2  border-secondary-blue' >

        <div className='sm:hidden flex  flex-wrap gap-5 w-full font-Kanit bg-secondary-blue text-white'>
        <div className='w-1/3 text-center m-auto' >
            <h1>Inicio</h1>
            <h1>Contacto</h1>
            <h1>Politicas de Privacidad</h1>
        </div>
        <div className='w-1/3 text-center m-auto'>
            <p>Telefonos:</p>
            <p>+52 123 456 7890</p>
            <p>+52 123 456 7890</p>
            <p>ventas@hotmail.com</p>
            <p>info@gmail.com</p>
        </div>
        <div className='w-full justify-center m-auto flex flex-col'>
                    <input placeholder='Email' type="text" className='p-3 rounded-xl border-solid border-4 h-10 w-3/4 justify-center m-auto border-primary-cyan pt-2 bg-transparent'/>
                        <button className=' mt-3 mb-3 border-2 rounded-lg bg-white w-1/4 m-auto'> <p className='text-transparent bg-clip-text bg-gradient-to-r from-primary-cyan to-primary-blue' >Registrar</p> </button>
        </div>
        </div>

        <div  className='hidden sm:flex justify-evenly text-2xl text-secondary-blue font-Kanit '>
        <div className='h-full w-72' >
            <img className='w-full h-full' src="/gif2.gif" alt="" />
        </div>
        <div className='text-center w-50  bg-white leading-[50px]' >
            <h1>Inicio</h1>
            <h1>Contacto</h1>
            <h1>Politicas de Privacidad</h1>
        </div>
        <div className='text-center w-50 leading-8'>
            <p>Telefonos:</p>
            <p>+52 123 456 7890</p>
            <p>+52 123 456 7890</p>
            <p>ventas@hotmail.com</p>
            <p>info@gmail.com</p>
        </div>
        <div className='flex flex-col justify-center items-center'>
                    <input placeholder='Email' type="text" className='p-3 rounded-xl border-solid border-2 h-10 w-full justify-center mb-6 border-secondary-blue pt-2 bg-transparent'/>
                        <button className='mb-3 border-2 rounded-lg border-secondary-blue bg-white w-2/4'> <p className='text-transparent bg-clip-text bg-gradient-to-r from-primary-cyan to-primary-blue' >Registrar</p> </button>
        </div>
       
       
        </div>
    </footer>
    </div>
  )
}

export default Home