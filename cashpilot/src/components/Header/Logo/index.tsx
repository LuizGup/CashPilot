import React from 'react';
import logo from '../../assets/images/Logos/MainLogo.png';

const Logo: React.FC = () => {
    return (
        <div>
            <img src={logo} alt="Main Logo" />
        </div>
    );
};

export default Logo;