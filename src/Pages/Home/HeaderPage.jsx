import React from "react";
import "../pages.css";
import Slider from "./Slider";
import Menu from "./Menu";
import Exilend from "./Exilend";
import ChefPerson from "./ChefPerson";

const HeaderPage = () => {
  return (
    <div>
      <div className=" hight">
        {/* slide start */}
        <div>
          <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full">
              <img
                src="https://img.freepik.com/free-vector/flat-design-pizza-sale-banner_23-2149116013.jpg?w=740&t=st=1683126401~exp=1683127001~hmac=e0fd096f134eaa57e0d9c9628f5293216bb6817f323cd5097eccfc9ae8c5ec5a"
                className="w-full hight"
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
                src="https://img.freepik.com/free-psd/food-menu-restaurant-facebook-cover-template_120329-1680.jpg?w=740&t=st=1683126606~exp=1683127206~hmac=ad341c1faf46f2532dfa095b87505e389ee62babee5931f9730796cea366a471"
                className="w-full hight"
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
      <div className="md:flex justify-start bg-img ">
        <div className="md:py-36 pl-24 text-white md:w-6/12 pt-8">
          <h1 className="text-4xl font-bold">Catering </h1>
          <p className="text-2xl">
            please call at least 24 hours in advance for catering orders
          </p>
          <button className="btn btn-primary m-2">click now</button>
        </div>
        <div className="md:w-8/12 text-white py-24 h-12/12 ">
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
