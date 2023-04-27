import { createContext,useState } from "react";

const AppContext = createContext();

const AppProvider = ({children}) => {
    const [uid,setUid] = useState(undefined);
    const [email,setEmail] = useState(undefined);

    return (
        <AppContext.Provider value={{uid,setUid,email,setEmail}}>
            {children}
        </AppContext.Provider>
    )
}

export { AppContext, AppProvider }