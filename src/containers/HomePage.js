import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import TouristicInfo from '../components/TouristicInfo';
import FieldInfo from '../components/FieldInfo';
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
  const touristicInfoRef = useRef();
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
        touristicInfoRef={touristicInfoRef}
      />
      <Banner />
      <Introduction aboutRef={aboutRef} />
      <FieldInfo newsRef={newsRef} />
      <Activities activityRef={activityRef} />
      <Neighborhood neighborhoodRef={neighborhoodRef} />
      <Traffic trafficRef={trafficRef} />
      <TouristicInfo newsRef={newsRef} touristicInfoRef={touristicInfoRef} />
      <Footer />
    </>
  );
};

export default HomePage;
