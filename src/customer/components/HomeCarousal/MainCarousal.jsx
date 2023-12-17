import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { mainCarousalData } from "./MainCarousalData";

const MainCarousal = () => {
  const items = mainCarousalData.map((item) => (
    <img className="cursor-pointer -z-10 flex justify-center align-middle" role="presentation" src={item.image} />
  ));

  return (
    <>
      <AliceCarousel
        mouseTracking
        items={items}
        // responsive={items}
        controlsStrategy="alternate"
        disableButtonsControls
        autoPlay
        autoPlayInterval={2000}
        infinite
      />
    </>
  );
};

export default MainCarousal;
