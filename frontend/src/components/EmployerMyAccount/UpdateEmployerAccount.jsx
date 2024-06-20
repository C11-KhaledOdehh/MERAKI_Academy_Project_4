
import axios from "axios";
import React, { useState, useContext,useEffect } from "react";
import { TokenContext } from "../../App";

const UpdateEmployerAccount = ({employer, setEmployer,setIsUpdate}) => {
  const { token, userId } = useContext(TokenContext);
 const [companyName, setCompanyName] = useState(employer.companyName|| "");
  const [phoneNumber, setPhoneNumber] = useState(employer.phoneNumber|| "");
  const [password, setPassword] = useState("");
  const [city, setCity] = useState(employer.city|| "");
  const [website, setWebsite] = useState(employer.website|| "");
  const [aboutCompany, setAboutCompany] = useState(employer.aboutCompany|| "");
  const [weekends, setWeekends] = useState(employer.weekends || "");
  const [numberOfEmployees, setNumberOfEmployees] = useState(employer.numberOfEmployees|| "");
  const [ceo, setCeo] = useState(employer.ceo);
  const [industry, setIndustry] = useState(employer.industry|| "");
  const [workingHours, setWorkingHours] = useState(employer.workingHours|| "");
  const [companyLogo, setCompanyLogo] = useState(employer.companyLogo|| "");

  const EmployerUpdateMyAccount = () => {
    const header = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const update = {
      companyName:companyName,
      phoneNumber:phoneNumber,
        password:password,
        city:city,
        website:website,
        aboutCompany:aboutCompany,
        weekends:weekends,
        numberOfEmployees:numberOfEmployees,
        ceo:ceo,
        industry:industry,
        workingHours:workingHours,
        companyLogo:companyLogo
    };
    axios
      .put(`http://localhost:5000/employer/update/${userId}`, update, header)
      .then((result) => {
        console.log(result.data.info);
        setEmployer(result.data.info)
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
  
  return (
    <div>
      <input
        placeholder="company name"
        onChange={(e) => setCompanyName(e.target.value)}
        value={companyName}
      />
      <br />
      <input
        placeholder="industry"
        onChange={(e) => setIndustry(e.target.value)}
        value={industry}
      />
      <br />
      <input
        placeholder="city"
        onChange={(e) => setCity(e.target.value)}
        value={city}
      />
      <br />
      <input
        placeholder="phoneNumber"
        onChange={(e) => setPhoneNumber(e.target.value)}
        value={phoneNumber}
      />
      <br />
      <input
        placeholder="website"
        onChange={(e) => setWebsite(e.target.value)}
        value={website}
      />
      <br />
      <input
        placeholder="weekends"
        onChange={(e) => setWeekends(e.target.value)}
        value={weekends}
      />
      <br />
      <input
        placeholder="number of employees"
        onChange={(e) => setNumberOfEmployees(e.target.value)}
        value={numberOfEmployees}
      />
      <br />
      <input
        placeholder="CEO"
        onChange={(e) => setCeo(e.target.value)}
        value={ceo}
      />
      <br />
      <input
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <br />
      <input
        placeholder="working hours"
        onChange={(e) => setWorkingHours(e.target.value)}
        value={workingHours}
      />
      <br />
      <textarea
        placeholder="About company"
        onChange={(e) => setAboutCompany(e.target.value)}
        value={aboutCompany}
      />
      <br />
      <button onClick={()=>{
          EmployerUpdateMyAccount();
        setIsUpdate(false);
      }}>Update</button>
    </div>
  );
};

export default UpdateEmployerAccount;