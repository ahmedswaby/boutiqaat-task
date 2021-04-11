import React, { createContext, useContext, useState } from 'react'
import todoApi from "../services/todoApi";

const context = createContext()



const AppProvider = ({children}) => {
    const [items, setItems] = useState([]);

    
    return <context.Provider value={{  }}>
        {children}
    </context.Provider>
}

// setup custom hooks

const useGlobalContext = () => {
    return useContext(context)
}

export { AppProvider, context, useGlobalContext}