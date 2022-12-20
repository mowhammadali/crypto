import React, { useReducer } from 'react';

// export context
export const PaletteContext = React.createContext();

const initialValue = {
    success: true,
    primary: false,
    warning: false,
}

const reducer = (state , action) => {
    switch(action){
        case "success":
            return {...initialValue}
        case "primary":
            return {
                success: false,
                primary: true,
                warning: false
            }
        case "warning":
            return {
                success: false,
                primary: false,
                warning: true
            }
        default:
            return state;
    }
}

const PaletteContextProvider = ({children}) => {
    const [colors , dispatch] = useReducer(reducer , initialValue);
    return (
        <PaletteContext.Provider value={{colors , dispatch}}>
            {children}
        </PaletteContext.Provider>
    );
};

export default PaletteContextProvider;