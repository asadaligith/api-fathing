import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'


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



function ApiFatch(){
    const [carts , setCarts] = useState<Cart[]>([])

   const getData = async ()=>{
   try {
    const res = await axios.get('https://dummyjson.com/carts')
    setCarts(res.data.carts)
    console.log(res)
   } catch (error) {
    console.log(error)
    
   }

  }
  

  useEffect(()=>{
    getData()
  },[])

    return(
        <>
          <h2>Cart List</h2>

{carts.map((cart) => (
  <div key={cart.id} style={{ border: '1px solid gray', margin: '10px', padding: '10px' }}>
    <h3>Cart ID: {cart.id}</h3>
    <p>Total Price: ${cart.total}</p>

    <h4>Products:</h4>
    {cart.products.map((product) => (
      <div key={product.id} style={{ marginLeft: '15px' }}>
        <p>{product.title} - ${product.price}</p>
      </div>
    ))}
  </div>
))}

        </>
    )

}
export default ApiFatch