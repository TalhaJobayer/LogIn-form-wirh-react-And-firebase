import React from 'react';
import './SignUp.css'
import {BsFillArrowRightCircleFill} from 'react-icons/bs'
import {FcGoogle} from 'react-icons/fc'
import {AiFillGithub} from 'react-icons/ai'

const SignUp = () => {
    return (
        <div>
            <div className="container">
	<div className="screen">
		<div className="screen__content">
			<form className="login">
				<div className="login__field">
					<i className="login__icon fas fa-user"></i>
					<input type="text" className="login__input" placeholder="Write your name"/>
				</div>
				<div className="login__field">
					<i className="login__icon fas fa-user"></i>
					<input type="email" className="login__input" placeholder="Write your Email"/>
				</div>
				<div className="login__field">
					<i className="login__icon fas fa-lock"></i>
					<input type="password" className="login__input" placeholder="Password"/>
				</div>
				<button className="button login__submit">
					<span className="button__text">Log In Now</span>
					<i className="button__icon fas fa-chevron-right">
                    <BsFillArrowRightCircleFill></BsFillArrowRightCircleFill>
                    
                    </i>
				</button>				
			</form>
			<div className="social-login">
				<h3>log in via </h3>
				<div className="social-icons">
					<FcGoogle></FcGoogle>
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
    );
};

export default SignUp;