import { cn } from "./utils";
import { ArrowRight, LucideIcon } from "lucide-react";
import { Button } from "./button";

// Design System Constants
export const DESIGN_TOKENS = {
  // Shadows
  shadow: {
    sm: "shadow-sm",
    md: "shadow-md",
    lg: "shadow-lg shadow-black/5",
    xl: "shadow-xl shadow-black/5",
    "2xl": "shadow-2xl shadow-black/10",
  },
  // Rounded corners
  rounded: {
    sm: "rounded-lg",
    md: "rounded-xl",
    lg: "rounded-2xl",
    xl: "rounded-3xl",
    full: "rounded-full",
  },
  // Transitions
  transition: {
    base: "transition-all duration-300 ease-out",
    fast: "transition-all duration-150 ease-out",
    slow: "transition-all duration-500 ease-out",
  },
  // Hover effects
  hover: {
    lift: "hover:-translate-y-1",
    scale: "hover:scale-[1.02]",
    glow: "hover:shadow-xl hover:shadow-eterna-3/10",
  },
};

// Unified Card Component
interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "glass" | "dark" | "bordered";
  hover?: boolean;
  onClick?: () => void;
}

export function Card({ children, className, variant = "default", hover = false, onClick }: CardProps) {
  const variantStyles = {
    default: "bg-white border border-slate-100",
    glass: "bg-white/80 backdrop-blur-xl border border-white/20",
    dark: "bg-eterna-3 border border-eterna-3",
    bordered: "bg-white border-2 border-slate-200",
  };

  return (
    <div
      onClick={onClick}
      className={cn(
        "rounded-2xl overflow-hidden",
        variantStyles[variant],
        DESIGN_TOKENS.shadow.lg,
        DESIGN_TOKENS.transition.base,
        hover && "cursor-pointer hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/10",
        className
      )}
    >
      {children}
    </div>
  );
}

// Unified CTA Button Component
interface CTAButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "white";
  size?: "sm" | "md" | "lg";
  icon?: LucideIcon;
  iconPosition?: "left" | "right";
  className?: string;
  onClick?: () => void;
}

export function CTAButton({
  children,
  variant = "primary",
  size = "md",
  icon: Icon,
  iconPosition = "right",
  className,
  onClick,
}: CTAButtonProps) {
  const variantStyles = {
    primary: "bg-eterna-3 text-white hover:bg-eterna-3/90 shadow-lg shadow-eterna-3/20 hover:shadow-xl hover:shadow-eterna-3/30",
    secondary: "bg-white text-eterna-3 hover:bg-slate-50 shadow-md hover:shadow-lg border border-slate-200",
    ghost: "bg-transparent text-eterna-3 hover:bg-slate-100",
    white: "bg-white text-eterna-3 hover:bg-white/90 shadow-lg shadow-black/10",
  };

  const sizeStyles = {
    sm: "h-10 px-5 text-sm",
    md: "h-12 px-6 text-base",
    lg: "h-14 px-8 text-lg",
  };

  return (
    <Button
      onClick={onClick}
      className={cn(
        "rounded-full font-semibold",
        "transition-all duration-300 ease-out",
        "hover:-translate-y-0.5",
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
    >
      {Icon && iconPosition === "left" && <Icon className="mr-2 h-4 w-4" />}
      <span>{children}</span>
      {Icon && iconPosition === "right" && (
        <div className="ml-3 w-7 h-7 rounded-full bg-white/20 flex items-center justify-center">
          <Icon className="h-4 w-4" />
        </div>
      )}
    </Button>
  );
}

// Section Header Component
interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  className?: string;
}

export function SectionHeader({ title, subtitle, align = "center", className }: SectionHeaderProps) {
  const alignStyles = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  };

  return (
    <div className={cn("mb-16", alignStyles[align], className)}>
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-eterna-3 mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg md:text-xl text-eterna-3/60 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}

// Feature Card Component
interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
  iconClassName?: string;
}

export function FeatureCard({ icon: Icon, title, description, className, iconClassName }: FeatureCardProps) {
  return (
    <Card hover className={cn("p-6 md:p-8", className)}>
      <div className="flex items-start gap-4">
        <div className={cn(
          "p-3 rounded-xl bg-eterna-3/5 flex-shrink-0",
          iconClassName
        )}>
          <Icon className="h-6 w-6 text-eterna-3" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-eterna-3 mb-2">{title}</h3>
          <p className="text-eterna-3/70 leading-relaxed">{description}</p>
        </div>
      </div>
    </Card>
  );
}

// Badge Component
interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "outline" | "glass";
  className?: string;
}

export function Badge({ children, variant = "default", className }: BadgeProps) {
  const variantStyles = {
    default: "bg-eterna-3/10 text-eterna-3 border border-eterna-3/20",
    outline: "bg-transparent text-eterna-3 border-2 border-eterna-3",
    glass: "bg-white/20 text-white border border-white/30 backdrop-blur-md",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center px-4 py-2 rounded-full text-sm font-medium",
        DESIGN_TOKENS.transition.base,
        variantStyles[variant],
        className
      )}
    >
      {children}
    </span>
  );
}

// Stats Component
interface StatsItemProps {
  value: string;
  label: string;
  icon?: LucideIcon;
}

export function StatsItem({ value, label, icon: Icon }: StatsItemProps) {
  return (
    <div className="text-center">
      {Icon && (
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-eterna-3/10 mb-4">
          <Icon className="h-6 w-6 text-eterna-3" />
        </div>
      )}
      <div className="text-4xl md:text-5xl font-bold text-eterna-3 mb-2">{value}</div>
      <div className="text-base text-eterna-3/70">{label}</div>
    </div>
  );
}
