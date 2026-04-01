export default function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="inline-flex items-center px-3 py-1 text-xs rounded-full"
      style={{
        backgroundColor: "rgba(255,255,255,0.06)",
        color: "rgba(255,255,255,0.4)",
      }}
    >
      {children}
    </span>
  );
}
