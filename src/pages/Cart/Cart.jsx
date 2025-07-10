import React from 'react'
import Layout from '../../components/Layout/Layout'
import BagSum from '../../components/Bag&Summary/BagSum'

const Cart = ({item,setItem,}) => {
  return (
    <Layout>
      <BagSum item={item} setItem={setItem}/>
    </Layout>
  )
}

export default Cart
