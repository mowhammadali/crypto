import React , {useContext} from 'react';

// styles and icons
import { Row } from '../Styles/Customs/Header';
import {GiMoon} from "react-icons/gi";
import {GiStripedSun} from "react-icons/gi";

// import context
import { ThemeContext } from '../Context/ThemeContextProvider';
import { PaletteContext } from '../Context/PaletteContextProvider';
import { SearchContext } from '../Context/SearchContextProvider';

const Header = () => {
    const {dark , handleMode} = useContext(ThemeContext);
    const {colors , dispatch} = useContext(PaletteContext);
    const {search , setSearch} = useContext(SearchContext);
    return (
        <Row className='d-flex justify-content-between align-items-center px-3 px-sm-5 py-4 shadow'>
            <input 
            className={`${dark ? "bg-dark" : "bg-light"} border border-1 rounded-4 px-3`} 
            value={search}
            onChange={e => setSearch(e.target.value)}
            type="text" placeholder='Search whatever you want ...'/>
            <div className='d-inline-flex align-items-center gap-2'>
                {!dark && 
                    <div className='d-flex flex-column align-items-center gap-2'>
                        <span onClick={() => dispatch("success")} className={`circle d-inline-block bg-success rounded-circle ${colors.success && "p-2 shadow"}`}></span>
                        <span onClick={() => dispatch("primary")} className={`circle d-inline-block bg-primary rounded-circle ${colors.primary && "p-2 shadow"}`}></span>
                        <span onClick={() => dispatch("warning")} className={`circle d-inline-block bg-warning rounded-circle ${colors.warning && "p-2 shadow"}`}></span>
                    </div>
                }
                {dark 
                ? <span className='icon d-inline-flex p-2 rounded-3' onClick={handleMode}><GiStripedSun /></span>
                : <span className='icon d-inline-flex p-2 rounded-3' onClick={handleMode}><GiMoon /></span>
                }
            </div>
        </Row>
    );
};

export default Header;