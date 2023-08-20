
const StatusMessage = ({winner, isXNext, squares}) => {

  const noMovesLeft = squares.every(squareValue => squareValue !== null);

  const nextPlayer = isXNext ? 'X' : '0';


  const renderStatusMessage = () => {
    if(winner) {
      return <>Winner is <span className={ isXNext ? 'text-orange' : 'text-green'}>{winner}</span></>;
    }

    if(!winner && noMovesLeft) {
      return <><span className="text-green">0</span> and <span className="text-orange">X</span> tied</>;
    }

    if(!winner && !noMovesLeft) {
      return <>Next Player is <span className={ isXNext ? 'text-green' : 'text-orange'}>{nextPlayer}</span></>;
    }
    
    return null;
  };

  return <div className="status-message">{renderStatusMessage()}</div>
};

export default StatusMessage;
