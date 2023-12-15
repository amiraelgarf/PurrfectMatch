import React from 'react';
import { useNavigate } from 'react-router-dom';


function MyButton({ onClick, label, style }) {
    return (
        <button onClick={onClick} style={style}>{label}</button>
    );
}

export default function MyPets() {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/appointments');
    };

    return (
        <div>
            {/* Original button */}
            <MyButton onClick={handleClick} label="Original Button" style={{ position: 'absolute', left: 20 }} />

            {/* Duplicate button */}
            <MyButton onClick={handleClick} label="Duplicate Button" style={{ position: 'absolute', left: 200 }} />
        </div>
    );
}