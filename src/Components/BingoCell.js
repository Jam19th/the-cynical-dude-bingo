import { useState } from 'react';

const BingoCell = ({ value, selected, onClick }) => (
    <div
        className={`bingo-cell ${selected ? 'selected' : ''}`}
        onClick={onClick}
    >
        {value}
    </div>
);

export default BingoCell;
