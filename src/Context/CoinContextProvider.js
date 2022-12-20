import React from 'react';

// custom hooks
import { useAxios } from '../Helper/useAxios';

// export context
export const CoinContext = React.createContext();

// url
const URL = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=200&page=1&sparkline=false";


const CoinContextProvider = ({children}) => {
    const data = useAxios(URL);
    return (
        <CoinContext.Provider value={data}>
            {children}
        </CoinContext.Provider>
    );
};

export default CoinContextProvider;