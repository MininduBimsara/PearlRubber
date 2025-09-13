// components/InfoMarker.tsx
interface InfoMarkerProps {
  position: string;
  text: string;
  side: "left" | "right";
}

export function InfoMarker({ position, text, side }: InfoMarkerProps) {
  return (
    <div className={`absolute ${position} z-10 transform -translate-y-1/2`}>
      <div className="glass-panel px-4 py-3 text-sm font-semibold text-slate-800 whitespace-nowrap relative">
        {text}
        <div
          className={`absolute top-1/2 -translate-y-1/2 w-2 h-2 bg-green-700 rounded-full ${
            side === "left" ? "-left-3" : "-right-3"
          }`}
        />
      </div>
    </div>
  );
}
