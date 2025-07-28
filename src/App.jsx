import React, {useState} from "react";
import Row from "./Row.jsx"
import "./App.css"

const App = () => {
  const targetWord = "REACT";
  const [guesses, setGuesses] = useState([]);
  const [currentGuess, setCurrentGuess] = useState("");
  const maxAttempts = 6;
  const [isGameOver, setIsGameOver] = useState(false);

  const handleInputChange = (event) => {
    setCurrentGuess(event.target.value.toUpperCase());
  }
  
  const handleGuess = () => {
    if (currentGuess.length !== 5 )
      return
    const updatedGuesses = [...guesses , currentGuess];
    setGuesses(updatedGuesses);
    if ((currentGuess === targetWord) || (updatedGuesses.length >= maxAttempts))
      setIsGameOver(true);

  }

  return (
    <div className="main-container">
      <h1>Wordle</h1>
      {guesses.map((guess, index) => (
        <div key={index}><Row guess={guess} targetWord={targetWord} /></div>
      ))}
      <br />
      {!isGameOver && (
        <>
          <input placeholder="Enter your guess" onChange={handleInputChange} maxLength={targetWord.length} />
          <br />
          <button onClick={handleGuess} >Guess</button> 
        </>
      )}
      {isGameOver && currentGuess !== targetWord && (
        <p>The word was: {targetWord}</p>
      )}
    </div>
  );
};

export default App;
