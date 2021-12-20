import React from 'react';
import {createContext, useContext,useReducer} from 'react';
export const StateContext = createContext();
export function StateProvider ({initialState,reducer,children}){
return(
    <StateContext.Provider value={useReducer(reducer,initialState)}>
        {children}
    </StateContext.Provider>
)
}
export  const useStateValue =()=>useContext(StateContext);