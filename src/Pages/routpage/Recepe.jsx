import React, { useState } from "react";
import Rating from "react-rating";
import { FaRegStar, FaStar, FaHeart, FaRegHeart } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Recepe = ({ recipe }) => {
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const { name, details, rating } = recipe;

  const handleClick = () => {
    setButtonDisabled(true);
    toast.success("the recipe is your favorite added");
  };
  return (
    <div>
      <div className="card lg:card-side bg-slate-200 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>Preparetion Time : {details.prepTime}</p>
          <p>Cooking Time : {details.cookTime}</p>
          <h1 className="text-2xl font-bold">Ingredients </h1>
          <p>{details.ingredients}</p>

          <h1 className="text-2xl font-bold">Instructions</h1>
          <p>{details.instructions}</p>
          <div>
            <p className="flex justify-between">
              <p>
                <Rating
                  placeholderRating={rating}
                  readonly
                  emptySymbol={<FaRegStar />}
                  placeholderSymbol={<FaStar />}
                  fullSymbol={<FaStar />}
                />
                {rating}
              </p>

              <button onClick={handleClick} disabled={buttonDisabled}>
                {buttonDisabled ? (
                  <FaRegHeart className="text-red-600 m-1 mx-2" />
                ) : (
                  <FaHeart className="text-red-600 m-1 mx-2" />
                )}
              </button>
              <ToastContainer />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recepe;
