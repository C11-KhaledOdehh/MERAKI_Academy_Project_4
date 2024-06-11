import NavBar  from './components/NavBar/NavBar'
import RegisterSeeker from './components/RegisterSeeker/Register'
import LoginSeeker from './components/LoginSeeker/Login'
import LoginEmployer from './components/LoginEmployer/Login'
import RegisterEmployer from './components/RegisterEmployer/Register'
import './App.css'

function App() {

  return (
    
   <div>
    <NavBar/>
    <RegisterSeeker/>
    <LoginSeeker/>
    <RegisterEmployer/>
    <LoginEmployer/></div>
 
  )
}

export default App
