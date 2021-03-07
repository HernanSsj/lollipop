import React, { useEffect } from "react"
import './Login-Form.css';
import Checkbox from "react-custom-checkbox";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from 'react-loader-spinner'
import axios from 'axios'
import { Link} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {getUser} from '../../actions/users'
import {toggleShowPassword, toggleLoading, setError, fillEmail, fillPassword, clearLoginFormData} from '../../actions/login'
import {revealedPasswordIcon, invisiblePasswordIcon, twitterIcon, facebookIcon, googleIcon, stayOnlineIcon, loginIcon, loginIconDisabled} from '../../utils/icons'

const LoginForm = ()=>{
    const dispatch = useDispatch()
    const loginFormState = useSelector((state)=>state.loginForm)
    const {email, password, error, loading, stayOnline, showPassword} = loginFormState
  useEffect(()=>{
    dispatch(clearLoginFormData())
  },[])
    const authenticate = async (data) =>{
    
        dispatch(toggleLoading())

         axios.post("http://localhost:5000/auth/login", {email, password}, {withCredentials: true}).then((response)=>{
         if(response.status===200) {
            setTimeout(function(){
               dispatch(toggleLoading())
               dispatch(clearLoginFormData)
            }, 2000);
            dispatch(getUser()) 
           
         }else{
            setTimeout(function(){
                dispatch(toggleLoading())
                dispatch(setError(true))
                dispatch(clearLoginFormData())
            }, 2000);
         }
          
       })
       .catch(()=>{
        setTimeout(function(){
            dispatch(toggleLoading())
            dispatch(setError(true))
            dispatch(clearLoginFormData())
        }, 2000);
      
       })
      
    }

    const popUpLogin = (url) => {
        window.open(url,"mywindow","location=1,status=1,scrollbars=1,toolbar=no, menubar=no, width=800,height=800");
       let listener = window.addEventListener('message', (message) => {
           if(message.data){
            dispatch(getUser())
            dispatch(clearLoginFormData())
           }
          
       });
       }
  
    return(
                <div className="container">
                    <div className="login-heading">
                        <h2>Iniciar sesión</h2>
                    </div>
                    <div className="input-box">
                        <input className="username-input" required={true} maxLength = "128" value={email} onChange={(e)=>dispatch(fillEmail(e.target.value))} autoFocus="autofocus"></input>
                        <label className="usr-label">Email</label>
                        <input className="password-input"  required={true} maxLength = "32" value={password} onChange={(e)=>dispatch(fillPassword(e.target.value))} type={`${showPassword ? "text"  : "password"}`}></input>
                        <label className="pwd-label">Contraseña</label>
                        <span onClick={()=>dispatch(toggleShowPassword())}>{showPassword ? revealedPasswordIcon : invisiblePasswordIcon}</span>
                    </div>
                    <div className={"login-error-message-container"}>
                        &nbsp;
                        <span className={`${error ? "error-message " : "invisible"}`}>Usuario o contraseña incorrectos</span>
                    </div>
                    <div className="social-box">
                        <button className="twitter"onClick={() => popUpLogin('/auth/twitter')}>{twitterIcon}</button>
                        <button className="google" onClick={() => popUpLogin('/auth/google')}>{googleIcon}</button>
                        <button className="facebook" onClick={()=>popUpLogin('/auth/facebook')}>{facebookIcon}</button>
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
                            <button disabled={email && password ? false : true} onClick={()=>authenticate(email,password)}>{email && password ? loginIcon : loginIconDisabled}</button>
                            }
                    </div>
                    <div className="link-box">
                        <a href="#">¿Problemas para iniciar sesion?</a>
                        <Link to={'/signup'}><a href="#">Crear una cuenta</a></Link>
                    </div>
                </div>     
    )
}

export default LoginForm