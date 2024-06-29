import React,{useContext} from 'react'
import RegisterSeeker from './RegisterSeeker'
import LoginSeeker from './LoginSeeker'
import RegisterEmployer from './RegisterEmployer'
import LoginEmployer from './LoginEmployer'
import './SeekerOrEmployer.css'
import { TokenContext } from "../../App";
const SeekerOrEmployer = () => {
  const { goToPageSeekerOrEmployer, setGoToPageSeekerOrEmployer } = useContext(TokenContext);
  return (
    <div className='SeekerOrEmployer'> 
    <button className='btn-Login' onClick={() =>{setGoToPageSeekerOrEmployer("registerSeeker");}}>Seeker</button>
      <button className='btn-Login' onClick={() =>setGoToPageSeekerOrEmployer("registerEmployer")  }>Employer</button>
      {goToPageSeekerOrEmployer=="registerSeeker"&&<RegisterSeeker/>}
      {goToPageSeekerOrEmployer=="registerEmployer"&&<RegisterEmployer/>}
      {goToPageSeekerOrEmployer=="LoginSeeker"&&<LoginSeeker/>}
      {goToPageSeekerOrEmployer=="LoginEmployer"&&<LoginEmployer/>}

      </div>
     
  )
}

export default SeekerOrEmployer