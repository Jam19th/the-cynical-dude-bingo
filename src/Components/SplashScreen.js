import React from 'react';
import '../SplashScreen.css';

const SplashScreen = ({ show, onClose }) => {
    if (!show) return null;

    return (
        <div className="splash-screen">
            <div className="splash-content">
                <h2>Bingo! You won!</h2>
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

export default SplashScreen;
