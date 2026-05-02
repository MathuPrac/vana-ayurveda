import { Link } from "react-router-dom";
import { cn } from "@/utils/cn";

interface LogoProps {
  variant?: "dark" | "light";
  className?: string;
}

export function LotusIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      className={className}
      aria-hidden
    >
      <path
        d="M16 28c0 0-10-6-10-14a10 10 0 0 1 10-10 10 10 0 0 1 10 10c0 8-10 14-10 14z"
        stroke="currentColor"
        strokeWidth="1.4"
        fill="none"
      />
      <path
        d="M16 28c0 0-6-5-6-11a6 6 0 0 1 6-6 6 6 0 0 1 6 6c0 6-6 11-6 11z"
        stroke="currentColor"
        strokeWidth="1.2"
        fill="none"
        opacity="0.6"
      />
      <circle cx="16" cy="17" r="2" fill="currentColor" opacity="0.8" />
    </svg>
  );
}

export default function Logo({ variant = "dark", className }: LogoProps) {
  const textColor = variant === "light" ? "text-ivory" : "text-bark";
  const iconColor = variant === "light" ? "text-gold" : "text-sage-dark";

  return (
    <Link
      to="/"
      className={cn("flex items-center gap-2 group select-none", className)}
      aria-label="Vana Ayurveda — Home"
    >
      <LotusIcon className={cn("h-7 w-7 transition-transform group-hover:scale-105", iconColor)} />
      <span className={cn("font-display text-2xl tracking-tight leading-none", textColor)}>
        Vana <span className="font-script text-xl text-gold">Ayurveda</span>
      </span>
    </Link>
  );
}
