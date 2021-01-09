import React, {useState, useEffect, useCallback} from "react"
import './login-style.css';
import logo from '../../images/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Login = ()=>{
     
    const [data, setData] = useState({
        user: "",
        password: ""

    })
    const [error, setError] = useState(false)
    const [showPassword, SetShowPassword] = useState(false)

    const fillUSer =  useCallback(e => {
        
        setData({...data, user: e.target.value})
        console.log(data.user)
      }, [data]);
    
    const fillPassword =  useCallback(e => {
        setData({...data, password: e.target.value})
        console.log(data.password)
      }, [data]);      

    const fillError =  useCallback(error => {
        setError(true)
      }, [error]);    

    const viewPassword = useCallback( e=>{
        SetShowPassword(!showPassword)
    },[showPassword])

    const authenticate = useCallback(data =>{
        //Dispatch auth
        //To do
        try {
            console.log("hey")
         } catch (error) {
             fillError()
         }
        }
      ,[data]);
    const revealedPasswordIcon = <FontAwesomeIcon icon={faEye} />
    const invisiblePasswordIcon = <FontAwesomeIcon icon={faEyeSlash}/>
    const loginIcon = <FontAwesomeIcon icon={faArrowRight} size={"3x"} color={`${data.user && data.password ? "#F9F9F9"  : "#EDEDED"}`}/>
    return(
        <section className="login-form">
                <div className="container">
                    <div className="logo">
                        <img src={logo}></img>
                    </div>
                    <div className="heading">
                        <h3>Iniciar sesión</h3>
                    </div>
                    <div className="input-box">
                        <input className="form-input" placeholder="Usuario" maxlength = "16" value={data.user} onChange={fillUSer}></input>
                        <input className="form-input" placeholder="Contraseña" maxlength = "32" value={data.password} onChange={fillPassword} type={`${showPassword ? "text"  : "password"}`}></input>
                        <span onClick={viewPassword}>{showPassword ? revealedPasswordIcon : invisiblePasswordIcon}</span>
                    </div>
                    <div className={`${error ? "error-message " : "invisible"}`}>
                        <span>Tu usuario o contraseña son incorrectos</span>
                    </div>
                    <div className="social-box">
                        <button className="twitter">T</button>
                        <button className="google">G</button>
                        <button className="facebook">F</button>
                    </div>
                    <div className="check">
                        <input className="stay-online" type="checkbox"></input>
                        <span>Permacener conectado</span>
                    </div>
                    <div className="buttom-box">
                        <button disabled={data.user && data.password ? false : true} onClick={authenticate}>{loginIcon}</button>
                    </div>
                    <div className="link-box">
                        <a href="#">¿Tienes problemas para iniciar sesion?</a>
                        <a href="#">Crear una cuenta</a>
                    </div>
                </div>
        </section>
           
    )
}

export default Login