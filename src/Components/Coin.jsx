import React from 'react';

// helper
import { shortener } from '../Helper/shortener';

// styles
import { Tr } from '../Styles/Customs/Coin';

const Coin = (props) => {
    const {image , name , symbol , current_price , market_cap , price_change_percentage_24h} = props;
    return (
        <Tr>
            <td className='text-center align-middle'>
                <img alt="coin" src={image}/>
            </td>
            <td className='text-center align-middle'>
                <h6 className='mb-0'>{shortener(name)}</h6>
            </td>
            <td className='text-center align-middle'>
                <p className='mb-0'>{symbol.toUpperCase()}</p>
            </td>
            <td className='text-center align-middle'>
                <p className='mb-0'>$ {current_price}</p>
            </td>
            <td className='text-center align-middle'>
                <p className={`mb-0 fw-bold ${price_change_percentage_24h > 0 ? "text-success" : "text-danger"}`}>{price_change_percentage_24h}</p>
            </td>
            <td className='text-center align-middle'>
                <p className='mb-0'>$ {market_cap.toLocaleString()}</p>
            </td>
        </Tr>
    );
};

export default Coin;