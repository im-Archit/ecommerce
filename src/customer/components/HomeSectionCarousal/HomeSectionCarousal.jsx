import React from "react";
import AliceCarousel from "react-alice-carousel";
import HomeSectionCard from "../HomemSectionCard/HomeSectionCard";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { mens_kurta } from "../../../Data/mens_kurta";

const theme = createTheme();

const HomeSectionCarousal = ({data,sectionName}) => {
  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 5.5 },
  };

  if (!mens_kurta) {
    return <div>Loading...</div>;
  }

  const items = data
    .slice(0, 20)
    .map((item) => <HomeSectionCard key={item.id} product={item} />);

  // Define the custom buttons
  const renderPrevButton = () => (
    <button className="alice-carousel__prev-btn"></button>
  );

  const renderNextButton = () => (
    <button className="alice-carousel__next-btn"></button>
  );

  return (
    <div className="border-black">
      <h2 className="text-2xl font-extrabold text-gray-800 py-5" >{sectionName}</h2>
      <div className="relative p-5">
        <AliceCarousel
          mouseTracking
          items={items}
          controlsStrategy="alternate"
          autoPlay
          autoPlayInterval={2000}
          infinite
          responsive={responsive}
          buttonsDisabled={false} // Enable the buttons
          renderPrevButton={renderPrevButton} // Render the previous button
          renderNextButton={renderNextButton} // Render the next button
        />
      </div>
    </div>
  );
};

export default HomeSectionCarousal;
