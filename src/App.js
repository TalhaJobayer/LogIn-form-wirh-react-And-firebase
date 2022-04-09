
import './App.css';
import MainBody from '../src/Component/MainBody/MainBody';
import { Route, Router, Routes } from 'react-router-dom';
import SignUp from './Component/SignUp/SignUp';
import LogIn from './Component/LogIn/LogIn';

function App() {
  return (
    <div className="App">
     
      <MainBody></MainBody>
      <Routes>
        <Route path='/signUp' element={<SignUp></SignUp>}></Route>  
        <Route path='/logIn' element={<LogIn></LogIn>}></Route>  
      </Routes>
    </div>
  );
}

export default App;
