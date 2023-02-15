import React, { useState } from 'react';
import './FlipCard.css';

const FlipCard = ({ imageUrl, title, description }) => { 
const [isFlipped, setIsFlipped] = useState(false); 
const handleFlip = () => { setIsFlipped(!isFlipped); }; 
return ( 
<div className={`flip-card ${isFlipped ? 'flipped' : ''}`} onMouseEnter={handleFlip} onMouseLeave={handleFlip}> 
  <div className="flip-card-inner"> <div className="flip-card-front"> <img src={imageUrl} alt={title} />
    </div> <div className="flip-card-back"> 
    <h2>{title}</h2> 
    <p>{description}</p> 
    </div> 
  </div> 
</div> 
); 
}; 
export default FlipCard;
