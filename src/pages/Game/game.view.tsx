import { useState } from "react";
import { useParams } from "react-router";

import type { ManaBoardProps } from "../../GameConfig";

const GameView = () => {
  const { gameId } = useParams();

  const [board, setBoard] = useState<ManaBoardProps[][]>(window.ManaBoard);

  return (
    <div className="h-dvh w-screen bg-purple-400">
      <div className="w-full h-full flex p-4">
        <div className="flex flex-col w-full md:w-2/3">
          <div className="flex flex-none gap-x-2 font-normal">
            <img
              width={50}
              src="https://img.freepik.com/vetores-gratis/gradiente-azul-do-utilizador_78370-4692.jpg?semt=ais_hybrid"
              alt="Fulano"
            />
            <p>Fulano</p>
          </div>
          <div className="mana-board w-full flex flex-col bg-purple-800 flex-grow max-h-full">
            <div className="relative w-full h-full max-h-full">
              <table className="h-auto w-full sm:w-auto sm:h-full aspect-square bg-amber-300">
                <tbody className="flex flex-col h-full">
                  {board.map((row, rowIndex) => (
                    <tr key={`row-${rowIndex}`} className="row flex flex-1">
                      {row.map((column, columnIndex) => (
                        <td
                          key={`column-${columnIndex}`}
                          className="column flex-1 p-0"
                        >
                          <div className="square w-full h-full flex items-center justify-center">
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
          <div className="flex flex-none gap-x-2 font-normal">
            <img
              width={50}
              src="https://img.freepik.com/vetores-gratis/gradiente-azul-do-utilizador_78370-4692.jpg?semt=ais_hybrid"
              alt="Ciclano"
            />
            <p>Ciclano</p>
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
