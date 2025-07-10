import HeroSection from '../../components/HeroSection/HeroSection'
import Layout from '../../components/Layout/Layout'
import NewArrival from '../../components/NewArrival/NewArrival'
import { useState } from 'react'

const Home = () => {
  const[count,setCount] = useState(0)
  return (
    <Layout count={count} >
      <HeroSection/>
      <NewArrival  title={'New Arrival'} count={count} setCount={setCount}/>
      <NewArrival  title={`Men's Watches`} count={count} setCount={setCount}/>
      <NewArrival  title={`Premium Watches`} count={count} setCount={setCount}/>

    </Layout>
  )
}

export default Home
