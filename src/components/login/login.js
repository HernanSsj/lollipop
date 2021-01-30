import React, {useState, useEffect, useCallback} from "react"
import './login-style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash, faArrowRight, faCheck} from "@fortawesome/free-solid-svg-icons";
import {faTwitter, faGoogle, faFacebook} from "@fortawesome/free-brands-svg-icons";
import Checkbox from "react-custom-checkbox";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from 'react-loader-spinner'
import axios from 'axios'
import { useHistory} from "react-router"
import {Link} from 'react-router-dom'
const Login = ()=>{
    let history = useHistory()
    const [data, setData] = useState({
        email: "",
        password: ""

    })
    const [error, setError] = useState(true)
    const [showPassword, setShowPassword] = useState(false)
    const [stayOnline, setStayOnline] = useState(false)
    const [loading, setLoading] = useState(false)

    const fillEmail =  useCallback(e => {
        
        setData({...data, email: e.target.value})
        
      }, [data]);
    
    const fillPassword =  useCallback(e => {
        setData({...data, password: e.target.value})
        
      }, [data]);      

    
    const viewPassword = useCallback( e=>{
        setShowPassword(!showPassword)
    },[showPassword])
    const saveSession = useCallback( e=>{
        setStayOnline(!stayOnline)
    },[stayOnline])

    const authenticate = async (data) =>{
        console.log("antes de intentar login", data)
        setLoading(true)
         axios.post("http://localhost:5000/login", data, {withCredentials: true}).then((response)=>{
         if(response.status===200) {
            axios.get('http://localhost:5000/user', {withCredentials: true}).then((response)=>{
                response.data ? localStorage.setItem('user', JSON.stringify(response.data)) :  localStorage.removeItem('user')
                history.push("/app")
            })
           
         }
          
       })
       .catch(()=>{
        setLoading(false)
        setError(true)
       })
      
    }
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
                    <div className="login-heading">
                        <h2>Iniciar sesión</h2>
                    </div>
                    <div className="input-box">
                        <input className="username-input" required={true} maxLength = "128" value={data.email} onChange={fillEmail} autoFocus="autofocus"></input>
                        <label className="usr-label">Email</label>
                        <input className="password-input"  required={true} maxLength = "32" value={data.password} onChange={fillPassword} type={`${showPassword ? "text"  : "password"}`}></input>
                        <label className="pwd-label">Contraseña</label>
                        <span onClick={viewPassword}>{showPassword ? revealedPasswordIcon : invisiblePasswordIcon}</span>
                    </div>
                    <div className={"login-error-message-container"}>
                        &nbsp;
                        <span className={`${error ? "error-message " : "invisible"}`}>Usuario o contraseña incorrectos</span>
                    </div>
                    <div className="social-box">
                        <button className="twitter">{twitterIcon}</button>
                        <Link to='auth/google'>
                          <button className="google">{googleIcon}</button>
                        </Link>
                        
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
                            <button disabled={data.email && data.password ? false : true} onClick={()=>authenticate(data)}>{loginIcon}</button>
                            }
                    </div>
                    <div className="link-box">
                        <a href="www.google.com">¿Problemas para iniciar sesion?</a>
                        <a href="www.google.com">Crear una cuenta</a>
                    </div>
                </div>
        </section>
           
    )
}

export default Login