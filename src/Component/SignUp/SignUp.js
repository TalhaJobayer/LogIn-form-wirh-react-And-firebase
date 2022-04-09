import React from 'react';
import './SignUp.css'
import {BsFillArrowRightCircleFill} from 'react-icons/bs'
import {FcGoogle} from 'react-icons/fc'
import {AiFillGithub} from 'react-icons/ai'
import { getAuth, signInWithPopup, GoogleAuthProvider,createUserWithEmailAndPassword } from "firebase/auth";
import app from '../../FireBAse.init';
import { useState } from 'react';




const SignUp = () => {
    // =========== log in with email,password============
    const auth = getAuth(app);
    const [email, setEmail]=useState('')
    const [password, setPassword]=useState('')
    const [name, setName]=useState('')
    const [submitting, setSubmitting] = useState(false);
    const handleEmail=(event)=>{
        setEmail(event.target.value)
    }
    const handlePassword=(event)=>{
        setPassword(event.target.value)
    }
    const handleName=(event)=>{
        setName(event.target.value)
    }
    
const handlesubmit=()=>{
    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
    // ...
  })
  .catch((error) => {
    
    console.log(error);
    // ..
  });
 
}
//  ============== On submit====================
  const perventLoad=(event)=>{
      console.log(email,password);
    event.preventDefault();
    setSubmitting(true);

   setTimeout(() => {
     setSubmitting(false);
   }, 3000)
  }
   
// ==============Google Sign in=================

const GoogleProvider = new GoogleAuthProvider();


 const handleGooglesignUp=()=>{
    signInWithPopup(auth, GoogleProvider)
    .then((result) => {
      const user = result.user;
      console.log(user);
      // ...
    }).catch((error) => {
      
      console.log(error);
    });
 }
 // ==============Google Sign in=================
    return (
        <div>
            {/* preloader======================== */}
            {submitting &&
       <div>Submtting Form...</div>
     }
      {/* preloader======================== */}
            <div className="container">
	<div className="screen">
		<form onSubmit={perventLoad} className="screen__content">
			<div className="login" >
				<div className="login__field">
					<i className="login__icon fas fa-user"></i>
					<input onBlur={handleName} type="text" className="login__input" placeholder="Write your name"/>
				</div>
				<div className="login__field">
					<i className="login__icon fas fa-user"></i>
					<input onBlur={handleEmail} type="email" className="login__input" placeholder="Write your Email"/>
				</div>
				<div className="login__field">
					<i className="login__icon fas fa-lock"></i>
					<input onBlur={handlePassword} type="password" className="login__input" placeholder="Password"/>
				</div>
				<button onClick={handlesubmit} className="button login__submit">
					<span    className="button__text">Sign Up Now</span>
					<i className="button__icon fas fa-chevron-right">
                    <BsFillArrowRightCircleFill></BsFillArrowRightCircleFill>
                    
                    </i>
				</button>				
			</div>
			<div className="social-login">
				<h3>log in via </h3>
				<div className="social-icons">
					<FcGoogle onClick={handleGooglesignUp}></FcGoogle>
                    <AiFillGithub></AiFillGithub>
				</div>
			</div>
		</form>
		<div className="screen__background">
			<span className="screen__background__shape screen__background__shape4"></span>
			<span className="screen__background__shape screen__background__shape3"></span>		
			<span className="screen__background__shape screen__background__shape2"></span>
			<span className="screen__background__shape screen__background__shape1"></span>
		</div>		
	</div>
</div>
        </div>
    );
};

export default SignUp;