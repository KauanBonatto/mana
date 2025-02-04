import { useEffect, useState } from "react";
import { useParams } from "react-router";

interface Board {
  quantityMove: number;
}

const Game = () => {
  const [board, setBoard] = useState<Board[][]>([]);
  const { gameId } = useParams();

  function createManaBoard() {
    const newBoard = [];

    for (let row = 0; row < 6; row++) {
      const newRow = [];

      for (let column = 0; column < 6; column++) {
        const square = {
          quantityMove: 1,
        };
        newRow.push(square);
      }
      newBoard.push(newRow);
    }
    setBoard(newBoard);
  }

  useEffect(() => {
    createManaBoard();
  }, []);

  return (
    <div className="h-dvh w-screen bg-purple-400">
      <div className="w-full h-full flex p-4">
        <div className="flex flex-col w-2/3">
          <div className="flex flex-none">
            <img
              width={50}
              src="https://img.freepik.com/vetores-gratis/gradiente-azul-do-utilizador_78370-4692.jpg?semt=ais_hybrid"
              alt="Fulano"
            />
            <p>Fulano</p>
          </div>
          <div className="mana-board w-full flex flex-col bg-purple-800 flex-grow max-h-full">
            <div className="relative w-full h-full max-h-full">
              <table className="w-auto h-full aspect-square bg-amber-300">
                <tbody>
                  {board.map((row, rowIndex) => (
                    <tr key={`row-${rowIndex}`} className="row flex">
                      {row.map((column, columnIndex) => (
                        <td key={`column-${columnIndex}`} className="column">
                          <div className="square w-full h-full">
                            <p>{column.quantityMove}</p>
                          </div>
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="flex flex-none">
            <img
              width={50}
              src="https://img.freepik.com/vetores-gratis/gradiente-azul-do-utilizador_78370-4692.jpg?semt=ais_hybrid"
              alt="Ciclano"
            />
            <p>Ciclano</p>
          </div>
        </div>
        <div className="w-1/3">
          <h1 className="text-white">{`GameID is: ${gameId}`}</h1>
        </div>
      </div>
    </div>
  );
};

export default Game;
