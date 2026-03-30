import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import HeroSection from './components/HeroSection/HeroSection'
import ProductsShowcaseSection from './components/ProductsShowcaseSection/ProductsShowcaseSection'
import StatsSection from './components/StatsSection/StatsSection'



const getData = async () => {
  const res = await fetch('./data.json')
  return res.json()
}
const dataPromise = getData()


function App() {
  const [cartData, setCartData] = useState([])
  const handleDataForCart = (data) => {
    setCartData([...cartData, data])
  }

  return (
    <>
      <Header cartData={cartData}></Header>
      <HeroSection></HeroSection>
      <StatsSection></StatsSection>
      <ProductsShowcaseSection dataPromise={dataPromise} handleDataForCart={handleDataForCart} cartData={cartData}></ProductsShowcaseSection>
    </>
  )
}

export default App
