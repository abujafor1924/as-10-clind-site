import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AutContext } from "../../Provider/AuthProvider";

const Register = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const { creatUser, updateUser } = useContext(AutContext);

  const handelRegister = (e) => {
    e.preventDefault();
    setSuccess("");
    setError("");
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirm = form.confirm.value;
    console.log(name, email, password, confirm, photo);

    //validation Prosses
    if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
      setError("Please provite  Two Uppercase ");
      return;
    } else if (!/[0-9]/.test(password)) {
      setError("please 1-9 Number digit");
      return;
    }

    setError("");
    if (password !== confirm) {
      setError("your password did'nt match");
      return;
    } else if (password.length < 6) {
      setError("mutch be minimum 6 carecter longer");
      return;
    }

    creatUser(email, password)
      .then((result) => {
        const logedUser = result.user;
        console.log(logedUser);
        setSuccess("your login success");
        // varifyEmail()
        //   .then((result) => {
        //     console.log(result);
        //     alert("please verify your Email");
        //   })
        //   .catch((error) => {
        //     console.log(error);
        //   });
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });

    updateUser(name, photo)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Registration now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handelRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="name"
                name="name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo</span>
              </label>
              <input
                type="text"
                placeholder="img url"
                name="photo"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input
                type="password"
                placeholder="Confirm password"
                name="confirm"
                className="input input-bordered"
                required
              />
            </div>
            <p className="text-green-500  mt-2">{success}</p>
            <p className="text-red-500  mt-2">{error}</p>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
            <p>
              alredy have a account ?{" "}
              <Link to={"/login"} className="text-orange-700">
                Login page
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
