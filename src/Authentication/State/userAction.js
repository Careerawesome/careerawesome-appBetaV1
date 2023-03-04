import { SET_USER, LOADING_UI, STOP_LOADING_USER, LOADING_USER,  CLEAR_ERRORS, SET_ERRORS, SET_UNAUTHENTICATED } from "../../Redux/Types";
import axios from "axios"
import {AES, enc} from 'crypto-js';
import Cookies from 'js-cookie';
import Router  from 'next/router';

// encrypt with Crypto-js 
const encrypt = (value) => AES.encrypt(value, 'secret-key').toString();
// export const registerUser

const headers = {
    'Content-Type': 'application/json',
    'secrete-api-key': `${process.env.DATE}`
  };

export const loginUser = (loginPayload, path) => (dispatch) =>{
    dispatch({type:LOADING_USER});
    axios.post('https://api.careerawesome.xyz/api/users/login', loginPayload, { headers })
    .then((res) =>{
        setAuthorizationHeader(res.data.accessToken)
        dispatch(getUserData())
        dispatch({type:CLEAR_ERRORS})
    })
    .catch((err)=>{
        console.log(err)
        dispatch({
            type:SET_ERRORS,
            payload:err.data
        })
    })
    
}

export const RegisterUser = (loginPayload) => (dispatch) =>{
    dispatch({type:LOADING_UI});
    axios.post('https://api.careerawesome.xyz/api/users/signin', loginPayload, {headers})
    .then((res) =>{
        setAuthorizationHeader(res.data.accessToken)
        storeSessionToken(res.data.refreshToken)
        dispatch(getUserData())
        dispatch({type:CLEAR_ERRORS})
    })
    .catch((err)=>{
        dispatch({
            type:SET_ERRORS,
            payload:err
        })
    })
    
}
export const getUserData = () => (dispatch) => {
    dispatch({ type:LOADING_USER })
    axios.get('https://api.careerawesome.xyz/api/users/user', {headers})
    .then((res) =>{
        dispatch({
            type:SET_USER,
            payload:res.data
        })
        Router.push('/')
        dispatch({type:STOP_LOADING_USER})
    })
    .catch(err => console.log(err))

}


const setAuthorizationHeader = (token) => {
    const secreteName = "kgrb9qufoyorhhfkhfjmnfm"
    const accessToken = `Bearer ${token}`;
      Cookies.set(secreteName, encrypt(accessToken), {
        expires: 7,
        secure: true,
      });
      console.log("cookies have done")
    axios.defaults.headers.common['Authorization'] = accessToken;
};

export const LogOut = () => (dispatch) =>{
    const secreteName = "kgrb9qufoyorhhfkhfjmnfm"
    Cookies.remove(secreteName)
    delete axios.defaults.headers.common["Authorization"];
    dispatch({type:SET_UNAUTHENTICATED});
}

const storeSessionToken = (sessionToken) =>{
    console.log("refresh set")
    const secreteName = 'sjhslhlkjsjlksjkljsfuj,fjnkjh,mn,hnu93808758578178u4riuoyj137iuryhoi1u3yrrhoiuyhiulfkjshusjhmsgbs'
    const refreshToken = sessionToken;
    Cookies.set(secreteName, encrypt(refreshToken), {
        expires: 70000, // expires in 70000 days
        secure: true,
      });
}