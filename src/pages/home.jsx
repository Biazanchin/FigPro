import CallTA from "../components/cta/Cta";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import HeroHome from "../components/heroHome/HeroHome";
import Info from "../components/info/Info";
import Steps from "../components/steps/Steps";
import Stickers from "../components/stickers/Stickers";
import Tell from "../components/tell/Tell";

const Home = () => {
  return (
    <div>
      <Header />
      <HeroHome />
      <Info />
      <Steps />
      <Tell />
      <Stickers />
      <CallTA />
      <Footer />
    </div>
  );
};

export default Home;
