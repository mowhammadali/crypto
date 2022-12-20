import React , { useContext } from 'react';

// components
import Coin from './Coin';

// import context
import { CoinContext } from '../Context/CoinContextProvider';
import { ThemeContext } from '../Context/ThemeContextProvider';
import { PaletteContext } from '../Context/PaletteContextProvider';
import { SearchContext } from '../Context/SearchContextProvider';

// styles and icons
import { Container } from '../Styles/Customs/Landing';
import { Spinner } from 'react-bootstrap';

const Landing = () => {
    const {data , loading , error} = useContext(CoinContext);
    const {dark} = useContext(ThemeContext);
    const {colors} = useContext(PaletteContext);
    const {searchedData , search} = useContext(SearchContext);
    return (
        <Container className='container d-flex justify-content-center my-5'>
            {error ? 
             <div className="alert alert-danger d-flex align-items-center" role="alert">
                <div>
                    {error}
                </div>
            </div>
            :(loading 
            ? 
            <div>
                <Spinner animation="grow" variant="primary"/>
                <Spinner className='mx-3' animation="grow" variant="primary"/>
                <Spinner animation="grow" variant="primary"/>
            </div>
            : 
            <div className="table-responsive w-100">
                <table className={`table 
                ${dark ? "table-dark" : `${colors.success && "table-success"} ${colors.primary && "table-primary"} ${colors.warning && "table-warning"}`}
                table-striped border border-1`}>
                    <thead>
                        <tr>
                            <th className='th text-center'>Logo</th>
                            <th className='th text-center'>Name</th>
                            <th className='th text-center'>Symbol</th>
                            <th className='th text-center'>Price</th>
                            <th className='th text-center'>Market Cap</th>
                            <th className='th text-center'>Price per 24H</th>
                        </tr>
                    </thead>
                    <tbody>
                        {(search ? searchedData : data).map(coin => <Coin key={coin.id} {...coin}/>)}
                    </tbody>
                </table>
            </div>
            )}
        </Container>
    );
};

export default Landing;