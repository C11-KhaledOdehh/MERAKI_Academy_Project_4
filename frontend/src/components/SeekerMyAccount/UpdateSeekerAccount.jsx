
import React, { useState, useContext } from "react";
import axios from "axios";
import { TokenContext } from "../../App";

const UpdateSeekerAccount = ({seeker,setSeeker,setIsUpdate}) => {
    const { token, userId } = useContext(TokenContext);
    const [fullName, setFullName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [password, setPassword] = useState("");
    const [yearsOfExperience, setYearsOfExperience] = useState("");
    const [cv, setCv] = useState("");
    const [profilePicture, setProfilePicture] = useState("");
    const [education, setEducation] = useState("");
    const [image, setImage ] = useState("");
     const UpdateMyAccount = (logoUrl) => {
       const header = {
         headers: {
           Authorization: `Bearer ${token}`,
         },
       };
       const update = {
        fullName:fullName,
         phoneNumber:phoneNumber,
           password:password,
           yearsOfExperience:yearsOfExperience,
           cv:cv,
           profilePicture:logoUrl,
           education:education,
       };
       axios
         .put(`http://localhost:5000/seeker/update/${userId}`, update, header)
         .then((result) => {
           console.log(result.data.info);
           setSeeker([result.data.info])
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
        setImage(data.url)
      UpdateMyAccount(data.url);
      })
      .catch(err => console.log(err))
      }
     return (
       <div>
         <input
           placeholder="full Name"
           onChange={(e) => setFullName(e.target.value)}
           value={fullName}
         />
         <br />
         <input
           placeholder="phone Number"
           onChange={(e) => setPhoneNumber(e.target.value)}
           value={phoneNumber}
         />
                <br />
         <input
           placeholder="password"
           onChange={(e) => setPassword(e.target.value)}
           value={password}
         />
         <br />
         <input
           placeholder="years Of Experience"
           onChange={(e) => setYearsOfExperience(e.target.value)}
           value={yearsOfExperience}
         />
         <br />
         <input
           placeholder="cv"
           onChange={(e) => setCv(e.target.value)}
           value={cv}
         />
         <br />
         <input
           placeholder="profile Picture"
           onChange={(e) => setProfilePicture(e.target.value)}
           value={profilePicture}
         />
         <br />
         <input
           placeholder="education"
           onChange={(e) => setEducation(e.target.value)}
           value={education}
         />
         <br />
         <input type="file" onChange= {(e)=> setImage(e.target.files[0])}></input>
         <br />
         <button onClick={()=>{
             uploadImage();
           setIsUpdate(false);
         }}>Update</button>
       </div>
     );
   };
export default UpdateSeekerAccount