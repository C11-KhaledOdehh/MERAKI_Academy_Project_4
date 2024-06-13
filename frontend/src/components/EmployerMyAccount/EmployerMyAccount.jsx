import axios from "axios";
import React ,{ useEffect, useContext, useState }from 'react'
import { TokenContext } from "../../App";

const EmployerMyAccount = () => {
  const { token,userId} = useContext(TokenContext);
  const [employer, setEmployer] = useState([]);
  const myAccount=()=>{
   
    const header = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    
    axios
    .get("http://localhost:5000/employer", header)
    .then((result) => {
      console.log(result.data.employer);
      setEmployer(result.data.employer);
    })
    .catch((err) => {
      console.log("err", err);
    });
};

useEffect(() => {
  myAccount();
}, []);
const EmployerUpdateMyAccount=()=>{
  const header = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const update=
    {
      companyName:"odeh",
    phoneNumber:"0796585565",
      password:"1245678",
      city:"amman",
      website:"www.google.com",
      aboutCompany:"about company",
      weekends:"friday",
      numberOfEmployees:100,
      ceo:"khaled",
      industry:"IT",
      workingHours:"10AM - 5PM",
      companyLogo:"aaaa"
  }
  axios
  .put(`http://localhost:5000/employer/update/${userId}`,update, header)
  .then((result) => {
    console.log(result);
    myAccount(); })
  .catch((err) => {
    console.log("err", err);
  }); 
}
  
return (
  <div>
  {employer.map((elem,i)=>{
   return <div key={i}>
      <h1>company Name : {elem.companyName}</h1>
      <h1>phone Number : {elem.phoneNumber}</h1>
      <h1>email : {elem.email}</h1>
      
 
<button onClick={()=>{<div>
  <input placeholder="company name"/> <br />
  
  </div>
  EmployerUpdateMyAccount();
}}>Update information</button> 
    </div>
  })}
</div>
);
};

export default EmployerMyAccount;