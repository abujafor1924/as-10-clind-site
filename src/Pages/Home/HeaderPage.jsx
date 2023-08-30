import React from "react";
import "../pages.css";
import Slider from "./Slider";
import Menu from "./Menu";
import Exilend from "./Exilend";
import ChefPerson from "./ChefPerson";

const HeaderPage = () => {
  return (
    <div>
      <div className="md:h-96 h-44 ">
        {/* slide start */}
        <div>
          <div className="carousel w-full ">
            <div id="slide1" className="carousel-item relative w-full">
              <img
                src="https://img.freepik.com/free-psd/banner-template-with-cooking_23-2148543082.jpg?w=900&t=st=1693409272~exp=1693409872~hmac=025611af7664e3ce926435aa786762c17b5088fa0649f1e1a16e3e720e097d43"
                className="w-full md:h-full h-44"
              />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide4" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide2" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
              <img
                src="https://img.freepik.com/free-psd/banner-template-with-cooking-concept_23-2148543084.jpg?w=900&t=st=1693409908~exp=1693410508~hmac=af8d0c928496caf4157a949e60a1fe1cdf3e362a9a0addab989f270a813788e9"
                className="w-full  md:h-full h-44 "
              />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide1" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide3" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="md:flex justify-start bg-img md:mt-80  ">
        <div className="md:py-36 pl-24 text-white md:w-6/12 pt-8">
          <h1 className="text-4xl font-bold">Catering </h1>
          <p className="text-2xl">
            please call at least 24 hours in advance for catering orders
          </p>
          <button className="btn btn-primary m-2">click now</button>
        </div>
        <div className="md:w-8/12 text-white md:py-24 h-12/12 ">
          <Slider></Slider>
        </div>
      </div>
      <Menu></Menu>
      <Exilend></Exilend>
      <ChefPerson></ChefPerson>
    </div>
  );
};

export default HeaderPage;
