import { cn } from "@/lib/utils";
import { ICONS, type IconName } from "@/lib/icons";

interface MaterialIconProps {
  icon: IconName | string;
  className?: string;
  size?: "small" | "medium" | "large" | number;
  variant?: "icons" | "symbols-outlined" | "symbols-rounded";
}

export function MaterialIcon({ 
  icon, 
  className, 
  size = "medium", 
  variant = "icons" 
}: MaterialIconProps) {
  const sizeClasses = {
    small: "text-lg",
    medium: "text-2xl", 
    large: "text-4xl"
  };

  const variantClasses = {
    "icons": "material-icons",
    "symbols-outlined": "material-symbols-outlined",
    "symbols-rounded": "material-symbols-rounded"
  };

  const sizeClass = typeof size === "number" 
    ? `text-[${size}px]` 
    : sizeClasses[size];

  const iconName = icon in ICONS ? ICONS[icon as IconName] : icon;

  return (
    <span 
      className={cn(variantClasses[variant], "select-none", sizeClass, className)}
      style={typeof size === "number" ? { fontSize: `${size}px` } : undefined}
    >
      {iconName}
    </span>
  );
}