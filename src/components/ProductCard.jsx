import React from 'react'

const ProductCard = ({produ}) => {
  const stock = (produ.existenciasQro + produ.existenciasCuliacan + produ.existenciasLeon + produ.existenciasMexicali + produ.existenciasPuebla + produ.existenciasTorreon   );
  const imgProduct = (`${produ.imagen}.png`)
  return (

    
    <div className='overflow-hidden m-auto rounded-2xl flex font-rubik w-[292px] shadow-md shadow-primary-blue   sm:h-[400px]'>
        <div className='m-auto rounded-2xl w-80 -xl border-2 border-primary-cyan sm:h-full p-3 '>
          <h1 className='text-center h-14'>{produ.descripcion}</h1>
          <div className='w-3/4 h-48 m-auto' >
         <img className='h-3/4 flex justify-center m-auto mt-4' src={imgProduct} alt="" />
          </div>
          <div className='flex justify-between font-rubik'>
          <div>
            <p>{produ.formula}</p>
            <p>{produ.laboratorio}</p>
            <p>Stock {stock}</p>
            
          </div>
          <div className='flex flex-col w-28'>
            <p>Precio ${produ.precioPublico}</p>
           
              <div className= 'flex flex-row mt-3 w-full justify-center border-2 rounded-xl p-1.5 border-primary-cyan hover:border-primary-blue hover:animate-bounce trasition ease-int'>
              <button >
                <p className=' font-Kanit'>Comprar</p>
                </button>
              <svg className='relative top-1.5' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M13.707 3.293A.996.996 0 0 0 13 3H4a1 1 0 0 0-1 1v9c0 .266.105.52.293.707l8 8a.997.997 0 0 0 1.414 0l9-9a.999.999 0 0 0 0-1.414l-8-8zM12 19.586l-7-7V5h7.586l7 7L12 19.586z"/><circle cx="8.496" cy="8.495" r="1.505"/></svg>
                
              </div>
          </div>

          </div>
    
    </div>
    </div>
  )
}

export default ProductCard