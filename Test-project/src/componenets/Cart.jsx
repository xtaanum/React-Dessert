import React from 'react'

const Cart = () => {
  return (
    <div>
      <div className='h-600 w-300 bg-white rounded-lg p-4'>
        <h1 className='text-red-500 text-2xl font-medium'>Your Cart(0)</h1>
        <img src="assets/images/illustration-empty-cart.svg" alt="" />
        <p>Your added items will appear here</p>
      </div>
    </div>
  )
}

export default Cart
