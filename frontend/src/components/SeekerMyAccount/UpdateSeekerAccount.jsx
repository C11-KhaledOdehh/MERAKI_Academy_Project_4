import React, { useState, useContext } from "react";
import axios from "axios";
import { TokenContext } from "../../App";
import 'bootstrap/dist/css/bootstrap.min.css';

const UpdateSeekerAccount = ({ seeker, setSeeker, setIsUpdate }) => {
  const { token, userId } = useContext(TokenContext);
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [yearsOfExperience, setYearsOfExperience] = useState("");
  const [cv, setCv] = useState("");
  const [profilePicture, setProfilePicture] = useState("");
  const [education, setEducation] = useState("");
  const [image, setImage] = useState("");
  const [cvFile, setCvFile] = useState("");

  const UpdateMyAccount = (logoUrl, cvUrl) => {
    const header = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const update = {
      fullName: fullName || seeker.fullName,
      phoneNumber: phoneNumber || seeker.phoneNumber,
      password: password,
      yearsOfExperience: yearsOfExperience || seeker.yearsOfExperience,
      cv: cvUrl || seeker.cv,
      profilePicture: logoUrl || seeker.profilePicture,
      education: education || seeker.education,
    };
    axios
      .put(`http://localhost:5000/seeker/update/${userId}`, update, header)
      .then((result) => {
        console.log(result.data.info);
        setSeeker([result.data.info]);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  const uploadImage = () => {
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "khaledOdehCloud");
    data.append("cloud_name", "das0e3reo");

    fetch("https://api.cloudinary.com/v1_1/das0e3reo/image/upload", {
      method: "post",
      body: data,
    })
      .then((resp) => resp.json())
      .then((data) => {
        setImage(data.url);
        UpdateMyAccount(data.url, cv);
      })
      .catch((err) => console.log(err));
  };

  const uploadCv = () => {
    const data = new FormData();
    data.append("file", cvFile);
    data.append("upload_preset", "khaledOdehCloud");
    data.append("cloud_name", "das0e3reo");

    fetch("https://api.cloudinary.com/v1_1/das0e3reo/image/upload", {
      method: "post",
      body: data,
    })
      .then((resp) => resp.json())
      .then((data) => {
        setCvFile(data.url);
        UpdateMyAccount(profilePicture, data.url);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Update Any Field You Want!</h2>
      <form>
        <div className="row">
          <div className="col-md-6">
            <div className="form-group mb-3">
              <input
                type="text"
                className="form-control "
                placeholder="Full Name"
                onChange={(e) => setFullName(e.target.value)}
                value={fullName}
              />
            </div>
            <div className="form-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Phone Number"
                onChange={(e) => setPhoneNumber(e.target.value)}
                value={phoneNumber}
              />
            </div>
            <div className="form-group mb-3">
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </div>
            <div className="form-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Years Of Experience"
                onChange={(e) => setYearsOfExperience(e.target.value)}
                value={yearsOfExperience}
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Education"
                onChange={(e) => setEducation(e.target.value)}
                value={education}
              />
            </div>
            <div className="form-group mb-3">
              <label>Choose Your CV</label>
              <input
                type="file"
                className="form-control"
                onChange={(e) => setCvFile(e.target.files[0])}
              />
            </div>
            <div className="form-group mb-3">
              <label>Choose Your Profile Picture</label>
              <input
                type="file"
                className="form-control"
                onChange={(e) => setImage(e.target.files[0])}
              />
            </div>
          </div>
        </div>
        <div className="form-group row">
          <div className="col-sm-12 text-center">
            <button
              type="button"
              className="btn btn-primary mt-3"
              onClick={() => {
                uploadImage();
                uploadCv();
                setIsUpdate(false);
              }}
            >
              Update
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UpdateSeekerAccount;
