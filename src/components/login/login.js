import React, {useState, useEffect, useCallback} from "react"
import './login-style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash, faArrowRight, faCheck} from "@fortawesome/free-solid-svg-icons";
import {faTwitter, faGoogle, faFacebook} from "@fortawesome/free-brands-svg-icons";
import Checkbox from "react-custom-checkbox";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from 'react-loader-spinner'

const Login = ()=>{
     
    const [data, setData] = useState({
        user: "",
        password: ""

    })
    const [error, setError] = useState()
    const [showPassword, SetShowPassword] = useState(false)
    const [stayOnline, SetstayOnline] = useState(false)
    const [loading, SetLoading] = useState(false)

    const fillUSer =  useCallback(e => {
        
        setData({...data, user: e.target.value})
        console.log(data.user)
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
    const twitterIcon = <FontAwesomeIcon icon={faTwitter} size={"2x"} color={"#FFFFFF"}/>
    const googleIcon = <FontAwesomeIcon icon={faGoogle} size={"2x"} color={"#000000"}/>
    const facebookIcon = <FontAwesomeIcon icon={faFacebook} size={"2x"} color={"#FFFFFF"}/>
    const stayOnlineIcon = <FontAwesomeIcon icon={faCheck} color={"#F9F9F9"}/>
    return(
        <section className="login-form">
                <div className="container">
                    <div className="heading">
                        <h2>Iniciar sesión</h2>
                    </div>
                    <div className="input-box">
                        <input className="username-input" required={true} maxLength = "16" value={data.user} onChange={fillUSer} autofocus="autofocus"></input>
                        <label className="usr-label">Usuario</label>
                        <input className="password-input"  required={true} maxLength = "32" value={data.password} onChange={fillPassword} type={`${showPassword ? "text"  : "password"}`}></input>
                        <label className="pwd-label">Contraseña</label>
                        <span onClick={viewPassword}>{showPassword ? revealedPasswordIcon : invisiblePasswordIcon}</span>
                    </div>
                    <div className={`${error ? "error-message " : "invisible"}`}>
                        <span>Tu usuario o contraseña son incorrectos</span>
                    </div>
                    <div className="social-box">
                        <button className="twitter">{twitterIcon}</button>
                        <button className="google">{googleIcon}</button>
                        <button className="facebook">{facebookIcon}</button>
                    </div>
                    <div className="check">
                        <Checkbox
                        icon={
                            <div
                            style={{
                              display: "flex",
                              flex: 1,
                              backgroundColor: "#84cdfa",
                              borderRadius: "5px"
                            }}
                          >{stayOnlineIcon}
                          </div>}
                            name="my-input"
                            checked={false}
                            onChange={saveSession}
                            borderColor="#EDEDED"
                            borderRadius="5px"
                            style={{ cursor: "pointer" }}
                            labelStyle={{ marginLeft: 5, userSelect: "none" }}
                            label="Permanecer conectado"
                        />
                    </div>
                    <div className="buttom-box">
                            {loading?
                            <Loader type="Rings" color="#84cdfa"height={81} width={81}/>:
                            <button disabled={data.user && data.password ? false : true} onClick={authenticate}>{loginIcon}</button>
                            }
                    </div>
                    <div className="link-box">
                        <a href="www.google.com">¿Tienes problemas para iniciar sesion?</a>
                        <a href="www.google.com">Crear una cuenta</a>
                    </div>
                </div>
        </section>
           
    )
}

export default Login