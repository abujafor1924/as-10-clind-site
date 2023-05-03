import React from "react";
import "../pages.css";
import Slider from "./Slider";
import Menu from "./Menu";
import Exilend from "./Exilend";
import ChefPerson from "./ChefPerson";

const HeaderPage = () => {
  return (
    <div>
      <div className=" h-96  ">
        <div>
          <h1 className="text-center text-zinc-400 text-7xl font-bold  pt-24  ">
            Our Passion <br></br> For Delicious <br></br> Food
          </h1>
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
