import React, {useState, useEffect, useCallback} from "react"
import './Login-Form.css';
import Checkbox from "react-custom-checkbox";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from 'react-loader-spinner'
import axios from 'axios'
import { Link} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {getUser} from '../../actions/users'
import {revealedPasswordIcon, invisiblePasswordIcon, twitterIcon, facebookIcon, googleIcon, stayOnlineIcon, loginIcon, loginIconDisabled} from '../../utils/icons'

const LoginForm = ()=>{
    const dispatch = useDispatch()
    const [data, setData] = useState({
        email: "",
        password: ""

    })
    const [error, setError] = useState(false)
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
        
        setLoading(true)
         axios.post("http://localhost:5000/auth/login", data, {withCredentials: true}).then((response)=>{
         if(response.status===200) {
            setTimeout(function(){
                setLoading(false)
            }, 2000);
            dispatch(getUser())
            
           
           
         }else{
            setTimeout(function(){
                setLoading(false)
                setError(true)
            }, 2000);
         }
          
       })
       .catch(()=>{
        setTimeout(function(){
            setLoading(false)
            setError(true)
        }, 2000);
      
       })
      
    }

    const popUpLogin = (url) => {
        window.open(url,"mywindow","location=1,status=1,scrollbars=1,toolbar=no, menubar=no, width=800,height=800");
       let listener = window.addEventListener('message', (message) => {
           if(message.data){
            dispatch(getUser())
           }
          
       });
       }
  
    return(
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
                            <button disabled={data.email && data.password ? false : true} onClick={()=>authenticate(data)}>{data.email && data.password ? loginIcon : loginIconDisabled}</button>
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