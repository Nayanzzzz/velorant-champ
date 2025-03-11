import  { createContext, ReactNode } from "react";


//1st step createContext
const DataContext =createContext("");

//2nd step make provider for children access the data
export const DataProviders = ({children}:{children : ReactNode})=>{

    const myName = "snap"
    return (
        <DataContext.Provider value={ myName }>
                {children}
        </DataContext.Provider>
    )
} 

export default DataContext;

