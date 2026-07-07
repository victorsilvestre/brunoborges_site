import { ArrowRight } from "lucide-react";
import type { CSSProperties, ReactNode } from "react";

export const HOTMART_URL = "https://pay.hotmart.com/S106637152G";

interface CTAButtonProps {
  label: string;
  variant?: "lime" | "dark" | "outline";
  className?: string;
  style?: CSSProperties;
  iconClassName?: string;
  hoverScaleClassName?: string;
  roundedClassName?: string;
  paddingClassName?: string;
  textSizeClassName?: string;
  contentClassName?: string;
  children?: ReactNode;
}

export function CTAButton({
  label,
  variant = "lime",
  className = "",
  style,
  iconClassName = "w-5 h-5 group-hover:translate-x-1 transition-transform",
  hoverScaleClassName = "hover:scale-[1.03]",
  roundedClassName = "rounded-xl",
  paddingClassName = "px-8 py-4",
  textSizeClassName = "text-sm",
  contentClassName,
  children,
}: CTAButtonProps) {
  const variants: Record<string, CSSProperties> = {
    lime: { background: "#BFEA24", color: "#0C0D0E" },
    dark: { background: "#0C0D0E", color: "#BFEA24" },
    outline: {
      background: "transparent",
      color: "#BFEA24",
      border: "1px solid rgba(191,234,36,0.4)",
    },
  };

  const content = (
    <>
      {label}
      <ArrowRight className={iconClassName} />
    </>
  );

  return (
    <a
      href={HOTMART_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-3 ${paddingClassName} ${roundedClassName} font-display font-black ${textSizeClassName} uppercase tracking-wider transition-all duration-300 group ${hoverScaleClassName} ${className}`}
      style={style ?? variants[variant]}
    >
      {contentClassName ? (
        <span className={contentClassName}>{content}</span>
      ) : (
        content
      )}
      {children}
    </a>
  );
}
