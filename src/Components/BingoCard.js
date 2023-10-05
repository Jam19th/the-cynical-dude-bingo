import { useState } from 'react';
import BingoCell from './BingoCell';
import { Row, Col } from 'react-bootstrap';

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
        <div className="p-3">
            {cardState.map((row, rIndex) => (
                <Row key={rIndex} className="g-0 mb-2">
                    {row.map((cell, cIndex) => (
                        // Add horizontal margin to the Col component
                        <Col xs={2} style={{ margin: '0 5px' }} key={cIndex}>
                            <BingoCell
                                value={cell.value}
                                selected={cell.selected}
                                onClick={() => handleCellClick(rIndex, cIndex)}
                            />
                        </Col>
                    ))}
                </Row>
            ))}
        </div>
    );

};

export default BingoCard;