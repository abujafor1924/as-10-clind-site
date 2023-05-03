import React from "react";
import { Link } from "react-router-dom";
import { FaBeer, FaRegThumbsUp } from "react-icons/fa";
import LazyLoad from "react-lazy-load";
const Categories = ({ data }) => {
  const { chefName, yearsOfExperience, numberOfRecipes, likes, image, id } =
    data;
  return (
    <div className="card md:w-96 bg-base-100 shadow-xl py-8 px-4">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{chefName}</h2>
        <p>Years of experience : {yearsOfExperience}</p>
        <p>Numbers of recipes : {numberOfRecipes}</p>
        <div className="card-actions justify-end">
          <p className="flex">
            <FaRegThumbsUp className="m-1" /> {likes}
          </p>
          <Link to={`/shop/${id}`} className="btn btn-primary">
            View Recipes
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Categories;
