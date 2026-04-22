import type { ReactNode } from "react";

interface IconCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  className?: string;
  iconClassName?: string;
}

export default function IconCard({
  icon,
  title,
  description,
  className = "icon-card",
  iconClassName = "icon-card-icon",
}: IconCardProps) {
  return (
    <div className={className}>
      <div className={iconClassName}>{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}
