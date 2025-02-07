import { LineSegment } from "@phosphor-icons/react";

export function OneMove() {
  return (
    <div className="min-w-8 min-h-8 relative opacity-15">
      <LineSegment className="absolute top-0 size-9" />
    </div>
  );
}

export function TwoMove() {
  return (
    <div className="min-w-8 min-h-8 relative opacity-15">
      <LineSegment className="absolute top-0 size-9" />
      <LineSegment className="absolute top-0 size-9 rotate-90" />
    </div>
  );
}

export function TheeMove() {
  return (
    <div className="min-w-8 min-h-8 relative opacity-15">
      <LineSegment className="absolute top-0 size-9" />
      <LineSegment className="absolute top-0 size-9 rotate-90" />
      <LineSegment className="absolute top-1.5 left-1.5 size-6 rotate-45" />
    </div>
  );
}
