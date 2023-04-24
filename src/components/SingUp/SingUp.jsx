import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { authProvider } from "../Context/Context";

const SingUp = () => {
  const [error, setError] = useState('');
  const { createUser } = useContext(authProvider);
  const { singInWith } = useContext(authProvider);
  const { singOutWithPassword} = useContext(authProvider);

  console.log(singInWith);
  const handleSingUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    // const confirm = form.password.value;
    setError("");
    if (password !== confirm) {
      setError("Your password did not match");
    } else if (password.length < 6) {
      setError("password must be 6 characters or longer");
    }
    createUser(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleWithGoogle = (e) => {
    singInWith(auth);
  };
  const singOut = ()=>{
    singOutWithPassword()
    .then(result=>{
        console.log(result);
    })
    .catch((error)=>{
        console.log(error);
    })
  }

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSingUp} className="card-body">
            <h1 className="text-4xl font-bold text-center">SingUp now!</h1>
            <div className="form-control mt-10">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="password"
                className="input input-bordered"
              />
              {/* <label className="label">
                  <span className="label-text">confirm Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="confirm password"
                  className="input input-bordered"
                /> */}
              <label className="label">
                <p>
                  <small>Already have an account? </small>
                  <Link
                    to="/login"
                    className="label-text-alt link link-hover divide-red-400"
                  >
                    Login
                  </Link>
                </p>
              </label>
            </div>
            <h2 className="text-red-700">{error}</h2>
            <div className="form-control mt-6">
              <button className="btn btn-primary">SingUp</button>
            </div>
            <div className="flex flex-col w-full border-opacity-50">
              <div className="divider">OR</div>
            </div>
          </form>
          <button
            onClick={handleWithGoogle}
            className="btn btn-outline btn-secondary"
          >
            Continue with Google
          </button>
          <button onClick={singOut} className="btn">singOut</button>
        </div>
      </div>
    </div>
  );
};

export default SingUp;
