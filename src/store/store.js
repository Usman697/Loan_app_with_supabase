import { createContext } from "react";

export const AppContext = createContext();

export default function AppProvider({children}){
    const store = {
        
    }
    return(
        <>
        <AppContext.Provider value={store}>{children}</AppContext.Provider>;
        </>
    )
}