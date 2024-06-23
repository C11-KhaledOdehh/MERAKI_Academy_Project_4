import React, { useState, useContext } from "react";
import axios from "axios";
import { TokenContext } from "../../App";

const UpdateSeekerAccount = ({setSeeker,setIsUpdate}) => {
    const { token, userId } = useContext(TokenContext);
    const [fullName, setFullName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [password, setPassword] = useState("");
    const [yearsOfExperience, setYearsOfExperience] = useState("");
    const [cv, setCv] = useState("");
    const [profilePicture, setProfilePicture] = useState("");
    const [education, setEducation] = useState("");
    const [image, setImage ] = useState("");
    const [cvFile, setCvFile] = useState("");

     const UpdateMyAccount = (logoUrl,cvUrl) => {
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
           cv:cvUrl,
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
      const uploadCv = () => {
        const data = new FormData()
        data.append("file", cvFile)
        data.append("upload_preset", "khaledOdehCloud")
        data.append("cloud_name","das0e3reo")
        fetch("  https://api.cloudinary.com/v1_1/das0e3reo/cv/upload",{
        method:"post",
        body: data
        })
        .then(resp => resp.json())
        .then(data => {
          setCv(data.url)
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
         <b>cv</b><input type="file" onChange= {(e)=> setCvFile(e.target.files[0])}></input>
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
        <b>img</b> <input type="file" onChange= {(e)=> setImage(e.target.files[0])}></input>
         <br />
         <button onClick={()=>{
             uploadImage();
             uploadCv();
           setIsUpdate(false);
         }}>Update</button>
       </div>
     );
   };
export default UpdateSeekerAccount