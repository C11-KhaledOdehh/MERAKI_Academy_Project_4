
import axios from "axios";
import React, { useState, useContext } from "react";
import { TokenContext } from "../../App";

const UpdateEmployerAccount = ({setEmployer,setIsUpdate}) => {
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
        companyLogo:logoUrl
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
      <input type="file" onChange= {(e)=> setImage(e.target.files[0])}></input>
      <br />
     <button onClick={()=>{
        uploadImage()
          
        setIsUpdate(false);
      }}>Update</button>

    
    </div>
  );
};

export default UpdateEmployerAccount;