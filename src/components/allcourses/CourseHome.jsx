import React from "react"
import Back from "../common/back/Back"
import CoursesCard from "./CoursesCard"
import OnlineCourses from "./OnlineCourses"
import Chatbox from "../chatbox/chatbox"

const CourseHome = () => {
  return (
    <>
      <Back title='Explore Courses' />
      <Chatbox/>
      <CoursesCard />
      <OnlineCourses />
    </>
  )
}

export default CourseHome
