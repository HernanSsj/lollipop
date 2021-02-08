  
   const passwordTest = (password) =>{

    if(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,16}$/.test(password)) return false

    return true
  }

export const passwordCheck =  (data, error, setError) =>{

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
}

export const nameCheck = (data, error, setError) =>{
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
}

export const emailCheck = (data, error, setError)=>{
    if(data.email){
        // eslint-disable-next-line 
        if(/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(data.email)){
            setError({...error, error:false, email_error: false, error_message: null})
          }else{
            setError({...error, error:true, email_error: true, error_message: "Ingrese un email valido"})
          }
      }else{
        setError({...error, error:false, email_error: false, error_message: null})
      }
}

export const checkComplete = (data, error, setCompleted) =>{
    if(error.name_error || error.email_error || error.password_error || error.repeated_password_error){
        setCompleted(false)
      }else{
        if(data.name && data.email && data.password && data.repeated_password){
          setCompleted(true)
        }
        
      }
}