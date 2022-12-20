import React , {useState} from 'react';

// styles
import { ThemeProvider } from 'styled-components';
import { LightMode , DarkMode } from '../Styles/Theme/Theme';

// export context
export const ThemeContext = React.createContext(); 

const ThemeContextProvider = ({children}) => {
    const [dark , setDark] = useState(false);
    const handleMode = () => setDark(!dark);
    return (
        <ThemeProvider theme={dark ? DarkMode : LightMode}>
            <ThemeContext.Provider value={{dark , handleMode}}>
                    {children}
            </ThemeContext.Provider>
        </ThemeProvider>
    );
};

export default ThemeContextProvider;