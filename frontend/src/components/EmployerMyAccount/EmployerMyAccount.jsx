import axios from "axios";
import React ,{ useEffect, useContext, useState }from 'react'
import { TokenContext } from "../../App";
import UpdateEmployerAccount from "./UpdateEmployerAccount";

const EmployerMyAccount = () => {
  const { token,userId} = useContext(TokenContext);
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

  
return (
  <div>
  {employer.map((elem,i)=>{
   return <div key={i}>
      <b>company Name : {elem.companyName}</b><br/>
      <b>phone Number : {elem.phoneNumber}</b><br/>
      <b>email : {elem.email}</b><br/>
      <b>city : {elem.city}</b><br/>
      <b>website : {elem.website}</b><br/>
      <b>email : {elem.aboutCompany}</b><br/>
      <b>number of employees : {elem.numberOfEmployees}</b><br/>
      <b>CEO : {elem.ceo}</b><br/>
      <b>industry : {elem.industry}</b><br/>
      <b>working hours : {elem.workingHours}</b><br/>
      <b>About company : {elem.companyLogo}</b><br/>

      {isUpdate ? <UpdateEmployerAccount  employer={employer}
        setEmployer={setEmployer}
        setIsUpdate={setIsUpdate}/>:<button onClick={()=>{
        setIsUpdate(true)
      }}>Update information</button>  }
    </div>
  })}

</div>
);
};

export default EmployerMyAccount;