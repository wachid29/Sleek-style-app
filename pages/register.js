import React from "react";
import registerStyle from "../styles/Login.module.css";
import Image from "next/image";

function Register() {
  return (
    <>
      <div className={`container-fluid ${registerStyle.main}`}>
        <div className={`card ${registerStyle.card} text-center`}>
          <div className="d-flex justify-content-center mb-4">
            <Image
              src="/images/logo.png"
              width="85px"
              height="30px"
              alt="image"
            />
          </div>
          <h4>Please login with your account</h4>
          <span className="d-flex justify-content-center mt-4 mb-4">
            <button
              type="button"
              className={`btn btn-outline-danger ${registerStyle.customerBtn}`}
            >
              <h5
                style={{
                  color: "#FFFFFF",
                  fontSize: "14px",
                }}
              >
                Customer
              </h5>
            </button>
            <button
              type="button"
              className={`btn btn-outline-secondary ${registerStyle.sellerBtn}`}
            >
              <h5
                style={{
                  color: "#9B9B9B",
                  fontSize: "14px",
                }}
              >
                Seller
              </h5>
            </button>
          </span>
          <div className="mb-2">
            <input
              type="text"
              className="form-control mb-2"
              id="exampleFormControlInput3"
              placeholder="Name"
            />
            <input
              type="email"
              className="form-control mb-2"
              id="exampleFormControlInput1"
              placeholder="Email"
            />
            <input
              type="password"
              className="form-control mb-2"
              id="exampleFormControlInput2"
              placeholder="Password"
            />
          </div>
          <button
            type="button"
            className="btn btn-danger mb-3"
            style={{ borderRadius: "50px" }}
          >
            Register
          </button>
          <p>
            Already have a Tokopedia account?{" "}
            <span style={{ color: "#DB3022" }}>Login</span>
          </p>
        </div>
      </div>
    </>
  );
}

export default Register;
