export type pieceColor = 'BLACK' | 'WHITE';

export interface ManaBoardProps {
  quantityMove: number;
  piece: piece | null;
  className: string;
}

type piece = {
  type: 'RONIN' | 'DAIMYO';
  color: pieceColor;
};

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
      className: 'bg-[url(./assets/move-2.svg)] bg-no-repeat bg-cover',
    },
    {
      quantityMove: 3,
      piece: { type: 'RONIN', color: 'BLACK' },
      className: 'bg-[url(./assets/move-3.svg)] bg-no-repeat bg-cover',
    },
    {
      quantityMove: 1,
      piece: { type: 'RONIN', color: 'BLACK' },
      className: 'bg-[url(./assets/move-1.svg)] bg-no-repeat bg-cover',
    },
    {
      quantityMove: 2,
      piece: { type: 'DAIMYO', color: 'BLACK' },
      className: 'bg-[url(./assets/move-2.svg)] bg-no-repeat bg-cover',
    },
    {
      quantityMove: 2,
      piece: { type: 'RONIN', color: 'BLACK' },
      className: 'bg-[url(./assets/move-2.svg)] bg-no-repeat bg-cover',
    },
    {
      quantityMove: 3,
      piece: { type: 'RONIN', color: 'BLACK' },
      className: 'bg-[url(./assets/move-3.svg)] bg-no-repeat bg-cover',
    },
  ],
  [
    {
      quantityMove: 2,
      piece: null,
      className: 'bg-[url(./assets/move-2.svg)] bg-no-repeat bg-cover',
    },
    {
      quantityMove: 1,
      piece: null,
      className: 'bg-[url(./assets/move-1.svg)] bg-no-repeat bg-cover',
    },
    {
      quantityMove: 3,
      piece: null,
      className: 'bg-[url(./assets/move-3.svg)] bg-no-repeat bg-cover',
    },
    {
      quantityMove: 1,
      piece: null,
      className: 'bg-[url(./assets/move-1.svg)] bg-no-repeat bg-cover',
    },
    {
      quantityMove: 3,
      piece: null,
      className: 'bg-[url(./assets/move-3.svg)] bg-no-repeat bg-cover',
    },
    {
      quantityMove: 1,
      piece: null,
      className: 'bg-[url(./assets/move-1.svg)] bg-no-repeat bg-cover',
    },
  ],
  [
    {
      quantityMove: 1,
      piece: null,
      className: 'bg-[url(./assets/move-1.svg)] bg-no-repeat bg-cover',
    },
    {
      quantityMove: 3,
      piece: null,
      className: 'bg-[url(./assets/move-3.svg)] bg-no-repeat bg-cover',
    },
    {
      quantityMove: 2,
      piece: null,
      className: 'bg-[url(./assets/move-2.svg)] bg-no-repeat bg-cover',
    },
    {
      quantityMove: 3,
      piece: null,
      className: 'bg-[url(./assets/move-3.svg)] bg-no-repeat bg-cover',
    },
    {
      quantityMove: 1,
      piece: null,
      className: 'bg-[url(./assets/move-1.svg)] bg-no-repeat bg-cover',
    },
    {
      quantityMove: 2,
      piece: null,
      className: 'bg-[url(./assets/move-2.svg)] bg-no-repeat bg-cover',
    },
  ],
  [
    {
      quantityMove: 3,
      piece: null,
      className: 'bg-[url(./assets/move-3.svg)] bg-no-repeat bg-cover',
    },
    {
      quantityMove: 1,
      piece: null,
      className: 'bg-[url(./assets/move-1.svg)] bg-no-repeat bg-cover',
    },
    {
      quantityMove: 2,
      piece: null,
      className: 'bg-[url(./assets/move-2.svg)] bg-no-repeat bg-cover',
    },
    {
      quantityMove: 1,
      piece: null,
      className: 'bg-[url(./assets/move-1.svg)] bg-no-repeat bg-cover',
    },
    {
      quantityMove: 3,
      piece: null,
      className: 'bg-[url(./assets/move-3.svg)] bg-no-repeat bg-cover',
    },
    {
      quantityMove: 2,
      piece: null,
      className: 'bg-[url(./assets/move-2.svg)] bg-no-repeat bg-cover',
    },
  ],
  [
    {
      quantityMove: 2,
      piece: null,
      className: 'bg-[url(./assets/move-2.svg)] bg-no-repeat bg-cover',
    },
    {
      quantityMove: 3,
      piece: null,
      className: 'bg-[url(./assets/move-3.svg)] bg-no-repeat bg-cover',
    },
    {
      quantityMove: 1,
      piece: null,
      className: 'bg-[url(./assets/move-1.svg)] bg-no-repeat bg-cover',
    },
    {
      quantityMove: 3,
      piece: null,
      className: 'bg-[url(./assets/move-3.svg)] bg-no-repeat bg-cover',
    },
    {
      quantityMove: 1,
      piece: null,
      className: 'bg-[url(./assets/move-1.svg)] bg-no-repeat bg-cover',
    },
    {
      quantityMove: 3,
      piece: null,
      className: 'bg-[url(./assets/move-3.svg)] bg-no-repeat bg-cover',
    },
  ],
  [
    {
      quantityMove: 2,
      piece: { type: 'RONIN', color: 'WHITE' },
      className: 'bg-[url(./assets/move-2.svg)] bg-no-repeat bg-cover',
    },
    {
      quantityMove: 1,
      piece: { type: 'RONIN', color: 'WHITE' },
      className: 'bg-[url(./assets/move-1.svg)] bg-no-repeat bg-cover',
    },
    {
      quantityMove: 3,
      piece: { type: 'RONIN', color: 'WHITE' },
      className: 'bg-[url(./assets/move-3.svg)] bg-no-repeat bg-cover',
    },
    {
      quantityMove: 2,
      piece: { type: 'DAIMYO', color: 'WHITE' },
      className: 'bg-[url(./assets/move-2.svg)] bg-no-repeat bg-cover',
    },
    {
      quantityMove: 2,
      piece: { type: 'RONIN', color: 'WHITE' },
      className: 'bg-[url(./assets/move-2.svg)] bg-no-repeat bg-cover',
    },
    {
      quantityMove: 1,
      piece: { type: 'RONIN', color: 'WHITE' },
      className: 'bg-[url(./assets/move-1.svg)] bg-no-repeat bg-cover',
    },
  ],
];
