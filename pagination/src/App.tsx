import { useEffect, useState } from 'react'
import './App.css'
import { productsResponse } from './utils/types';

function App() {

  const [products, setProducts] = useState<productsResponse>();

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://dummyjson.com/products?limit=100");
      const data: productsResponse = await res.json();

      setProducts(data);
    }

    fetchData();

  }, [])


  return (
    <div className='container'>
      {
        products?.products.map((ele, idx) => (
          <div key={idx} className='wrapper'>
            <div className='wrapperW'>
              <img className='wrapperImg' src={ele.images[0]} alt="" />
              <h1 className='wrapperTitle'>{ele.title}</h1>
              <p className='wrapperDesc'>{ele.description}</p>
              <span className='wrapperPrice'>{ele.price}</span>
              </div>
          </div>
        ))
      }
    </div>
  )
}

export default App
