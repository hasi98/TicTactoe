import './styles.scss'
import { useState } from 'react'
import Board from './components/Board'
import { calculateWinner } from './Winner';
import StatusMessage from './components/StatusMessage';

function App() {

  const [squares, setsquares] = useState( Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(false)

  const winner = calculateWinner(squares)


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
    <StatusMessage winner={winner} isXNext={isXNext} squares={squares}/>
    <Board squares={squares} handleSquareClick={handleSquareClick}/>
    </div>
  )
}

export default App
