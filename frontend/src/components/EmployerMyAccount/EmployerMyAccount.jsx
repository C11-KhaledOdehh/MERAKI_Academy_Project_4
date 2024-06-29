import axios from "axios";
import React ,{ useEffect, useContext, useState }from 'react'
import { TokenContext } from "../../App";
import UpdateEmployerAccount from "./UpdateEmployerAccount";

const EmployerMyAccount = () => {
  const { token} = useContext(TokenContext);
  const [employer, setEmployer] = useState([]);
  const [ isUpdate , setIsUpdate]=useState(false)
  const myAccount=()=>{
   
    const header = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    axios
    .get("http://localhost:5000/employer", header)
    .then((result) => {
      setEmployer(result.data.employer);
    })
    .catch((err) => {
      console.log("err", err);
    });
};

useEffect(() => {
  myAccount();
}, []);
if (!employer) {
  return <div></div>;
}
  
return (
  <div className="myAccount">
    {employer.map((elem, index) => (
      <div className="row mb-4" key={index}>
        <div className="col-md-4" >
          <img
            src={`${elem.companyLogo}`} 
            className="img-fluid rounded"
            alt="Company Logo"
            style={{ width: '200px', height: '200px'}}
          />
        </div>
        <div className="col-md-8">
          <div className="mb-2"><b>Company Name:</b> {elem.companyName}</div>
          <div className="mb-2"><b>Phone Number:</b> {elem.phoneNumber}</div>
          <div className="mb-2"><b>Email:</b> {elem.email}</div>
          <div className="mb-2"><b>City:</b> {elem.city}</div>
          <div className="mb-2"><b>Website:</b> {elem.website}</div>
          <div className="mb-2"><b>Number of Employees:</b> {elem.numberOfEmployees}</div>
          <div className="mb-2"><b>CEO:</b> {elem.ceo}</div>
          <div className="mb-2"><b>Industry:</b> {elem.industry}</div>
          <div className="mb-2"><b>Working Hours:</b> {elem.workingHours}</div>
          <div className="mb-2"><b>About Company:</b> {elem.aboutCompany}</div>
          {isUpdate ? (
            <UpdateEmployerAccount
              employer={employer}
              setEmployer={setEmployer}
              setIsUpdate={setIsUpdate}
            />
          ) : (
            <button className="btn btn-primary" onClick={() => setIsUpdate(true)}>
              Update Information
            </button>
          )}
        </div>
      </div>
    ))}
  </div>
);
};
export default EmployerMyAccount;