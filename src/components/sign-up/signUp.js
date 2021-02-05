import React, {useState, useEffect, useCallback} from "react"
import './signUp-style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash, faArrowRight, faExclamationTriangle} from "@fortawesome/free-solid-svg-icons";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from 'react-loader-spinner'
import axios from 'axios'
import { Link, useHistory} from 'react-router-dom'

const SignUp = ()=>{
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
    
   const passwordTest = (password) =>{

     if(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,16}$/.test(password)) return false

     return true
   }
useEffect(()=> {

        if(data.password ){
            if(data.password.length<8){

                setError({...error, error:true, password_error: true, error_message: "Debe contener entre 8 y 16 caracteres"})

            }else if(passwordTest(data.password)){
                
                setError({...error, error:true, password_error: true, error_message: "Utilice numeros simbolos y mayusculas"})

            }else if(data.repeated_password){

                if(data.password !== data.repeated_password){

                    setError({...error, error:true, repeated_password_error: true, password_error:true, error_message: "Las contraseñas no coinciden"})

                }else{

                    setError({...error, error:false, password_error: false, repeated_password_error: false, error_message: null})
                }
            }else{
                setError({...error, error:false, password_error: false, repeated_password_error: false, error_message: null})
            }
        }else{
            setError({...error, error:false, password_error: false, error_message: null})
        }
    },[data.password, data.repeated_password])

  useEffect(()=>{
      if(data.name){
        if(data.name.length<3 || data.name.length>10 ){

            setError({...error, error:true, name_error: true, error_message: "Debe contener entre 3 y 10 caracteres"})
             
        }else if (/\s/.test(data.name)) {
            setError({...error, error:true, name_error: true, error_message: "No debe contener espacios"})
        }else{
            setError({...error, error:false, name_error: false, error_message: null})
        }
      }else{
        setError({...error, error:false, name_error: false, error_message: null})
      }
   
  }, [data.name])

  useEffect(()=>{
      if(data.email){
        if(/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(data.email)){
            setError({...error, error:false, email_error: false, error_message: null})
          }else{
            setError({...error, error:true, email_error: true, error_message: "Ingrese un email valido"})
          }
      }else{
        setError({...error, error:false, email_error: false, error_message: null})
      }
     
  },[data.email])
  

  useEffect(()=>{
    if(error.name_error || error.email_error || error.password_error || error.repeated_password_error){
      setCompleted(false)
    }else{
      if(data.name && data.email && data.password && data.repeated_password){
        setCompleted(true)
      }
      
    }
   
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
    const inputErrorIcon = <FontAwesomeIcon icon={faExclamationTriangle} color={"#BE1E37"}/>
    const loginIcon = <FontAwesomeIcon icon={faArrowRight} size={"3x"} color={`${data.user && data.password ? "#F9F9F9"  : "#EDEDED"}`}/>
    return(
        <section className="register-form">
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
                            <button onClick={()=>signUp(data)} disabled={completed ? false : true} >{loginIcon}</button>
                            }
                    </div>
                    <div className="register-link-box">
                        <Link to={'/login'}><a href="#">¿Ya tienes una cuenta?</a> </Link>
                    </div>
                </div>
        </section>
           
    )
}

export default SignUp