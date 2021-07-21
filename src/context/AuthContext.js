
import { useContext } from "react";
import { createContext } from "react";
import { auth } from "../firebase";
import { useAuthState } from 'react-firebase-hooks/auth';
import { useRef } from "react";


const AuthContext=createContext()

export const useAuth=()=>{
    return useContext(AuthContext)
}


export function AuthProvider({children}){
    const [user, loading] = useAuthState(auth);
    




  

    const value={
        user
    }


    return(
        <AuthContext.Provider value={value}>

            <div style={{zIndex:1}}>{children}</div>
            {loading && <div style={{zIndex:100}}>        <div class="vfx-loader">
<div class="loader-wrapper">
	<div class="loader-content">
		<div class="loader-dot dot-1"></div>
		<div class="loader-dot dot-2"></div>
		<div class="loader-dot dot-3"></div>
		<div class="loader-dot dot-4"></div>
		<div class="loader-dot dot-5"></div>
		<div class="loader-dot dot-6"></div>
		<div class="loader-dot dot-7"></div>
		<div class="loader-dot dot-8"></div>
		<div class="loader-dot dot-center"></div>
	</div>
</div>
</div>
</div>}
            
        
        </AuthContext.Provider>
    )
}