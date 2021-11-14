import cards from "./cards.json";
import { useState } from "react";

function Cards() {
    const [clickedDivs, setClickedDivs] = useState([]);
    const [score, setScore] = useState(0);
    const [highScore, setHighScore] = useState(0);

    function handleClick(e) {
        if (clickedDivs.includes(e)) {
            setScore(score => score = 0);
            shuffle(cards);
            setClickedDivs(clickedDivs => clickedDivs = []);

        } else {
            setClickedDivs(oldArray => [...oldArray, e]);
            setScore(score + 1);
            shuffle(cards);
            if (highScore <= score) {
                setHighScore(highScore + 1);
            }
        }

    }

    const shuffle = (array) => {
        let currentIndex = array.length;
        let randomIndex;

        while (currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            [array[currentIndex], array[randomIndex]] = [
                array[randomIndex], array[currentIndex]];
        }
        return array;

    }

    return (
        <div className="wrraper">
            <div className="score">
                <p>Current Score: {score}</p>
                <p>High Score: {highScore}</p>
            </div>
            <div className="cards">
                {cards.map((card, index) => {
                    if (index <= 7) {
                        return (
                            <div
                                key={card.id}
                                className="card"
                                id={card.id}
                                onClick={() => handleClick(card.id)}
                            >
                                <img alt={card.name} src={card.image}></img>
                                <p>{card.name}</p>
                            </div>
                        )
                    } else {
                        return null;
                    }

                })}
            </div>
        </div>
    )
}

export default Cards;