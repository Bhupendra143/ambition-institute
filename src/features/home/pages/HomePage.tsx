import React from 'react'
import HeroSection from '../components/HeroSection'
import CourseMarquee from '../../course/components/CourseMarquee'
import { ThemeToggle } from '../../../components/ThemeToggle'
import AdvanceCourses from '../../advanceCourses/components/AdvanceCourses'

const HomePage = () => {
  return (
    <>
      <ThemeToggle />
      <HeroSection />
      <CourseMarquee />
      <AdvanceCourses/>
    </> 
  )
}

export default HomePage