import { useParams } from 'react-router';

const Game = () => {
  const { gameId } = useParams();

  return (
    <h1>{`GameID is: ${gameId}`}</h1>
  );
};


export default Game;