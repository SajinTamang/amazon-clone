// Setting data layer
// This file is to track a basket
import React, {createContext, useContext, useReducer} from "react";

// This is Data layer
export const StateContext = createContext();

// Build a Provider
export const StateProvider = ({reducer, initialState, children}) =>(
    <StateContext.Provider value={useReducer(reducer,initialState)} >
        {children}
    </StateContext.Provider>
)

// Thi si how we use it inside of a component

export const useStateValue = () => useContext(StateContext);