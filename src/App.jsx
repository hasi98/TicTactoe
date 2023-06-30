import './styles.scss'
import { useState } from 'react'
import Board from './components/Board'
import { calculateWinner } from './Winner';

function App() {

  const [squares, setsquares] = useState( Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(false)

  const winner = calculateWinner(squares)
  const nextPlayer = isXNext ? 'X' : 'O'
  const statusMessage = winner ? `Winner is ${winner}` : `Next player is ${nextPlayer}`

  const handleSquareClick = (clickedPosition) => {

    if (squares[clickedPosition] || winner) {
        return;
    }
    setsquares((currentSqaures) => {
        return currentSqaures.map((sqaureValue, position) => {

            if(clickedPosition === position) {
                return isXNext ? 'X' : 'O';
            }
            return sqaureValue;
        })
    })

    setIsXNext((currentIsXNext) => !currentIsXNext)
}
;

  return (
    <div className='app'>
    <h2>{statusMessage}</h2>
    <Board squares={squares} handleSquareClick={handleSquareClick}/>
    </div>
  )
}

export default App
