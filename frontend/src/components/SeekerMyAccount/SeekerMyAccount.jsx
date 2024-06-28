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
    <div className="jobDetails">
      {seeker.map((elem, i) => (
        <div className="row mb-4" key={i}>
          <div className="col-md-4">
            <img
              src={`${elem.profilePicture}`}
              className="img-fluid rounded"
              alt="Profile Pic"
              style={{ width: '200px', height: '200px' }}
            />
          </div>
          <div className="col-md-6">
            <div className="mb-2"><b>Full Name:</b> {elem.fullName}</div>
            <div className="mb-2"><b>Phone Number:</b> {elem.phoneNumber}</div>
            <div className="mb-2"><b>Email:</b> {elem.email}</div>
            <div className="mb-3">
              <b>CV:</b> <a href={`${elem.cv}`} target="_blank" rel="noopener noreferrer">Download CV</a>
            </div>
            <div className="mb-3"><b>Education:</b> {elem.education}</div>
            <div className="mb-3"><b>Years Of Experience:</b> {elem.yearsOfExperience}</div>
            {isUpdate ? (
              <UpdateSeekerAccount
                seeker={seeker}
                setSeeker={setSeeker}
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
export default SeekerMyAccount