import React from 'react'
import MainCarousal from '../../HomeCarousal/MainCarousal'
import HomeSectionCarousal from '../../HomeSectionCarousal/HomeSectionCarousal';
import { mens_kurta } from '../../../../Data/mens_kurta';

const HomePage = () => {
  return (
    <>
      <div>
        <MainCarousal />
        <div className="py-20 space-y-4 flex-col justify-center px-5 lg:px-10">
          <HomeSectionCarousal data={mens_kurta} sectionName={"Men's Kurta"} />
          <HomeSectionCarousal data={mens_kurta} sectionName={"Men's Shoes"} />
          <HomeSectionCarousal data={mens_kurta} sectionName={"Men's Shirt"} />
          <HomeSectionCarousal data={mens_kurta} sectionName={"Men's Saree"} />
          <HomeSectionCarousal data={mens_kurta} sectionName={"Women's Dress"} />
        </div>
      </div>
    </>
  );
}

export default HomePage;
