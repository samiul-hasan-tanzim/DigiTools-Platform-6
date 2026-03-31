import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import HeroSection from './components/HeroSection/HeroSection'
import ProductsShowcaseSection from './components/ProductsShowcaseSection/ProductsShowcaseSection'
import StatsSection from './components/StatsSection/StatsSection'
import { toast } from 'react-toastify'
import GetStarted from './components/GetStarted/GetStarted'
import PricingSection from './components/PricingSection/PricingSection'
import CTASection from './components/CTASection/CTASection'
import FooterSection from './components/FooterSection/FooterSection'



const getData = async () => {
  const res = await fetch('./data.json')
  return res.json()
}
const dataPromise = getData()


function App() {
  const [cartData, setCartData] = useState([])
  const handleDataForCart = (data) => {

    const isFound = cartData.find(i => i.id === data.id)
    if (isFound) {
      toast.info("This product is already added in cart!");
      return;
    }

    toast.success("Added to the cart!");
    setCartData([...cartData, data])
  }


  return (
    <>
      <Header cartData={cartData}></Header>
      <HeroSection></HeroSection>
      <StatsSection></StatsSection>
      <ProductsShowcaseSection dataPromise={dataPromise} handleDataForCart={handleDataForCart} cartData={cartData} setCartData={setCartData}></ProductsShowcaseSection>
      <GetStarted></GetStarted>
      <PricingSection></PricingSection>
      <CTASection></CTASection>
      <FooterSection></FooterSection>
    </>
  )
}

export default App
