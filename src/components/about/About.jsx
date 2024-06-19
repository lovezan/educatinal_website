import React from "react"
import "./about.css"
import Back from "../common/back/Back"
import AboutCard from "./AboutCard"
import Chatbox from "../chatbox/chatbox"
import { Chat } from "@mui/icons-material"

const About = () => {
  return (
    <>
      <Back title='About Us' />
    <Chatbox/>
      <AboutCard />
    </>
  )
}

export default About
