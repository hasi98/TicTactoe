import React from 'react'

function StatusMessage({winner, isXNext, squares}) {

    const noMOvesLeft = squares.every((sqaureValue) => sqaureValue !== null)

    const nextPlayer = isXNext ? 'X' : 'O'

    const renderStatusMessage = () => {
        if(winner) {
            return <>Winner is <span className={winner === "X" ? 'text-orange' : 'text-green'}> {winner}</span></>
        }

        if(!winner && noMOvesLeft){
            return <><span className='text-orange'>O</span> and <span className='text-green'>X</span></>
        }

        if(!winner && !noMOvesLeft) {
            return <>Next Player is <span className={isXNext ? 'text-orange' : 'text-green'}> {nextPlayer}</span></>
        }

        return null;
    }



  return (
    <div className='status-message'>
      {
        renderStatusMessage()
      }
    </div>
  )
}

export default StatusMessage
