import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard'

const Products = () => {

    const [productsUnit, setProductsUnit] = useState()
    const url = 'https://kind-kapitsa.68-168-208-58.plesk.page/api/Productos/GetProductos'
        useEffect(() => {
            axios.get(url)
              .then(res => setProductsUnit(res.data))
              .catch(err =>console.log(err))
          
          }, [])
    
  

  return (
    <div>
        <div className='flex flex-col mb-10 gap-10 justify-center sm:flex-row sm:ml-10 sm:mr-10 sm:flex-wrap'>
        {
          productsUnit?.map(produ =>(
            <div>
                <ProductCard key={produ.tbProductosId} produ={produ}/>
            </div>
          ))
        }
   
    
    
    </div>
    </div>
  )
}

export default Products