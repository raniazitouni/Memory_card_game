import React, { useEffect, useState } from "react";
import Card from "./components/Card";

const cardsarr = [
  { src: "/images/java.svg", paired: false },
  { src: "/images/python.svg", paired: false },
  { src: "/images/ruby.svg", paired: false },
  { src: "/images/swift.svg", paired: false },
  { src: "/images/typescript.svg", paired: false },
  { src: "/images/cpp3.svg", paired: false },
  { src: "/images/php.svg", paired: false },
  { src: "/images/c.svg", paired: false },
  { src: "/images/html.svg", paired: false },
];

function App() {
  const [cards, setCards] = useState([]);
  const [isMobile, setIsMobile] = useState(false);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);

  const reOrderCards = () => {
    const arr = [...cardsarr, ...cardsarr]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));
    setCards(isMobile ? arr.slice(0, 12) : arr);
  };

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, [isMobile]);

  useEffect(() => {
    reOrderCards();
  }, []);

  console.log(cards);

  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);

    console.log(card);
  };

  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true);
      if (choiceOne.src === choiceTwo.src) {
        console.log("match");
        setCards((prevCards) => {
          return prevCards.map((card) => {
            if (card.src === choiceOne.src) {
              return { ...card, paired: true };
            } else {
              return card;
            }
          });
        });
      } else {
        console.log("no match");
      }
      setTimeout(() => {
        setChoiceOne(null);
        setChoiceTwo(null);
        setDisabled(false);
      }, 1000);
    }
  }, [choiceOne, choiceTwo]);

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
        {cards.map((card) => (
          <Card
            key={card.id}
            card={card}
            handleChoice={handleChoice}
            flipped={card.paired || card === choiceOne || card === choiceTwo}
            disabled={disabled}
          />
        ))}
      </div>
      <button className="text-black " onClick={reOrderCards}>
        replay
      </button>
    </div>
  );
}

export default App;
