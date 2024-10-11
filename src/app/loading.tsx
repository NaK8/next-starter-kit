import { CircularProgress } from "@nextui-org/react";

export default function Loading() {
  return (
    <CircularProgress
      aria-label="loading progress page"
      className="mx-auto"
      classNames={{
        svg: "h-36 w-36 drop-shadow-md",
        indicator: "stroke-white",
        track: "stroke-white/10",
        value: "text-3xl font-semibold text-white",
      }}
    />
  );
}
