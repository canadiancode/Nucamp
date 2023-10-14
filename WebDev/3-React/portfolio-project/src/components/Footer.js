import React from 'react';
import { Navbar } from 'reactstrap';

const footerStyle = {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    position: 'absolute',
    bottom: '0px',
}
const footerLogoCon = {
    width: 'fit-content',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
}
const footerImgStyle = {
    width: '40px',
    height: '40px',
}
const footerLogoTextStyle = {
    color: 'white',
    margin: '0',
    textDecoration: 'none',
    
}
const Footer = () => {
    return (
        <Navbar style={footerStyle} className='bg-gradient bg-opacity-75' color="dark" expand="md" >
            <div style={footerLogoCon}>
                <a href='https://www.coingecko.com/'><img style={footerImgStyle} src='https://www.coingecko.com/favicon-96x96.png' alt='Coingecko logo' loading='lazy'></img></a>
                <a href='https://www.coingecko.com/' style={footerLogoTextStyle} ><h6 style={footerLogoTextStyle}>Data from CoinGecko</h6></a>
            </div>
        </Navbar>
    )
};

export default Footer;