import React, {useState, useEffect, useCallback} from "react"
import './signUp-Form-Style.css';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from 'react-loader-spinner'
import axios from 'axios'
import { Link, useHistory} from 'react-router-dom'
import {passwordCheck, nameCheck, emailCheck, checkComplete} from '../../utils/form-check'
import {inputErrorIcon, loginIcon, loginIconDisabled} from '../../utils/icons'
import { useDispatch, useSelector } from "react-redux";
import  {fillName, fillEmail, fillPassword, fillRepeatedPassword, toggleShowPassword, toggleLoading, setError, setCompleted} from '../../actions/signup'

const SignUpForm = ()=>{

     let history= useHistory()
     const dispatch = useDispatch()
     const signupFormState = useSelector((state)=>state.signupForm)
     const {email, name, password, repeated_password, showCaptcha, loading, showPassword, error, completed} = signupFormState;

    useEffect(()=> {

            passwordCheck(password, repeated_password, error,  setError, dispatch)

        },[password, repeated_password])

      useEffect(()=>{

          nameCheck(name, error,  setError, dispatch)
      
      }, [name])

      useEffect(()=>{
          
        emailCheck(email, error, setError, dispatch)
        
      },[email])
      

    useEffect(()=>{

        checkComplete(name, email, password, repeated_password, error, setCompleted, dispatch)
      
      }, [error])

    const signUp = async (data) =>{
   
        dispatch(toggleLoading())
         axios.post("http://localhost:5000/auth/register", data).then((response)=>{
          setTimeout(function(){
            dispatch(toggleLoading())
            history.push('/login')
        }, 2000);
        
       })
       .catch((error)=>{
        setTimeout(function(){
          dispatch(toggleLoading())
          dispatch(setError({error:true, email_error: true, error_message: "Email ya en uso"}))
          console.log(error)
      }, 2000);
       
       })
      
    }
    console.log(signupFormState)
    
    return(
                <div className="register-container">

                    <div className="register-heading">
                        <h2>Crear una cuenta</h2>
                    </div>
                    <div className="register-input-box">

                        <input className="register-name-input" required={true} maxLength = "10" value={name}  onChange={(e)=>dispatch(fillName(e.target.value))} autoFocus="autofocus"></input>
                        <label className="register-name-label">Nombre</label>
                        <span className={`${error.name_error ? "register-name-input-error " : "invisible"}`}>{inputErrorIcon}</span>
                        <input className="register-email-input" required={true} maxLength = "320" value={email} onChange={(e)=>dispatch(fillEmail(e.target.value))}></input>
                        <label className="register-email-label">Email</label>
                        <span className={`${error.email_error ? "register-email-input-error " : "invisible"}`}>{inputErrorIcon}</span>
                        <input className="register-password-input"  type={"password"} required={true} maxLength = "16" value={password} onChange={(e)=>dispatch(fillPassword(e.target.value))}></input>
                        <label className="register-password-label">Contraseña</label>
                        <span className={`${error.password_error ? "register-password-input-error " : "invisible"}`}>{inputErrorIcon}</span>
                        <input className="register-repeat-password-input" type={"password"} required={true} maxLength = "16" value={repeated_password} onChange={(e)=>dispatch(fillRepeatedPassword(e.target.value))}></input>
                        <label className="register-repeat-password-label">Repetir Contraseña</label>
                        <span className={`${error.repeated_password_error ? "register-repeated-password-input-error" : "invisible"}`}>{inputErrorIcon}</span>
                        
                    </div>
                    <div className={"register-error-container"}>
                        &nbsp;
                        <span className={`${error.error ? "register-error-message " : "invisible"}`}>{error.error_message}</span>
                    </div>
                  {/* //Implementar despues */}
                    {/* <div className={`${showCaptcha ? "register-captcha-container" : "invisible"}`}>
                      <ReCAPTCHA
                          sitekey="6LcJKy4aAAAAAKpFdm41RU6VXS0TKGCFzonVjNO1"
                          onChange={(value)=>console.log("ReCAPTCHA", value)}
                            />
                    </div>  */}
                    {/* <div className={`${showCaptcha ? "invisible" : "register-buttom-box"}`}> */}
                    <div className={"register-buttom-box"}>
                            {loading?
                            <Loader type="Rings" color="#84cdfa"height={81} width={81}/>:
                            <button onClick={()=>signUp({name, email, password, repeated_password})} disabled={completed ? false : true} >{completed ? loginIcon : loginIconDisabled}</button>
                            }
                    </div>
                    <div className="register-link-box">
                        <Link to={'/login'}><a href="#">¿Ya tienes una cuenta?</a> </Link>
                    </div>
                </div>   
    )
}

export default SignUpForm