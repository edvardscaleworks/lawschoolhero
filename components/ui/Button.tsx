import { cn } from "@/lib/utils";
import Link from "next/link";

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  className?: string;
}

export default function Button({
  href,
  onClick,
  variant = "primary",
  size = "md",
  children,
  className,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center font-medium tracking-wide transition-all duration-200 cursor-pointer select-none";

  const variants = {
    primary:
      "bg-white text-black hover:bg-white/90 active:bg-white/80",
    ghost:
      "border border-white/20 text-white hover:border-white/50 hover:bg-white/5",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm rounded-full",
    md: "px-6 py-3 text-sm rounded-full",
    lg: "px-8 py-4 text-base rounded-full",
  };

  const classes = cn(base, variants[variant], sizes[size], className);

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
