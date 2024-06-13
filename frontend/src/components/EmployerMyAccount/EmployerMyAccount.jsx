import React from 'react'

const EmployerMyAccount = () => {
  const myAccount=()=>{
    axios
    .get("http://localhost:5000/job")
    .then((result) => {
     
   setJob(result.data.jobs)
   
    })
    .catch((err) => {
      console.log("err", err);
    });
};
useEffect(() => {
Job();
}, []);

  
  return (
    <div>EmployerMyAccount</div>
  )
}

export default EmployerMyAccount