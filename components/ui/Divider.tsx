import { cn } from "@/lib/utils";

export default function Divider({ className }: { className?: string }) {
  return (
    <div
      className={cn("w-full h-px bg-white/8", className)}
      style={{ backgroundColor: "rgba(255,255,255,0.08)" }}
    />
  );
}
