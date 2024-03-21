import React, { useState } from "react";
import TToast from "../components/Toast";
type showtoast = {
    message: string,
    type: "SUCCESS" | "ERROR",
};

type AppContext = {
    showToast: (toast: showtoast) => void
};

const AppContext = React.createContext<AppContext | null>(null);
export const AppContextProvider = (
    {children} : {children : React.ReactNode}
)=>{
    const [Toast,setToast] = useState<showtoast | null>(null);
    return(
        <AppContext.Provider value={{showToast : (toastmessage)=>{
            setToast(toastmessage);
        },}}>
            {Toast && <TToast message={Toast.message} type={Toast.type} onClose={() => setToast(null)}/>};
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