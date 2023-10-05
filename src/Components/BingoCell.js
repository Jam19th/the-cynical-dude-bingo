import { Button } from 'react-bootstrap';

const BingoCell = ({ value, selected, onClick }) => {
    const baseStyles = {
        padding: '10px 20px', // Adjusted padding for better responsiveness
        border: '2px solid #343a40',
        cursor: 'pointer',
        fontSize: '0.8rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        borderRadius: '0',
        backgroundColor: selected ? '#ffc107' : '#fff',
        color: selected ? 'black' : undefined,
    };

    return (
        <Button
            variant={selected ? "warning" : "outline-dark"}
            onClick={onClick}
            style={baseStyles}
            className="w-100 h-100" // Make sure button takes full width and height of its parent
        >
            {value}
        </Button>
    );
};

export default BingoCell;