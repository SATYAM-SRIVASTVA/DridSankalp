import React from "react";
import "./User.css";

const User = () => {
  return (
    <div>
      <div className="container rounded bg-white mt-5 mb-5">
        <div className="row">
          <div className="col-md-3 border-right">
            <div className="d-flex flex-column align-items-center text-center p-3 py-5">
              <img
                className="rounded-circle mt-5"
                width="150px"
                src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
              />
              <span className="font-weight-bold">Satyam Srivastava</span>
              <span className="text-black-50">satyam442001@gmail.com</span>
              <span> </span>
            </div>
          </div>
          <div className="col-md-5 border-right">
            <div className="p-3 py-5">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h4 className="text-right">My Profile</h4>
              </div>
              <div className="row mt-2">
                <div className="col-md-6">
                  <label className="labels">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="first name"
                    defaultValue
                  />
                </div>
                <div className="col-md-6">
                  <label className="labels">Surname</label>
                  <input
                    type="text"
                    className="form-control"
                    defaultValue
                    placeholder="surname"
                  />
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-md-12">
                  <label className="labels">Mobile Number</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="enter phone number"
                    defaultValue
                  />
                </div>

                <div className="col-md-12">
                  <label className="labels">Email ID</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="enter email id"
                    defaultValue
                  />
                </div>
                <div className="col-md-12">
                  <label className="labels">Education</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="education"
                    defaultValue
                  />
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-md-6">
                  <label className="labels">Country</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="country"
                    defaultValue
                  />
                </div>
              </div>
              <div className="mt-5 text-center">
                <button
                  className="btn btn-primary profile-button"
                  type="button"
                >
                  Edit Profile
                </button>
              </div>
            </div>
          </div>
          <div className="custom-card col-md-4">
            <div className="card-cont my-5 mx-4">
             <a href="http://"> <h3>My Notes</h3></a>
            </div>
            <div className="card-cont my-2 mx-4">
            <a href="http://"> <h3>My Quizes</h3></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
