
import axios from "axios";
import React, { useState, useContext } from "react";
import { TokenContext } from "../../App";

const UpdateEmployerAccount = ({employer,setEmployer,setIsUpdate}) => {
  const { token, userId } = useContext(TokenContext);
 const [companyName, setCompanyName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [city, setCity] = useState("");
  const [website, setWebsite] = useState("");
  const [aboutCompany, setAboutCompany] = useState("");
  const [weekends, setWeekends] = useState("");
  const [numberOfEmployees, setNumberOfEmployees] = useState("");
  const [ceo, setCeo] = useState("");
  const [industry, setIndustry] = useState("");
  const [workingHours, setWorkingHours] = useState("");
  const [companyLogo, setCompanyLogo] = useState("");
  const [image, setImage ] = useState("");
  const EmployerUpdateMyAccount = (logoUrl) => {
    const header = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const update = {
      companyName:companyName ||employer.companyName,
      phoneNumber:phoneNumber||employer.phoneNumber,
        password:password,
        city:city||employer.city,
        website:website||employer.website,
        aboutCompany:aboutCompany||employer.aboutCompany,
        weekends:weekends||employer.weekends,
        numberOfEmployees:numberOfEmployees||employer.numberOfEmployees,
        ceo:ceo||employer.ceo,
        industry:industry||employer.industry,
        workingHours:workingHours||employer.workingHours,
        companyLogo:logoUrl||employer.companyLogo
    };
    console.log(token);
    axios
      .put(`http://localhost:5000/employer/update/${userId}`, update, header)
      .then((result) => {
        console.log(result.data.info);
        setEmployer([result.data.info])
        console.log(update);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
  const uploadImage = () => {
    const data = new FormData()
    data.append("file", image)
    data.append("upload_preset", "khaledOdehCloud")
    data.append("cloud_name","das0e3reo")
    fetch("  https://api.cloudinary.com/v1_1/das0e3reo/image/upload",{
    method:"post",
    body: data
    })
    .then(resp => resp.json())
    .then(data => {
    setCompanyLogo(data.url)
    EmployerUpdateMyAccount(data.url);
    })
    .catch(err => console.log(err))
    }
  
    return (
      <div className="container mt-4">
        <h2 className="mb-4">Update Any Field You Want!</h2>
        <div className="row">
          <div className="col-md-6">
            <div className="form-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Company Name"
                onChange={(e) => setCompanyName(e.target.value)}
                value={companyName}
              />
            </div>
            <div className="form-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Industry"
                onChange={(e) => setIndustry(e.target.value)}
                value={industry}
              />
            </div>
            <div className="form-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="City"
                onChange={(e) => setCity(e.target.value)}
                value={city}
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
                type="text"
                className="form-control"
                placeholder="Website"
                onChange={(e) => setWebsite(e.target.value)}
                value={website}
              />
            </div>
            <div className="form-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Weekends"
                onChange={(e) => setWeekends(e.target.value)}
                value={weekends}
              />
            </div>
            <div className="form-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Number of Employees"
                onChange={(e) => setNumberOfEmployees(e.target.value)}
                value={numberOfEmployees}
              />
            </div>
            <div className="form-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="CEO"
                onChange={(e) => setCeo(e.target.value)}
                value={ceo}
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
                placeholder="Working Hours"
                onChange={(e) => setWorkingHours(e.target.value)}
                value={workingHours}
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group mb-3">
              <textarea
                className="form-control"
                placeholder="About Company"
                onChange={(e) => setAboutCompany(e.target.value)}
                value={aboutCompany}
              />
            </div>
            <div className="form-group mb-3">
              <label>Choose Company Logo</label>
              <input
                type="file"
                className="form-control-file"
                onChange={(e) => setImage(e.target.files[0])}
              />
            </div>
            <div className="form-group row">
              <div className="col-sm-12 text-center">
                <button
                  type="button"
                  className="btn btn-primary mt-3"
                  onClick={() => {
                    uploadImage();
                    setIsUpdate(false);
                  }}
                >
                  Update
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default UpdateEmployerAccount;