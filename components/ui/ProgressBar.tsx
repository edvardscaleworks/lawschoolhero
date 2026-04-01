export default function ProgressBar({
  percent,
  className = "",
}: {
  percent: number;
  className?: string;
}) {
  return (
    <div
      className={`h-1 w-full rounded-full overflow-hidden ${className}`}
      style={{ backgroundColor: "rgba(255,255,255,0.08)" }}
    >
      <div
        className="h-full rounded-full transition-all duration-500"
        style={{
          width: `${Math.min(100, Math.max(0, percent))}%`,
          backgroundColor: "#ffffff",
        }}
      />
    </div>
  );
}
