import { useState } from 'react';
import BingoCard from './BingoCard';
import PHRASES from './Phrases';
import SplashScreen from './SplashScreen';

const generateBingoPhrases = () => {
    // Create a shuffled copy of the phrases
    const shuffledPhrases = [...PHRASES].sort(() => 0.5 - Math.random());

    // Generate a 5x5 Bingo card with random phrases
    const phrases = [];
    for (let i = 0; i < 5; i++) {
        const row = [];
        for (let j = 0; j < 5; j++) {
            row.push(shuffledPhrases.pop());
        }
        phrases.push(row);
    }
    return phrases;
};

const BingoGenerator = () => {
    const [bingoPhrases, setBingoPhrases] = useState(generateBingoPhrases);
    const [isWin, setIsWin] = useState(false);

    const handleWin = () => {
        setIsWin(true);
    };

    const handleCloseSplash = () => {
        setIsWin(false);
    };

    return (
        <div>
            <BingoCard phrases={bingoPhrases} onWin={handleWin} />
            <button onClick={() => setBingoPhrases(generateBingoPhrases())}>
                Generate New Card
            </button>
            <SplashScreen show={isWin} onClose={handleCloseSplash} />
        </div>
    );
};

export default BingoGenerator;