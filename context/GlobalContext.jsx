import { createContext, useReducer } from "react";

export const GlobalContext = createContext()
const initialState = {
    users: [],
    services: [],
    authToken: null
}

// useReducer
function globalReducer(state, action) {
    // Action >> {type:"addUser",payload:{}}

    switch (action.type) { //action.type >> Toma el valor y cumple la condición del correspondiente
        case "ADDUSER":
            return {
                ...state,
                users: [...state.users, action.payload]
            }
        
        case "ADDSERVICE":
            return {
                ...state,
                services: [...state.services, action.payload]
            }

        // case "addServices":
        // case "addToken"
    }
}

export const GolbalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(globalReducer, initialState)

    const addNewUser = (user) => {
        dispatch({ type: "ADDUSER", payload: user })
    }

    const addNewService = (service) => {
        dispatch({ type: "ADDSERVICE", payload: service })
    }

    return <GlobalContext.Provider value={{ state, addNewUser, addNewService }}>
        {children}
    </GlobalContext.Provider>
}