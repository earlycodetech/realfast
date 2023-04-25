import { createContext,useState } from "react";

const AppContext = createContext();

const AppProvider = ({children}) => {
    const [uid,setUid] = useState('ywqdh78387324');
    const [email,setEmail] = useState('fallyfox@gmail.com');

    return (
        <AppContext.Provider value={{uid,setUid,email,setEmail}}>
            {children}
        </AppContext.Provider>
    )
}

export { AppContext, AppProvider }