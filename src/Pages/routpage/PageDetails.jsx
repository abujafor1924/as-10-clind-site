import React, { useEffect } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { FaBeer, FaRegThumbsUp } from "react-icons/fa";
import Recepe from "./Recepe";
import LazyLoad from "react-lazy-load";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

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
      {/* <figure>
        <LazyLoad offset={300}>
          <img className="rounded" src={image} alt="Shoes" />
        </LazyLoad>
      </figure> */}
      <LazyLoadImage src={image} effect="blur" alt="Image Alt" />
      <div className="card-body">
        <h2 className="card-title">{chefName}</h2>
        <p>{description}</p>
        <p>Years of experience : {yearsOfExperience}</p>
        <p>Numbers of recipes : {numberOfRecipes}</p>
        <p className="flex">
          <FaRegThumbsUp className="m-1"></FaRegThumbsUp>
          {likes}
        </p>
        <h1 className="text-4xl font-bold text-sky-900 mt-4">
          Some Recepis Section
        </h1>
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
