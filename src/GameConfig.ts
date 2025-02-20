export interface ManaBoardProps {
  quantityMove: number;
  className: string;
}

declare global {
  interface Window {
    ManaBoard: ManaBoardProps[][];
  }
}

window.ManaBoard = [
  [
    { quantityMove: 1, className: "bg-[url(./assets/move-1.svg)] bg-no-repeat bg-cover" },
    { quantityMove: 2, className: "bg-[url(./assets/move-2.svg)] bg-no-repeat bg-cover" },
    { quantityMove: 2, className: "bg-[url(./assets/move-2.svg)] bg-no-repeat bg-cover" },
    { quantityMove: 3, className: "bg-[url(./assets/move-3.svg)] bg-no-repeat bg-cover" },
    { quantityMove: 1, className: "bg-[url(./assets/move-1.svg)] bg-no-repeat bg-cover" },
    { quantityMove: 2, className: "bg-[url(./assets/move-2.svg)] bg-no-repeat bg-cover" },
  ],
  [
    { quantityMove: 3, className: "bg-[url(./assets/move-3.svg)] bg-no-repeat bg-cover" },
    { quantityMove: 1, className: "bg-[url(./assets/move-1.svg)] bg-no-repeat bg-cover" },
    { quantityMove: 3, className: "bg-[url(./assets/move-3.svg)] bg-no-repeat bg-cover" },
    { quantityMove: 1, className: "bg-[url(./assets/move-1.svg)] bg-no-repeat bg-cover" },
    { quantityMove: 3, className: "bg-[url(./assets/move-3.svg)] bg-no-repeat bg-cover" },
    { quantityMove: 2, className: "bg-[url(./assets/move-2.svg)] bg-no-repeat bg-cover" },
  ],
  [
    { quantityMove: 2, className: "bg-[url(./assets/move-2.svg)] bg-no-repeat bg-cover" },
    { quantityMove: 3, className: "bg-[url(./assets/move-3.svg)] bg-no-repeat bg-cover" },
    { quantityMove: 1, className: "bg-[url(./assets/move-1.svg)] bg-no-repeat bg-cover" },
    { quantityMove: 2, className: "bg-[url(./assets/move-2.svg)] bg-no-repeat bg-cover" },
    { quantityMove: 1, className: "bg-[url(./assets/move-1.svg)] bg-no-repeat bg-cover" },
    { quantityMove: 3, className: "bg-[url(./assets/move-3.svg)] bg-no-repeat bg-cover" },
  ],
  [
    { quantityMove: 2, className: "bg-[url(./assets/move-2.svg)] bg-no-repeat bg-cover" },
    { quantityMove: 1, className: "bg-[url(./assets/move-1.svg)] bg-no-repeat bg-cover" },
    { quantityMove: 3, className: "bg-[url(./assets/move-3.svg)] bg-no-repeat bg-cover" },
    { quantityMove: 2, className: "bg-[url(./assets/move-2.svg)] bg-no-repeat bg-cover" },
    { quantityMove: 3, className: "bg-[url(./assets/move-3.svg)] bg-no-repeat bg-cover" },
    { quantityMove: 1, className: "bg-[url(./assets/move-1.svg)] bg-no-repeat bg-cover" },
  ],
  [
    { quantityMove: 1, className: "bg-[url(./assets/move-1.svg)] bg-no-repeat bg-cover" },
    { quantityMove: 3, className: "bg-[url(./assets/move-3.svg)] bg-no-repeat bg-cover" },
    { quantityMove: 1, className: "bg-[url(./assets/move-1.svg)] bg-no-repeat bg-cover" },
    { quantityMove: 3, className: "bg-[url(./assets/move-3.svg)] bg-no-repeat bg-cover" },
    { quantityMove: 1, className: "bg-[url(./assets/move-1.svg)] bg-no-repeat bg-cover" },
    { quantityMove: 2, className: "bg-[url(./assets/move-2.svg)] bg-no-repeat bg-cover" },
  ],
  [
    { quantityMove: 3, className: "bg-[url(./assets/move-3.svg)] bg-no-repeat bg-cover" },
    { quantityMove: 2, className: "bg-[url(./assets/move-2.svg)] bg-no-repeat bg-cover" },
    { quantityMove: 2, className: "bg-[url(./assets/move-2.svg)] bg-no-repeat bg-cover" },
    { quantityMove: 1, className: "bg-[url(./assets/move-1.svg)] bg-no-repeat bg-cover" },
    { quantityMove: 3, className: "bg-[url(./assets/move-3.svg)] bg-no-repeat bg-cover" },
    { quantityMove: 2, className: "bg-[url(./assets/move-2.svg)] bg-no-repeat bg-cover" },
  ],
];
