
  
   const passwordTest = (password) =>{

    if(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,16}$/.test(password)) return false

    return true
  }

export const passwordCheck =  (password, repeatedPassword, error, action, dispatch) =>{
 
    if(password){
        if(password.length<8){

            dispatch(action({...error, error:true, password_error: true, error_message: "Debe contener entre 8 y 16 caracteres"}))

        }else if(passwordTest(password)){
            
            dispatch(action({...error, error:true, password_error: true, error_message: "Utilice numeros simbolos y mayusculas"}))

        }else if(repeatedPassword){

            if(password !== repeatedPassword){

                dispatch(action({...error, error:true,  repeated_password_error: true, password_error:true, error_message: "Las contraseñas no coinciden"}))

            }else{

                dispatch(action({...error, error:false, password_error: false, repeated_password_error: false, error_message: null}))
            }
        }else{
            dispatch(action({...error, error:false, password_error: false,  repeated_password_error: false, error_message: null}))
        }
    }else{
        dispatch(action({...error, error:false, password_error: false, error_message: null}))
    }
}

export const nameCheck = (name, error, action, dispatch) =>{
    if(name){
        if(name.length<3 || name.length>10 ){

            dispatch(action(({...error, error:true, name_error: true, error_message: "Debe contener entre 3 y 10 caracteres"})))
             
        }else if (/\s/.test(name)) {
           dispatch(action({...error, error:true, name_error: true, error_message: "No debe contener espacios"}))
        }else{
            dispatch(action({...error, error:false, name_error: false, error_message: null}))
        }
      }else{
        dispatch(action({...error, error:false, name_error: false, error_message: null}))
      }
}

export const emailCheck = (email, error, action, dispatch)=>{
    if(email){
        // eslint-disable-next-line 
        if(/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(email)){
            dispatch(action({...error, error:false, email_error: false, error_message: null}))
          }else{
            dispatch(action({...error, error:true, email_error: true, error_message: "Ingrese un email valido"}))
          }
      }else{
        dispatch(action({...error, error:false, email_error: false, error_message: null}))
      }
}

export const checkComplete = (name,email,password,repeatedPassword, error, action, dispatch) =>{
   
    if(error.name_error || error.email_error || error.password_error || error.repeated_password_error){
        
        dispatch(action(false))
        
      }else{
        if(name && email && password && repeatedPassword){
         
          dispatch(action(true))
        }
        
      }
}