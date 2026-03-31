// import axios from 'axios'
import './App.css'
// import { useEffect } from 'react'
// import { useState } from 'react'
import useFatch from './hooks/useFatch'


interface Product {
  id: number
  title: string
  price: number
}

interface Cart {
  id: number
  total: number
  products: Product[]
}

function App() {

  const [data] = useFatch('https://dummyjson.com/carts')



  return (
    <>
    <div>api fathing...</div>
    
      <h2>Cart List</h2>

      {data &&  data.map((cart: Cart) => (
        <div key={cart.id} style={{ border: '1px solid gray', margin: '10px', padding: '10px' }}>
          <h3>Cart ID: {cart.id}</h3>
          <p>Total Price: ${cart.total}</p>

          <h4>Products:</h4>
          {cart.products.map((product: Product) => (
            <div key={product.id} style={{ marginLeft: '15px' }}>
              <p>{product.title} - ${product.price}</p>
            </div>
          ))}
        </div>
      ))}

    </>
  )
}

export default App
