import Navbar from "../components/Navbar";
import Showcase from "../components/Showcase";
import Services from "../components/Services";
import Footer from "../components/Footer";
import Testimonial from "../components/Testimonial";
import Works from "../components/Works";

const Home = () => {
  return (
    <>
      <Navbar />
      <Showcase />
      <Services />
      <Works />
      <Testimonial />
      <Footer />
    </>
  );
};

export default Home;
