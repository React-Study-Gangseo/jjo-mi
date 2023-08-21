import React, {useEffect} from 'react';
import {Outlet} from 'react-router';

import Header from './Header';
import Footer from './Footer';


const Layout = (props: {children: React.ReactNode}) => {
    return (
        <>
            <Header/>
            <Outlet/>
            <Footer/>
        </>
    );
}

export default Layout;
