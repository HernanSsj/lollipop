import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash, faArrowRight, faCheck, faExclamationTriangle} from "@fortawesome/free-solid-svg-icons";
import {faTwitter, faGoogle, faFacebook} from "@fortawesome/free-brands-svg-icons";

export const revealedPasswordIcon = <FontAwesomeIcon icon={faEye} />
export const invisiblePasswordIcon = <FontAwesomeIcon icon={faEyeSlash}/>
export const loginIcon = <FontAwesomeIcon icon={faArrowRight} size={"3x"} color={"#F9F9F9"}/>
export const loginIconDisabled = <FontAwesomeIcon icon={faArrowRight} size={"3x"} color={"#EDEDED"}/>
export const twitterIcon = <FontAwesomeIcon icon={faTwitter} size={"2x"} color={"#FFFFFF"}/>
export const googleIcon = <FontAwesomeIcon icon={faGoogle} size={"2x"} color={"#000000"}/>
export const facebookIcon = <FontAwesomeIcon icon={faFacebook} size={"2x"} color={"#FFFFFF"}/>
export const stayOnlineIcon = <FontAwesomeIcon icon={faCheck} color={"#F9F9F9"}/>
export const inputErrorIcon = <FontAwesomeIcon icon={faExclamationTriangle} color={"#BE1E37"}/>