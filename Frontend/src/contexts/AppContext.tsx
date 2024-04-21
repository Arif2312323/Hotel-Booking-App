import React, { useState } from "react";
import TToast from "../components/Toast";
import { useQuery } from "react-query";
import * as api_client from "../api-client";
type showtoast = {
    message: string,
    type: "SUCCESS" | "ERROR",
};

type AppContext = {
    showToast: (toast: showtoast) => void,
    isLoggedIn : boolean
};

const AppContext = React.createContext<AppContext | null>(null);
export const AppContextProvider = (
    {children} : {children : React.ReactNode}
)=>{
    const [Toast,setToast] = useState<showtoast | null>(null);
    const {isError} = useQuery("validateToken", api_client.validateToken, {
        retry : false,
    })
    return(
        <AppContext.Provider value={{showToast : (toastmessage)=>{
            setToast(toastmessage);
        },
        isLoggedIn : !isError
        }}>
            {Toast && <TToast message={Toast.message} type={Toast.type} onClose={() => setToast(null)}/>}
            
            {children}
        </AppContext.Provider>
    )
}

export const useAppContext = () => {
    const context = React.useContext(AppContext);
    if (context === undefined) {
        throw new Error('useAppContext must be used within a AppContextProvider');
    }
    return context as AppContext;
}