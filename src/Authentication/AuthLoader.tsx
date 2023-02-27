import React, {useEffect} from 'react';
import { useRouter } from 'next/router';
console.log("rendering")
interface AuthState{
    loading:boolean;
    authenticated:boolean;
    credentials:object;
}
function AuthLoader({loading, authenticated, credentials}:AuthState) {
    useEffect(() => {
        if(!loading && !authenticated && Object.keys(credentials).length === 0){
            
            router.push('/login')
        }
    }, [loading, authenticated])
    
    const router = useRouter()
    if(loading && !authenticated && Object.keys(credentials).length === 0){
        // show a good loading animation for the website 
        return (<><h1>Loading ....</h1></>)   
    }
}

export default AuthLoader

// cyrilclarkeoneoma