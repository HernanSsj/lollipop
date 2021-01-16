import React, {useState, useEffect, useCallback} from "react"
import './signUp-style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash, faArrowRight} from "@fortawesome/free-solid-svg-icons";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from 'react-loader-spinner'
import ReCAPTCHA from "react-google-recaptcha";

const SignUp = ()=>{
     
    const [data, setData] = useState({
    name: "",
       email: "",
       password: ""

    })
    const [error, setError] = useState()
    const [showPassword, SetShowPassword] = useState(false)
    const [stayOnline, SetstayOnline] = useState(false)
    const [loading, SetLoading] = useState(false)

    const fillEmail =  useCallback(e => {
        
        setData({...data, email: e.target.value})
      }, [data]);
    
    const fillPassword =  useCallback(e => {
        setData({...data, password: e.target.value})
        console.log(data.password)
      }, [data]);      

    const fillError =  ()=> setError(true)
    

    const viewPassword = useCallback( e=>{
        SetShowPassword(!showPassword)
    },[showPassword])
    const saveSession = useCallback( e=>{
        SetstayOnline(!stayOnline)
    },[stayOnline])
    const authenticate = useCallback(data =>{
        //Dispatch auth
        //To do
        try {
           SetLoading(!loading)
         } catch (error) {
             fillError()
         }
        }
      ,[data]);
    useEffect(()=>console.log("EStado de recordar pass",stayOnline),[stayOnline])
    const revealedPasswordIcon = <FontAwesomeIcon icon={faEye} />
    const invisiblePasswordIcon = <FontAwesomeIcon icon={faEyeSlash}/>
    const loginIcon = <FontAwesomeIcon icon={faArrowRight} size={"3x"} color={`${data.user && data.password ? "#F9F9F9"  : "#EDEDED"}`}/>
    return(
        <section className="register-form">
                <div className="register-container">

                    <div className="register-heading">
                        <h2>Crear una cuenta</h2>
                    </div>
                    <div className="register-input-box">
                        <input className="register-name-input" required={true} maxLength = "10" value={data.user} onChange={fillEmail} autoFocus="autofocus"></input>
                        <label className="register-name-label">Nombre</label>
                        <input className="register-email-input" required={true} maxLength = "20" value={data.user} onChange={fillEmail}></input>
                        <label className="register-email-label">Email</label>
                        <input className="register-password-input" required={true} maxLength = "16" value={data.user} onChange={fillEmail}></input>
                        <label className="register-password-label">Contraseña</label>
                        <input className="register-repeat-password-input" required={true} maxLength = "16" value={data.user} onChange={fillEmail}></input>
                        <label className="register-repeat-password-label">Repetir Contraseña</label>
                    </div>
                    <div className={`${error ? "error-message " : "invisible"}`}>
                        <span>Parece que este email ya esta en uso</span>
                    </div>
                    {/* <ReCAPTCHA
                        sitekey="6LcJKy4aAAAAAKpFdm41RU6VXS0TKGCFzonVjNO1"
                        onChange={fillEmail}
                          /> */}
                    <div className="register-buttom-box">
                            {loading?
                            <Loader type="Rings" color="#84cdfa"height={81} width={81}/>:
                            <button disabled={data.email ? false : true} onClick={authenticate}>{loginIcon}</button>
                            }
                    </div>
                    <div className="register-link-box">
                        <a href="www.google.com">¿Ya tienes una cuenta?</a>
                    </div>
                </div>
        </section>
           
    )
}

export default SignUp