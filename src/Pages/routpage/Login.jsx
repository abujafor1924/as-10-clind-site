import React, { useContext, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { AutContext } from "../../Provider/AuthProvider";
const Login = () => {
  const [show, setShow] = useState(false);
  const { singIn, googleLoge, forgetPassword, gitlog } = useContext(AutContext);
  const navigate = useNavigate();
  const location = useLocation();
  const emailRef = useRef();
  const [error, setError] = useState();

  const from = location.state?.from?.pathname || "/";

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email, password);

    singIn(email, password)
      .then((result) => {
        const userLogin = result.user;
        console.log(userLogin);
        form.reset();
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
        setError(`email or password dos'nt match`);
      });
  };

  const handleGoole = (e) => {
    googleLoge()
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handlegithub = (e) => {
    gitlog()
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleForget = (e) => {
    const email = emailRef.current.value;
    if (!email) {
      alert("please provite a valid email");
    }

    forgetPassword(email)
      .then(() => {
        // console.log(result);
        alert("Please chack your Email");
        return;
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                ref={emailRef}
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type={show ? "text" : "password"}
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
              />
              <p onClick={() => setShow(!show)}>
                {show ? <span>Hide Password</span> : <span>Show password</span>}
              </p>
              <label className="label">
                <button
                  onClick={handleForget}
                  className="label-text-alt link link-hover"
                >
                  Forgot password?
                </button>
              </label>
              <p className="text-red-500">{error}</p>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
            <div>
              <button
                onClick={handleGoole}
                className="btn btn-outline btn-primary my-2 w-full"
              >
                <FaGoogle className="mx-2" /> Login with google
              </button>
              <button
                onClick={handlegithub}
                className="btn btn-outline btn-accent my-2 w-full"
              >
                <FaGithub className="mx-2" />
                Login with git
              </button>
            </div>
            <p>
              have no account?{" "}
              <Link to={"/register"} className="text-red-600">
                Register Now
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
