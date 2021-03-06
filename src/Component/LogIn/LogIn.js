import React, { useState } from 'react';
import './LogIn.css'
import {BsFillArrowRightCircleFill} from 'react-icons/bs'
import {FcGoogle} from 'react-icons/fc'
import {AiFillGithub} from 'react-icons/ai'
import { useNavigate } from "react-router-dom";
import { getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import app from '../../FireBAse.init';

const LogIn = () => {
	let navigate=useNavigate();
	    // =========== log in with email,password============
		const auth = getAuth(app);
		const [validated, setValidated] = useState(false);
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
		
		
	 
	}
	//  ============== On submit====================
	
	  const perventLoad=(event)=>{
		signInWithEmailAndPassword(auth, email, password)
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
	//    signInWithEmailAndPassword===========end


		// this is the way to prevent to go in firebase showed at module 57.5(7.18 min)
		// ========================================================== 
		// const form = event.currentTarget;
		// if (form.checkValidity() === false) {
		//   event.preventDefault();
		//   event.stopPropagation();
		//   return
		// }
	
		// setValidated(true);
		// and saerch how to do this at react bootsrap/form/validation
		// ========================================================== 

		  console.log(email,password);
		event.preventDefault();
		// loader================================
		setSubmitting(true);
	
	   setTimeout(() => {
		 setSubmitting(false);
	   }, 3000)
	   setEmail('')
	   setPassword('')
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
	 // 
    return (
        <div>
            <div>
            <div className="container">
	<div className="screen">
		<div className="screen__content">
			<form  onSubmit={  perventLoad} className="login2">
				
				<div className="login__field">
					<i className="login__icon fas fa-user"></i>
					<input onBlur={handleEmail} type="email" className="login__input" placeholder="Write your Email" required/>
				</div>
				<div className="login__field">
					<i className="login__icon fas fa-lock"></i>
					<input onBlur={handlePassword} type="password" className="login__input" placeholder="Password" required/>
				</div>
				<button type="submit"  className="button login__submit">
					<span  className="button__text">Log In Now</span>
					<i className="button__icon fas fa-chevron-right">
                    <BsFillArrowRightCircleFill></BsFillArrowRightCircleFill>
                    
                    </i>
				</button>
				<div>
                    <small className='navigateLogIN'>Did't have an Account?<span onClick={()=>{navigate('/')}}> Sign Up</span></small>
                    
                    </div>				
			</form>
			<div className="social-login">
				<h3>log in via </h3>
				<div className="social-icons">
					<FcGoogle onClick={handleGooglesignUp}></FcGoogle>
                    <AiFillGithub></AiFillGithub>
				</div>
			</div>
		</div>
		<div className="screen__background">
			<span className="screen__background__shape screen__background__shape4"></span>
			<span className="screen__background__shape screen__background__shape3"></span>		
			<span className="screen__background__shape screen__background__shape2"></span>
			<span className="screen__background__shape screen__background__shape1"></span>
		</div>		
	</div>
</div>
        </div>
        </div>
    );
};

export default LogIn;