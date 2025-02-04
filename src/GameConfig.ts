export interface ManaBoardProps {
  quantityMove: number;
}

declare global {
  interface Window { ManaBoard: ManaBoardProps[][]; }
}

window.ManaBoard = [
  [{ quantityMove: 1 }, { quantityMove: 2 }, { quantityMove: 2 }, { quantityMove: 3 }, { quantityMove: 1 }, { quantityMove: 2 }],
  [{ quantityMove: 3 }, { quantityMove: 1 }, { quantityMove: 3 }, { quantityMove: 1 }, { quantityMove: 3 }, { quantityMove: 2 }],
  [{ quantityMove: 2 }, { quantityMove: 3 }, { quantityMove: 1 }, { quantityMove: 2 }, { quantityMove: 1 }, { quantityMove: 3 }],
  [{ quantityMove: 2 }, { quantityMove: 1 }, { quantityMove: 3 }, { quantityMove: 2 }, { quantityMove: 3 }, { quantityMove: 1 }],
  [{ quantityMove: 1 }, { quantityMove: 3 }, { quantityMove: 1 }, { quantityMove: 3 }, { quantityMove: 1 }, { quantityMove: 2 }],
  [{ quantityMove: 3 }, { quantityMove: 2 }, { quantityMove: 2 }, { quantityMove: 1 }, { quantityMove: 3 }, { quantityMove: 2 }],
];