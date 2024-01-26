"use client";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const board: string[] = ["🤖", "👽", "👻", "🤡", "🐧", "🚀"];

export default function QuestionSixPage(): JSX.Element {
  const [boardData, setBoardData] = useState<string[]>([]);
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [matchedCards, setMatchedCards] = useState<number[]>([]);
  const [moves, setMoves] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(60);
  const [hasClicked, setHasClicked] = useState(false);

  useEffect(() => {
    if (timer === 0) {
      setIsGameOver(true);
    } else if (!isGameOver && hasClicked) {
      const interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [timer, isGameOver, hasClicked]);

  const shuffle = () => {
    const shuffledCards = [...board, ...board]
      .sort(() => Math.random() - 0.5)
      .map((v) => v);
    setBoardData(shuffledCards);
  };

  const initialize = () => {
    shuffle();
    setIsGameOver(false);
    setFlippedCards([]);
    setMatchedCards([]);
    setMoves(0);
    setScore(0);
    setTimer(60);
    setHasClicked(false);
  };
  console.log({ flippedCards, matchedCards });
  const updateActiveCards = (i: number) => {
    if (!flippedCards.includes(i) && !matchedCards.includes(i)) {
      if (flippedCards.length === 0 && timer === 60) {
        setHasClicked(true);
      }

      if (flippedCards.length === 2) {
        setTimeout(() => {
          setFlippedCards([]);
        }, 500);
      }

      setFlippedCards((prevFlippedCards) => [...prevFlippedCards, i]);
      setMoves((v) => v + 1);

      if (flippedCards.length === 1) {
        const firstIdx = flippedCards[0];
        if (boardData[firstIdx] === boardData[i]) {
          setMatchedCards((prev) => [...prev, firstIdx, i]);
          setScore((prevScore) => prevScore + 5); // Increment score
        } else {
          setScore((prevScore) => prevScore - 1);
          setTimeout(() => {
            setFlippedCards([]);
          }, 500);
        }
      }
    }
  };

  useEffect(() => {
    if (matchedCards.length === 12) {
      setIsGameOver(true);
    }
  }, [moves]);

  useEffect(() => {
    initialize();
  }, []);

  return (
    <div className="container py-8">
      <div className="text-center">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Memory Game
        </h1>{" "}
        {isGameOver && (
          <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
            Congratulations! please click on reset to play again.
          </h3>
        )}
      </div>
      <section className="flex mt-8 flex-col gap-6 items-center justify-center">
        <div className="flex flex-col md:flex-row gap-x-6 gap-y-3 items-center">
          <h2 className="font-bold text-lg">Score: {score}</h2>
          <h2 className="font-bold text-lg">Flips: {moves}</h2>
          <h2 className="font-bold text-lg">Timer: {timer} seconds</h2>
          <Button onClick={initialize}>Reset</Button>
        </div>
        <div className="board">
          {boardData.map((data, i) => {
            const flipped = flippedCards.includes(i) ? true : false;
            const matched = matchedCards.includes(i) ? true : false;
            return (
              <div
                onClick={() => {
                  updateActiveCards(i);
                }}
                key={i}
                className={`card ${flipped || matched ? "active" : ""} ${
                  matched ? "matched" : ""
                } ${isGameOver ? "gameover" : ""}`}
              >
                <div className="card-front">{data}</div>
                <div className="card-back"></div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
