import { useState } from 'react';
import BingoCard from './BingoCard';
import PHRASES from './Phrases';
import SplashScreen from './SplashScreen';
import { Button, Container } from 'react-bootstrap';

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
        setBingoPhrases(generateBingoPhrases());
    };

    return (
        <Container className="text-center my-5">
            <BingoCard
                key={JSON.stringify(bingoPhrases)}
                phrases={bingoPhrases}
                onWin={handleWin}
            />
            <Button
                className="mt-3"
                variant="dark" // Change variant for aesthetics
                size="lg" // Increase button size
                onClick={() => setBingoPhrases(generateBingoPhrases())}
            >
                Generate New Card
            </Button>
            <SplashScreen show={isWin} onClose={handleCloseSplash} />
        </Container>
    );
};

export default BingoGenerator;
