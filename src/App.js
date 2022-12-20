import React from 'react';

// components
import Header from "./Components/Header";
import Landing from "./Components/Landing";

// context provider
import ThemeContextProvider from './Context/ThemeContextProvider';
import CoinContextProvider from './Context/CoinContextProvider';
import PaletteContextProvider from './Context/PaletteContextProvider';
import SearchContextProvider from './Context/SearchContextProvider';

// styles
import { GlobalStyles } from './Styles/Global/GlobalStyles';

const App = () => {
    return (
        <ThemeContextProvider>
            <CoinContextProvider>
                <PaletteContextProvider>
                    <SearchContextProvider>
                        <GlobalStyles />
                        <Header />
                        <Landing />
                    </SearchContextProvider>
                </PaletteContextProvider>
            </CoinContextProvider>
        </ThemeContextProvider>
    );
};

export default App;