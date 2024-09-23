import Image from "next/image";
import Link from "next/link";
import Header from "./component/header";
import Hero from "./component/hero";
import AboutMe from "./component/about-me";
import Footer from "./component/footer";
import Contact from "./component/contact";

const Home = () => {
  return (
    <div className="appi bg-gradient-to-r from-cyan-500 to-blue-50">
      <Header />
      <Hero />
      <AboutMe />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
