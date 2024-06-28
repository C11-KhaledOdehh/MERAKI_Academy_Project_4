import React,{useState} from 'react'
import RegisterSeeker from './RegisterSeeker'
import LoginSeeker from './LoginSeeker'
import RegisterEmployer from './RegisterEmployer'
import LoginEmployer from './LoginEmployer'
import './SeekerOrEmployer.css'
const SeekerOrEmployer = () => {
  const [goToPageSeekerOrEmployer, setGoToPageSeekerOrEmployer] = useState("")
  return (
    <div className='l'> <button onClick={() =>{setGoToPageSeekerOrEmployer("registerSeeker");}}>Seeker</button>
      <button onClick={() =>setGoToPageSeekerOrEmployer("registerEmployer")  }>Employer</button>
      {goToPageSeekerOrEmployer=="registerSeeker"&&<RegisterSeeker/>}
      {goToPageSeekerOrEmployer=="registerEmployer"&&<RegisterEmployer/>}
      {goToPageSeekerOrEmployer=="LoginSeeker"&&<LoginSeeker/>}
      {goToPageSeekerOrEmployer=="LoginEmployer"&&<LoginEmployer/>}

      </div>
     
  )
}

export default SeekerOrEmployer