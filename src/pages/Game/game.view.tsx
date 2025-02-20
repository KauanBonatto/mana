import { useState } from 'react';
import { useParams } from 'react-router';
import RONIN from '../../assets/pieces/ronin.svg';
import DAIMYO from '../../assets/pieces/daimyo.svg';
import MANA from '../../assets/pieces/mana.svg';
import type { ManaBoardProps, pieceColor } from '../../GameConfig';

const GameView = () => {
  const { gameId } = useParams();
  const [board, setBoard] = useState<ManaBoardProps[][]>(window.ManaBoard);
  const [capturedPieces, setCapturedPieces] = useState({
    WHITE: [],
    BLACK: [],
  });
  const [selectedPiece, setSelectedPiece] = useState<{
    row: number;
    col: number;
  } | null>(null);
  const [currentPlayer, setCurrentPlayer] = useState<pieceColor>('WHITE');
  const [lastQuantityMove, setLastQuantityMove] = useState<number | null>(null);

  const movePiece = (
    from: { row: number; col: number },
    to: { row: number; col: number },
  ) => {
    const piece = board[from.row][from.col].piece;
    if (!piece) return;

    const targetCell = board[to.row][to.col];
    if (targetCell.piece && targetCell.piece.color !== piece.color) {
      setCapturedPieces((prevState) => ({
        ...prevState,
        [piece.color === 'WHITE' ? 'BLACK' : 'WHITE']: [
          ...prevState[piece.color === 'WHITE' ? 'BLACK' : 'WHITE'],
          targetCell.piece,
        ],
      }));
    }

    const newBoard = [...board];
    newBoard[from.row][from.col].piece = null;
    newBoard[to.row][to.col].piece = piece;

    setBoard(newBoard);
    setCurrentPlayer(currentPlayer === 'WHITE' ? 'BLACK' : 'WHITE');
    setLastQuantityMove(newBoard[to.row][to.col].quantityMove);
  };

  const isValidMove = (
    from: { row: number; col: number },
    to: { row: number; col: number },
  ) => {
    const square = board[from.row][from.col];
    const targetCell = board[to.row][to.col];
    if (!square) return;

    if (currentPlayer === 'WHITE') {
      if (to.col < from.col) return false;
    } else if (from.col < to.col) return false;

    /* const rowStep = to.row > from.row ? 1 : to.row < from.row ? -1 : 0;
    const colStep = to.col > from.col ? 1 : to.col < from.col ? -1 : 0;

    let currentRow = from.row + rowStep;
    let currentCol = from.col + colStep;

    while (currentRow !== to.row || currentCol !== to.col) {
      if (board[currentRow][currentCol].piece) {
        return false;
      }
      currentRow += rowStep;
      currentCol += colStep;
    } */
    const moveDistance =
      Math.abs(to.row - from.row) + Math.abs(to.col - from.col);
    if (moveDistance !== square.quantityMove) return false;

    if (targetCell.piece && targetCell.piece.color === square.piece?.color)
      return false;

    return true;
  };

  const handleCellClick = (row: number, col: number) => {
    if (selectedPiece) {
      const validMove = isValidMove(selectedPiece, { row, col });
      if (validMove) {
        movePiece(selectedPiece, { row, col });
      }
      setSelectedPiece(null);
    } else {
      const piece = board[row][col].piece;
      if (piece && piece.color === currentPlayer) {
        setSelectedPiece({ row, col });
      }
    }
  };

  return (
    <div className="h-dvh w-screen bg-blue-500">
      <div className="flex h-full w-full p-4">
        <div className="flex w-full flex-col md:w-2/3">
          <div className="flex flex-none gap-x-2 font-normal">
            <img
              width={50}
              src="https://img.freepik.com/vetores-gratis/gradiente-azul-do-utilizador_78370-4692.jpg?semt=ais_hybrid"
              alt="Fulano"
            />
            <p>Fulano</p>
          </div>
          <div className="mana-board flex max-h-full w-full flex-grow flex-col bg-blue-800">
            <div className="relative h-full max-h-full w-full">
              <table className="aspect-square h-auto w-full bg-white sm:h-full sm:w-auto">
                <tbody className="flex h-full flex-col">
                  {board.map((row, rowIndex) => (
                    <tr key={`row-${rowIndex}`} className="row flex flex-1">
                      {row.map((column, columnIndex) => (
                        <td
                          key={`column-${columnIndex}`}
                          className="column flex-1 p-0"
                        >
                          <div
                            className={`square flex h-full w-full items-center justify-center bg-blue-900 ${selectedPiece && selectedPiece?.row === rowIndex && selectedPiece?.col === columnIndex ? 'bg-blue-900/90' : ''} text-white ${column.className}`}
                            onClick={() =>
                              handleCellClick(rowIndex, columnIndex)
                            }
                          >
                            {column.piece && (
                              <img
                                src={
                                  column.piece.type === 'RONIN' ? RONIN : DAIMYO
                                }
                                className={`w-5 ${column.piece.color === 'BLACK' ? 'brightness-0' : ''}`}
                                alt={column.piece.type}
                              />
                            )}
                          </div>
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="flex justify-between">
            <div className="flex flex-none gap-x-2 font-normal">
              <img
                width={50}
                src="https://img.freepik.com/vetores-gratis/gradiente-azul-do-utilizador_78370-4692.jpg?semt=ais_hybrid"
                alt="Ciclano"
              />
              <p>Ciclano</p>
            </div>
            {lastQuantityMove && (
              <div className="flex items-center gap-x-3 rounded-b-2xl bg-blue-600 px-4">
                <div
                  className={`h-full w-13 bg-[url(./assets/move-${lastQuantityMove}.svg)] bg-cover bg-no-repeat`}
                ></div>
                <img src={MANA} className={`w-5`} alt={'mana'} />
              </div>
            )}
          </div>
        </div>
        <div className="hidden md:w-1/3">
          <h1 className="text-white">{`GameID is: ${gameId}`}</h1>
        </div>
      </div>
    </div>
  );
};

export default GameView;
