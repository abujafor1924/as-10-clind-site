import React from "react";

const Menu = () => {
  return (
    <div className="grid grid-cols-3 gap-4 p-4 h-96  mt-24">
      <div className="card card-side bg-slate-200 h-60 shadow-xl">
        <figure>
          <img
            className="rounded "
            src="https://images.unsplash.com/photo-1481671703460-040cb8a2d909?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
            alt="Movie"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">hight quality</h2>
          <p>
            We serve the highest quality of prepared meals at a great value, in
            a home-like and friendly environment.
          </p>
        </div>
      </div>
      <div className="card card-side bg-slate-200 h-60 shadow-xl">
        <figure>
          <img
            className="rounded "
            src="https://images.unsplash.com/photo-1481671703460-040cb8a2d909?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
            alt="Movie"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">best recipes</h2>
          <p>
            We serve the highest quality of prepared meals at a great value, in
            a home-like and friendly environment.
          </p>
        </div>
      </div>
      <div className="card card-side bg-slate-200 h-60 shadow-xl">
        <figure>
          <img
            className="rounded "
            src="https://images.unsplash.com/photo-1481671703460-040cb8a2d909?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
            alt="Movie"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">real taste</h2>
          <p>
            We serve the highest quality of prepared meals at a great value, in
            a home-like and friendly environment.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Menu;
