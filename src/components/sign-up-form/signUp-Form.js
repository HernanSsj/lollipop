import React, {useState, useEffect, useCallback} from "react"
import './signUp-Form-Style.css';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from 'react-loader-spinner'
import axios from 'axios'
import { Link, useHistory} from 'react-router-dom'
import {passwordCheck, nameCheck, emailCheck, checkComplete} from '../../utils/form-check'
import {inputErrorIcon, loginIcon, loginIconDisabled} from '../../utils/icons'

const SignUpForm = ()=>{
     let history= useHistory()
    const [data, setData] = useState({
       name: "",
       email: "",
       password: "",
       repeated_password: "",

    })
    const [error, setError] = useState({
        error: false,
        name_error: false,
        email_error: false,
        password_error: false,
        repeated_password_error: false,
        error_message: null
     })
    const [showPassword, SetShowPassword] = useState(false)
    const [completed, setCompleted] = useState(false)
    const [showCaptcha, setShowCaptcha] = useState(false)
    const [loading, setLoading] = useState(false)

    const fillEmail =  useCallback(e => {
        
        setData({...data, email: e.target.value})
      }, [data]);
    const fillName =  useCallback(e => {
        
        setData({...data, name: e.target.value})
      }, [data]);

    const fillPassword =  useCallback(e => {
        setData({...data, password: e.target.value})
       
      }, [data]);      
    const fillRepeatedPassword =  useCallback(e => {
        setData({...data, repeated_password: e.target.value})
       
      }, [data]); 
   

    const viewPassword = useCallback( e=>{
        SetShowPassword(!showPassword)
    },[showPassword])
  
 useEffect(()=> {

        passwordCheck(data, error,  setError)

    },[data.password, data.repeated_password])

  useEffect(()=>{

      nameCheck(data, error,  setError)
   
  }, [data.name])

  useEffect(()=>{
       
    emailCheck(data, error, setError)
     
  },[data.email])
  

  useEffect(()=>{
    checkComplete(data, error, setCompleted)
   
  }, [error])

    const signUp = async (data) =>{
   
        setLoading(true)
         axios.post("http://localhost:5000/auth/register", data).then((response)=>{
          setTimeout(function(){
            setLoading(false)
            history.push('/login')
        }, 2000);
        
       })
       .catch((error)=>{
        setLoading(false)
        setError({...error, error:true, email_error: true, error_message: "Email ya en uso"})
       })
      
    }
    
    return(
                <div className="register-container">

                    <div className="register-heading">
                        <h2>Crear una cuenta</h2>
                    </div>
                    <div className="register-input-box">

                        <input className="register-name-input" required={true} maxLength = "10" value={data.name}  onChange={fillName} autoFocus="autofocus"></input>
                        <label className="register-name-label">Nombre</label>
                        <span className={`${error.name_error ? "register-name-input-error " : "invisible"}`}>{inputErrorIcon}</span>
                        <input className="register-email-input" required={true} maxLength = "320" value={data.email} onChange={fillEmail}></input>
                        <label className="register-email-label">Email</label>
                        <span className={`${error.email_error ? "register-email-input-error " : "invisible"}`}>{inputErrorIcon}</span>
                        <input className="register-password-input"  type={"password"} required={true} maxLength = "16" value={data.password} onChange={fillPassword}></input>
                        <label className="register-password-label">Contraseña</label>
                        <span className={`${error.password_error ? "register-password-input-error " : "invisible"}`}>{inputErrorIcon}</span>
                        <input className="register-repeat-password-input" type={"password"} required={true} maxLength = "16" value={data.repeated_password} onChange={fillRepeatedPassword}></input>
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
                            <button onClick={()=>signUp(data)} disabled={completed ? false : true} >{completed ? loginIcon : loginIconDisabled}</button>
                            }
                    </div>
                    <div className="register-link-box">
                        <Link to={'/login'}><a href="#">¿Ya tienes una cuenta?</a> </Link>
                    </div>
                </div>   
    )
}

export default SignUpForm