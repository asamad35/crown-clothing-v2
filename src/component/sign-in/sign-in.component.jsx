import React from "react";
import FormInput from "../../component/form-input/form-input.component";
import CustomButton from "../../component/custom-button/custom-button.components";

import { auth, signInWithGoogle } from "../../component/firebase/firebase.util";

import './sign-in.styles.scss';

class SignIn extends React.Component{
    constructor(){
        super()

        this.state = {
            email: '' ,
            password: ''
        }
    }

        handleSubmit = async e=>{
            e.preventDefault();

            const {email, password} = this.state;

            try{
                await auth.signInWithEmailAndPassword(email,password);
                this.setState({email: '', password: ''});
            }catch(error){
                console.log(error.message);
            }

        }
        handleChange = e=>{
            const {value, name} = e.target;
            this.setState({[name]:value})
        }

    render(){
        return(
            <div className="sign-in">
                <h2 className="title">I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput handleChange={this.handleChange} label='Email' type="email" name ='email' value = {this.state.email} autoComplete="section-email" required />
                    <FormInput handleChange={this.handleChange} label='Password' type="password" name ='password' value = {this.state.password} autoComplete="section-password" required />
                    <div className="buttons">
                    <CustomButton type="submit" >Sign In</CustomButton> 
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn >Sign In With Google</CustomButton> 
                    </div>
                </form>
            </div>
        )
    }
}
export default SignIn