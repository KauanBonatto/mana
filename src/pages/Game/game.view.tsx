import { useState } from 'react';
import { useParams } from 'react-router';

import MANA from '../../assets/pieces/mana.svg';
import RONIN from '../../assets/pieces/ronin.svg';
import DAIMYO from '../../assets/pieces/daimyo.svg';

import type { ManaBoardProps, PieceColorType, SquarePositionProps } from '../../GameConfig';

const GameView = () => {
  const { gameId } = useParams();
  const [board, setBoard] = useState<ManaBoardProps[][]>(window.ManaBoard);
  const [capturedPieces, setCapturedPieces] = useState({
    WHITE: [],
    BLACK: [],
  });
  const [selectedPiece, setSelectedPiece] = useState<SquarePositionProps | null>(null);
  const [currentPlayer, setCurrentPlayer] = useState<PieceColorType>('WHITE');
  const [lastQuantityMove, setLastQuantityMove] = useState<number | null>(null);

  const movePiece = (
    from: { row: number; col: number },
    to: { row: number; col: number },
  ) => {
    const piece = board[from.row][from.col].piece;
    if (!piece) return;

    const targetCell = board[to.row][to.col];
    if (targetCell.piece && targetCell.piece.color !== piece.color) {
      const capture = piece.color === 'WHITE' ? 'BLACK' : 'WHITE';
      setCapturedPieces((prevState) => ({
        ...prevState,
        [capture]: [...prevState[capture], targetCell.piece],
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
    if (selectedPiece && isValidMove(selectedPiece, { row, col })) {
      movePiece(selectedPiece, { row, col });
      setSelectedPiece(null);
      return;
    }

    if (selectedPiece?.row == row && selectedPiece.col == col) return setSelectedPiece(null);

    const piece = board[row][col].piece;
    if (piece && piece.color === currentPlayer) {
      setSelectedPiece({ row, col });
    }
  };

  return (
    <div className="h-dvh w-screen">
      <div className="flex h-full w-full p-4 ">
        <div className="flex w-full flex-col gap-4">
          <div className="flex flex-none gap-x-2 font-normal">
            <img
              width={50}
              src="https://img.freepik.com/vetores-gratis/gradiente-azul-do-utilizador_78370-4692.jpg?semt=ais_hybrid"
              alt="Fulano"
            />
            <p>Fulano</p>
          </div>
          <div className="mana-board flex-grow flex-col">
            <table className="aspect-square h-auto w-full sm:h-full sm:w-auto">
              <div className='w-full sm:h-full sm:w-auto p-6 bg-blue-300'>
                <tbody className="flex h-full flex-col bg-blue-400">
                  {board.map((row, rowIndex) => (
                    <tr key={`row-${rowIndex}`} className={`row flex flex-1 [&>*:nth-child(${(rowIndex + 1) % 2 ? 'odd' : '2n'})]:bg-blue-500`}>
                      {row.map((column, columnIndex) => (
                        <td
                          key={`column-${columnIndex}`}
                          className="column flex-1 p-0 cursor-pointer"
                        >
                          <div
                            className={`square flex h-full w-full items-center justify-center ${selectedPiece && selectedPiece?.row === rowIndex && selectedPiece?.col === columnIndex ? 'bg-blue-600/90' : ''} text-white ${column.className}`}
                            onClick={() => handleCellClick(rowIndex, columnIndex)}
                          >
                            {column.piece && (
                              <img
                                draggable={false}
                                alt={column.piece.type}
                                src={column.piece.type === 'RONIN' ? RONIN : DAIMYO}
                                className={`w-6 ${column.piece.color === 'BLACK' ? 'brightness-0' : ''}`}
                              />
                            )}
                          </div>
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </div>

              {lastQuantityMove && (
                <div className="flex justify-end items-center">
                  <div className='flex rounded-b-2xl gap-x-3 justify-center items-center px-4 bg-blue-600'>
                    <div
                      className={`h-13 w-13 bg-[url(./assets/move-${lastQuantityMove}.svg)] bg-cover bg-no-repeat`}
                    ></div>
                    <img draggable={false} src={MANA} className='w-5' alt='mana' />
                    </div>
                </div>
              )}
            </table>

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
