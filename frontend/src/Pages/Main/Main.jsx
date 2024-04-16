import Navbar from "../../components/Navbar";
import Home from "../../components/Home";
import AboutUs from "../../components/AboutUs";
import Menu from "../../components/Menu";
import Services from "../../components/Services";
import Reservation from "../../components/Reservation";
import Footer from "../../components/Footer";

const Main = () => {
  return (
    <div>
      <Navbar />
      
      <div id="home">
      <Home />
      </div>
      <div id="about">
      <AboutUs />
      </div>
      <div id="menu">
      <Menu />
      </div>
      <div id="services">
      <Services />
      </div>
      <div id="reservation">
      <Reservation />
      </div>
      
      <Footer />
    </div>
  );
};

export default Main;
