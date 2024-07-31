import HeroSection from "../components/sections/home/hero-section"
import RecruitmentSection from "../components/sections/home/recruitment-section"
import RoutesAndDirections from "../components/sections/home/news-and-routes/routes-and-directions"
import SupportSection from "../components/sections/home/support-section/support-section"
import MapSection from "../components/sections/map-section/map-section"

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <RecruitmentSection />
      <RoutesAndDirections />
      <SupportSection />
      <MapSection />
    </>
  )
}

export default HomePage
