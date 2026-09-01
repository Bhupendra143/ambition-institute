import HeroSection from '../components/HeroSection'
import CourseMarquee from '../../courses/components/CourseMarquee'
import { ThemeToggle } from '../../../components/ThemeToggle'
import AdvanceCourses from '../../advanceCourses/components/AdvanceCourses'

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <CourseMarquee />
      <AdvanceCourses/>
    </> 
  )
}

export default HomePage