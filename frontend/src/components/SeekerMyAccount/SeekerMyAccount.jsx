import axios from "axios";
import React ,{ useEffect, useContext, useState }from 'react'
import UpdateSeekerAccount from "./UpdateSeekerAccount";
import { TokenContext } from "../../App";
const SeekerMyAccount = () => {
    const { token,userId} = useContext(TokenContext);
    const [seeker, setSeeker] = useState([]);
    const [ isUpdate , setIsUpdate]=useState(false)
    const myAccount=()=>{
     
      const header = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      
      axios
      .get("http://localhost:5000/seeker", header)
      .then((result) => {
        console.log(result.data.seeker);
        setSeeker(result.data.seeker);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
  
  useEffect(() => {
    myAccount();
  }, []);
   if (!seeker) {
    return <div></div>;
  }
     
  return (
    <div>
     {seeker.map((elem,i)=>{
     return <div key={i}>
        <b>Full Name : {elem.fullName}</b><br/>
        <b>phone Number : {elem.phoneNumber}</b><br/>
        <b>email : {elem.email}</b><br/>
        <b>years Of Experience : {elem.yearsOfExperience}</b><br/>
        <b>cv : {elem.cv}</b><br/>
        <b>email : {elem.aboutCompany}</b><br/>
        <b>number of employees : {elem.numberOfEmployees}</b><br/>
        <b>profile Picture : {elem.profilePicture}</b><br/>
        <b>education : {elem.education}</b><br/>
  
      {isUpdate ? <UpdateSeekerAccount  seeker={seeker}
          setSeeker={setSeeker}
          setIsUpdate={setIsUpdate}/>:<button onClick={()=>{
          setIsUpdate(true)
        }}>Update information</button>  } 
      </div>
    })}
   
  </div>
  );
  };
export default SeekerMyAccount