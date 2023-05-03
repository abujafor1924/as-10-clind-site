import React from "react";
import { useContext } from "react";
import { AutContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const ProtectRout = ({ children }) => {
  const { user, loding } = useContext(AutContext);
  const location = useLocation();
  console.log(location);

  if (loding) {
    return (
      <div className="mx-auto mt-24">
        <button className="btn btn-square text-cyan-500 loading"></button>
      </div>
    );
  }
  if (user) {
    return children;
  }
  return <Navigate to={"/login"} state={{ from: location }} replace></Navigate>;
};

export default ProtectRout;
