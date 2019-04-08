import React from "react";
import Navbar from "./layouts/navbar";
import Banner from "./index/banner";
import Koompi from "./index/koompi";
import Events from "./index/events";
import OSSection from "./index/os-section";
import Footer from "./layouts/footer";

const Index = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Banner />
      <OSSection />
      <Koompi />
      <Events />
      <Footer />
    </React.Fragment>
  );
};

export default Index;
