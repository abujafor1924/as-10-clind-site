import React, { useContext } from "react";
import { AutContext } from "../../Provider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Update = () => {
  const { user, updateUser } = useContext(AutContext);
  console.log(user);

  const handaleUpadet = (e) => {
    e.preventDefault();
    const form = e.target;
    const displayName = form.name.value;
    const photoURL = form.photo.value;
    // const email = form.email.value;
    // console.log(displayName, photoURL, email);

    updateUser(displayName, photoURL)
      .then((result) => {
        toast.success("Profile upadate success");
        console.log(result);
      })
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <div className="mx-auto w-96">
        <img
          src={user?.photoURL}
          alt=""
          className="w-16 h-16 rounded-full ml-32"
        />
        <h1 className=" text-3xl font-medium">
          Hello! <span className="text-cyan-800">{user?.displayName}</span>
        </h1>
      </div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Update Profile</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handaleUpadet} className="card-body">
              {/* <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  className="input input-bordered"
                  name="email"
                />
              </div> */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">PictureURL</span>
                </label>
                <input
                  type="text"
                  placeholder="Picture"
                  className="input input-bordered"
                  name="photo"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  className="input input-bordered"
                  name="name"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <ToastContainer />
                <button className="btn btn-primary">Upadet</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Update;
