export type PieceColorType = 'BLACK' | 'WHITE';

export interface ManaBoardProps {
  piece: PieceProps | null;
  quantityMove: number;
  className: string;
}

interface PieceProps {
  type: 'RONIN' | 'DAIMYO';
  color: PieceColorType;
};

export interface SquarePositionProps {
  row: number;
  col: number;
}

declare global {
  interface Window {
    ManaBoard: ManaBoardProps[][];
  }
}

window.ManaBoard = [
  [
    {
      quantityMove: 2,
      piece: { type: 'RONIN', color: 'BLACK' },
      className: 'bg-[url(./assets/move-2.svg)] bg-no-repeat bg-[auto_85%] bg-center',
    },
    {
      quantityMove: 3,
      piece: { type: 'RONIN', color: 'BLACK' },
      className: 'bg-[url(./assets/move-3.svg)] bg-no-repeat bg-[auto_85%] bg-center',
    },
    {
      quantityMove: 1,
      piece: { type: 'RONIN', color: 'BLACK' },
      className: 'bg-[url(./assets/move-1.svg)] bg-no-repeat bg-[auto_85%] bg-center',
    },
    {
      quantityMove: 2,
      piece: { type: 'DAIMYO', color: 'BLACK' },
      className: 'bg-[url(./assets/move-2.svg)] bg-no-repeat bg-[auto_85%] bg-center',
    },
    {
      quantityMove: 2,
      piece: { type: 'RONIN', color: 'BLACK' },
      className: 'bg-[url(./assets/move-2.svg)] bg-no-repeat bg-[auto_85%] bg-center',
    },
    {
      quantityMove: 3,
      piece: { type: 'RONIN', color: 'BLACK' },
      className: 'bg-[url(./assets/move-3.svg)] bg-no-repeat bg-[auto_85%] bg-center',
    },
  ],
  [
    {
      quantityMove: 2,
      piece: null,
      className: 'bg-[url(./assets/move-2.svg)] bg-no-repeat bg-[auto_85%] bg-center',
    },
    {
      quantityMove: 1,
      piece: null,
      className: 'bg-[url(./assets/move-1.svg)] bg-no-repeat bg-[auto_85%] bg-center',
    },
    {
      quantityMove: 3,
      piece: null,
      className: 'bg-[url(./assets/move-3.svg)] bg-no-repeat bg-[auto_85%] bg-center',
    },
    {
      quantityMove: 1,
      piece: null,
      className: 'bg-[url(./assets/move-1.svg)] bg-no-repeat bg-[auto_85%] bg-center',
    },
    {
      quantityMove: 3,
      piece: null,
      className: 'bg-[url(./assets/move-3.svg)] bg-no-repeat bg-[auto_85%] bg-center',
    },
    {
      quantityMove: 1,
      piece: null,
      className: 'bg-[url(./assets/move-1.svg)] bg-no-repeat bg-[auto_85%] bg-center',
    },
  ],
  [
    {
      quantityMove: 1,
      piece: null,
      className: 'bg-[url(./assets/move-1.svg)] bg-no-repeat bg-[auto_85%] bg-center',
    },
    {
      quantityMove: 3,
      piece: null,
      className: 'bg-[url(./assets/move-3.svg)] bg-no-repeat bg-[auto_85%] bg-center',
    },
    {
      quantityMove: 2,
      piece: null,
      className: 'bg-[url(./assets/move-2.svg)] bg-no-repeat bg-[auto_85%] bg-center',
    },
    {
      quantityMove: 3,
      piece: null,
      className: 'bg-[url(./assets/move-3.svg)] bg-no-repeat bg-[auto_85%] bg-center',
    },
    {
      quantityMove: 1,
      piece: null,
      className: 'bg-[url(./assets/move-1.svg)] bg-no-repeat bg-[auto_85%] bg-center',
    },
    {
      quantityMove: 2,
      piece: null,
      className: 'bg-[url(./assets/move-2.svg)] bg-no-repeat bg-[auto_85%] bg-center',
    },
  ],
  [
    {
      quantityMove: 3,
      piece: null,
      className: 'bg-[url(./assets/move-3.svg)] bg-no-repeat bg-[auto_85%] bg-center',
    },
    {
      quantityMove: 1,
      piece: null,
      className: 'bg-[url(./assets/move-1.svg)] bg-no-repeat bg-[auto_85%] bg-center',
    },
    {
      quantityMove: 2,
      piece: null,
      className: 'bg-[url(./assets/move-2.svg)] bg-no-repeat bg-[auto_85%] bg-center',
    },
    {
      quantityMove: 1,
      piece: null,
      className: 'bg-[url(./assets/move-1.svg)] bg-no-repeat bg-[auto_85%] bg-center',
    },
    {
      quantityMove: 3,
      piece: null,
      className: 'bg-[url(./assets/move-3.svg)] bg-no-repeat bg-[auto_85%] bg-center',
    },
    {
      quantityMove: 2,
      piece: null,
      className: 'bg-[url(./assets/move-2.svg)] bg-no-repeat bg-[auto_85%] bg-center',
    },
  ],
  [
    {
      quantityMove: 2,
      piece: null,
      className: 'bg-[url(./assets/move-2.svg)] bg-no-repeat bg-[auto_85%] bg-center',
    },
    {
      quantityMove: 3,
      piece: null,
      className: 'bg-[url(./assets/move-3.svg)] bg-no-repeat bg-[auto_85%] bg-center',
    },
    {
      quantityMove: 1,
      piece: null,
      className: 'bg-[url(./assets/move-1.svg)] bg-no-repeat bg-[auto_85%] bg-center',
    },
    {
      quantityMove: 3,
      piece: null,
      className: 'bg-[url(./assets/move-3.svg)] bg-no-repeat bg-[auto_85%] bg-center',
    },
    {
      quantityMove: 1,
      piece: null,
      className: 'bg-[url(./assets/move-1.svg)] bg-no-repeat bg-[auto_85%] bg-center',
    },
    {
      quantityMove: 3,
      piece: null,
      className: 'bg-[url(./assets/move-3.svg)] bg-no-repeat bg-[auto_85%] bg-center',
    },
  ],
  [
    {
      quantityMove: 2,
      piece: { type: 'RONIN', color: 'WHITE' },
      className: 'bg-[url(./assets/move-2.svg)] bg-no-repeat bg-[auto_85%] bg-center',
    },
    {
      quantityMove: 1,
      piece: { type: 'RONIN', color: 'WHITE' },
      className: 'bg-[url(./assets/move-1.svg)] bg-no-repeat bg-[auto_85%] bg-center',
    },
    {
      quantityMove: 3,
      piece: { type: 'RONIN', color: 'WHITE' },
      className: 'bg-[url(./assets/move-3.svg)] bg-no-repeat bg-[auto_85%] bg-center',
    },
    {
      quantityMove: 2,
      piece: { type: 'DAIMYO', color: 'WHITE' },
      className: 'bg-[url(./assets/move-2.svg)] bg-no-repeat bg-[auto_85%] bg-center',
    },
    {
      quantityMove: 2,
      piece: { type: 'RONIN', color: 'WHITE' },
      className: 'bg-[url(./assets/move-2.svg)] bg-no-repeat bg-[auto_85%] bg-center',
    },
    {
      quantityMove: 1,
      piece: { type: 'RONIN', color: 'WHITE' },
      className: 'bg-[url(./assets/move-1.svg)] bg-no-repeat bg-[auto_85%] bg-center',
    },
  ],
];
