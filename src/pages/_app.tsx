// import '../styles/globals.css'
// import type { AppProps } from 'next/app';
// import ThemeWrapper from "../styles/theme/index";

// export default function App({ Component, pageProps }: AppProps) {
//   return <Component {...pageProps} />
// }

import {Fragment} from 'react';
import { SessionProvider } from "next-auth/react"
import App  from 'next/app';
import '../styles/globals.css';
import { Provider } from "react-redux";
import initStore from "../Redux/store";
import { createWrapper } from "next-redux-wrapper";
import ThemeWrapper from "../styles/theme/index";
import Head from 'next/head';
import { AppProps } from 'next/app';
import Script from 'next/script';
import axios from 'axios';
// import cookies from 'next-cookies'
import {AES, enc} from 'crypto-js';
import { getUserData, LogOut } from '../Authentication/State/userAction';
import jwtDecode from 'jwt-decode';
import { SET_AUTHENTICATED } from '../Redux/Types';
import Cookies from 'js-cookie'
// The Progress Loader For Routes

//heck if there is a token and accessToken 

interface MyAppProps extends AppProps {
  cookieValue: string;
  pageProps:any;
  store: any;
  state:{
    dark:boolean,
    secondDark:boolean
  }
}
class MyApp extends App <MyAppProps> { 
    // State For Dark Mode
    state={
        dark:false,
        secondDark:false,
    }
  componentDidMount () {
    const cookieValue:any = Cookies.get('kgrb9qufoyorhhfkhfjmnfm')
    // if cookie exist 
    if(cookieValue){
      const decrypt = (value:string) => AES.decrypt(value, 'secret-key').toString(enc.Utf8);
      const accessToken = decrypt(cookieValue)
      if(accessToken){
        const decodedToken:any  = jwtDecode(accessToken)
        console.log(decodedToken)
        if(decodedToken.exp * 1000 < Date.now()){
          // logout the user, the session have expired 
        }
        else{
          axios.defaults.headers.common['Authorization'] = accessToken;
          initStore.dispatch(getUserData())
          // initStore.dispatch({type:SET_AUTHENTICATED});
        }
      }
      
    }
    // Gleap.initialize(process.env.GLEAP_KEY);
    const secondDark = localStorage.getItem("secondDark") === 'true'
    const dark = secondDark ? JSON.parse(localStorage.getItem("dark")!):this.state.dark
    this.setState({
      secondDark,
      dark
    })
  }
  handleDark = () => {
      this.setState({
          dark:!this.state.dark,
          secondDark:true
      })
      const dark:boolean= !this.state.dark
      const DarkString:string = dark.toString()
      localStorage.setItem("dark", DarkString);
      localStorage.setItem("secondDark", "true")
  }
  render(){
    const { Component, pageProps} = this.props;
    const Mode = this.state.dark ? "dark": "light"
    return(
    <Provider store={initStore} >
      
      {/* <Script strategy="lazyOnload" src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`} />
      <Script strategy="lazyOnload">
          {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
              });
          `}
      </Script> */}
          <Head>
          <link href="https://fonts.googleapis.com/css2?family=Assistant:wght@200;300;400;500;600;700;800&family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&family=EB+Garamond:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,500;1,600;1,700;1,800&family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap" rel="stylesheet" />
             <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" />
          </Head>
          <ThemeWrapper mode={Mode}>
              <Component darkMode={this.handleDark} {...pageProps} />
          </ThemeWrapper>
    </Provider>
    )
  }
}

const makeStore = () => initStore
const wrapper = createWrapper(makeStore);
export default wrapper.withRedux(MyApp)