import React, { useState, useEffect } from 'react';

const TrafficLight = () => {
    const [activelight, setActiveLight] = useState('red');

    const handleLightClick = (color) => {
        setActiveLight(color);
    };
    
return (
    <div className="traffic-light-container">
    <div className="pole"></div>
    <div className="traffic-light">
        <div 
        className={`light red ${activelight === 'red' ? 'on' : 'off'}`}
        onClick={() => handleLightClick('red')}
        ></div>
        <div 
        className={`light yellow ${activelight === 'yellow' ? 'on' : 'off'}`}
        onClick={() => handleLightClick('yellow')}
        ></div>
        <div 
        className={`light green ${activelight === 'green' ? 'on' : 'off'}`}
        onClick={() => handleLightClick('green')}
        ></div>
    </div>
    </div>
);
};

export default TrafficLight;
