import React , {useContext, useState} from 'react';

// import context
import { CoinContext } from './CoinContextProvider';

// export context
export const SearchContext = React.createContext();

const SearchContextProvider = ({children}) => {
    const [search , setSearch] = useState("");
    const {data} = useContext(CoinContext);
    const searchedData = data.filter(coin => coin.name.toLowerCase().includes(search.toLowerCase()));
    return (
        <SearchContext.Provider value={{search , setSearch , searchedData}}>
            {children}
        </SearchContext.Provider>
    );
};

export default SearchContextProvider;