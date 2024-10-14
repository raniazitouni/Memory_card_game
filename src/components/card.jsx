import React from "react";

const Card = ({ card, handleChoice, flipped, disabled }) => {
  const handleClick = () => {
    if (!disabled) handleChoice(card);
  };

  return (
    <div className="relative w-24 h-24 md:w-44 md:h-44">
      <img
        src="/images/legoCharacter.svg"
        alt="back"
        className={`w-full h-full border-black border-2 bg-etic-grey object-contain rounded-lg block
            ease-in  duration-200 delay-200 ${
              flipped && "rotate-y-90 delay-0"
            }`}
        onClick={handleClick}
      />
      <img
        src={card.src}
        alt="front"
        className={`w-full h-full border-black border-2 bg-etic-grey object-contain rounded-lg block absolute top-0 rotate-y-90 
          ease-in duration-200   
        ${flipped && "rotate-y-0 delay-200"}`}
       
      />
    </div>
  );
};

export default Card;
