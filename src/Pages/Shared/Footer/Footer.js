import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer className='text-center mt-5 bg-secondary p-5'>
            <p className=''><b>Copyright &copy; MD: Arif hossain {year}</b></p>
        </footer>
    );
};

export default Footer;