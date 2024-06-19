import React from "react"
import Back from "../common/back/Back"
import PriceCard from "./PriceCard"
import "./price.css"
import Chatbox from "../chatbox/chatbox"
import Faq from "./Faq"

const Pricing = () => {
  return (
    <>
      <Back title='Choose The Right Plan' />
      <Chatbox/>
      <section className='price padding'>
        <div className='container grid'>
          <PriceCard />
        </div>
      </section>
      <Faq />
    </>
  )
}

export default Pricing
