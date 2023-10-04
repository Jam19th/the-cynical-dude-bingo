import { useState } from 'react';

import BingoCell from './BingoCell';

// Utility function to check for Bingo
function checkBingo(card) {
    // Check rows
    for (let row of card) {
        if (row.every(cell => cell.selected)) {
            return true;
        }
    }

    // Check columns
    for (let i = 0; i < 5; i++) {
        if (card.every(row => row[i].selected)) {
            return true;
        }
    }

    // Check diagonals
    if (card.every((row, index) => row[index].selected)) {
        return true;
    }
    if (card.every((row, index) => row[4 - index].selected)) {
        return true;
    }

    return false;
}

const BingoCard = ({ phrases, onWin }) => {
    const [cardState, setCardState] = useState(
        phrases.map(row => row.map(phrase => ({ value: phrase, selected: false })))
    );

    const handleCellClick = (rowIndex, cellIndex) => {
        const newCardState = [...cardState];
        newCardState[rowIndex][cellIndex].selected = !newCardState[rowIndex][cellIndex].selected;
        setCardState(newCardState);

        if (checkBingo(newCardState)) {
            onWin();
        }
    };

    return (
        <div className="bingo-card">
            {cardState.map((row, rIndex) => (
                <div className="bingo-row" key={rIndex}>
                    {row.map((cell, cIndex) => (
                        <BingoCell
                            key={cIndex}
                            value={cell.value}
                            selected={cell.selected}
                            onClick={() => handleCellClick(rIndex, cIndex)}
                        />
                    ))}
                </div>
            ))}
        </div>
    );
};

export default BingoCard;