import React from 'react';
import { useDispatch } from 'react-redux';
import { doLogout } from '../../../actions/auth';
import './header.scss';

const Header = () => {
    const dispatch = useDispatch();
    
    return (
        <>
            In Header
            <button type="button" onClick={() =>{ dispatch(doLogout())
            localStorage.removeItem('LocalStorage Token')}}>Logout</button>
        </>
    );
}

export default Header;