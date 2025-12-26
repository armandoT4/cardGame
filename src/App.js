
import './App.css';
import { createDeck, shuffleDeck, drawDeck, getDeckLength, pushCard } from './store/deckStore'
import React, { useState, useEffect, useRef } from 'react';
function App() {
  useEffect(() => {
    createDeck();
    shuffleDeck();
    console.log(getDeckLength())
    const _board = [];
    for (let i = 0; i < 4; i++) {
      _board[i] = drawDeck()
    }
    setBoard(_board)
    setCard(drawDeck());
    console.log(getDeckLength())
  }, [])
  const [card, setCard] = useState({})
  const [board, setBoard] = useState([])
  const [points, setPoints] = useState(0)
  const [valuta, setValuta] = useState(3)
  const handleClick = () => {
    if (valuta === 0) { return }
    pushCard(card)
    setCard(drawDeck());
    setValuta(prev => prev - 1)
  }
  const handlePlay = (_card) => {
    if (_card.cardValue === card?.cardValue) {
      var deckLength = getDeckLength();
      setValuta(prev => prev + 2)
      if (deckLength > 0) {
        setBoard(prev =>
          prev.map(c => (c === _card ? drawDeck() : c))
        );
      } else {
        setBoard(prev =>
          prev.map(c => (c === null ? drawDeck() : c))
        );
      }
      deckLength = getDeckLength()
      if (deckLength > 0) {
        setCard(drawDeck());
      } else setCard(null)
    }
    if (_card.cardSeed === card.cardSeed) {

      const result = _card.cardValue - card?.cardValue
      var deckLength = getDeckLength();
      setPoints(prev => prev + result)
      if (deckLength > 0) {
        setBoard(prev =>
          prev.map(c => (c === _card ? drawDeck() : c))
        );
      } else {
        setBoard(prev =>
          prev.map(c => (c === null ? drawDeck() : c))
        );
      }
      deckLength = getDeckLength()
      if (deckLength > 0) {
        setCard(drawDeck());
      } else setCard(null)
    }

  }

  return (
    <div className="App">
      <div className='board'>
        {board.map((card) => <button onClick={() => handlePlay(card)} className='card'>{card?.cardValue}{card?.cardSeed}</button>)}
      </div>
      <div className='card'>{card?.cardValue}{card?.cardSeed}</div>
      <button onClick={handleClick}>compra nuova carta</button>
      <div className='card'>valuta:{valuta}</div>
      <div className='card'>punti:{points}</div>
      <div className='card'>carte rimanenti:{getDeckLength()}</div>
    </div>
  );
}

export default App;
