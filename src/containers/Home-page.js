import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import Contact from '../components/Contact';
import TouristInfo from '../components/TouristInfo';
import Introduction from '../components/Introduction';
import Activities from '../components/Activities';
import Neighborhood from '../components/Neighborhood';
import Traffic from '../components/Traffic';
import { useRef } from 'react';

const HomePage = () => {
  const homeRef = useRef();
  const aboutRef = useRef();
  const newsRef = useRef();
  const activityRef = useRef();
  const contactRef = useRef();
  const neighborhoodRef = useRef();
  const trafficRef = useRef();

  return (
    <>
      <Navbar
        homeRef={homeRef}
        aboutRef={aboutRef}
        newsRef={newsRef}
        activityRef={activityRef}
        neighborhoodRef={neighborhoodRef}
        trafficRef={trafficRef}
        contactRef={contactRef}
      />
      <Banner />
      <Introduction aboutRef={aboutRef} />
      <TouristInfo newsRef={newsRef} />
      <Activities activityRef={activityRef} />
      <Neighborhood neighborhoodRef={neighborhoodRef} />
      <Traffic trafficRef={trafficRef} />
      <Contact contactRef={contactRef} />
      <Footer />
    </>
  );
};

export default HomePage;
