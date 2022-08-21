import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Cards from '../components/Cards/Cards.js'

const Home = () => {

  const [productos, setProductos] = useState([]);

  const getProductos = async () => {
    try {
      const repose = await axios.get("https://fakestoreapi.com/products")
      setProductos(repose.data)
      console.log(productos)

    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=>{
    getProductos()
  },[])


  return (
    <div className='contenedorCards'>
      {productos.map((item, index) => 
        <Cards
        key ={index}
        image = {item.image}
        title = {item.title}
        description = {item.description} 
         />
      )}
    </div>
  );
}

export default Home
