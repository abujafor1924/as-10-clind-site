import React, { useEffect } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { FaBeer, FaRegThumbsUp } from "react-icons/fa";
import Recepe from "./Recepe";

const PageDetails = () => {
  const pagges = useLoaderData();
  // console.log(pagges.item);
  const {
    chefName,
    yearsOfExperience,
    numberOfRecipes,
    likes,
    image,
    id,
    description,
    recipe,
  } = pagges.item;

  return (
    <div className="card w-10/12 bg-base-100 mx-auto shadow-xl p-4">
      <figure>
        <img className="rounded" src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{chefName}</h2>
        <p>{description}</p>
        <p>Years of experience : {yearsOfExperience}</p>
        <p>Numbers of recipes : {numberOfRecipes}</p>
        <p className="flex">
          <FaRegThumbsUp className="m-1"></FaRegThumbsUp>
          {likes}
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-2 ">
        {recipe.map((recipe) => (
          <Recepe key={recipe.id} recipe={recipe}></Recepe>
        ))}
      </div>
    </div>
  );
};

export default PageDetails;
