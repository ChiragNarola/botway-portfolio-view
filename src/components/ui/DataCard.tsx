import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface DataCardProps {
  title: string;
  children: ReactNode;
  className?: string;
  action?: ReactNode;
}

export const DataCard = ({ title, children, className, action }: DataCardProps) => {
  return (
    <div className={cn("bg-card rounded-xl border border-border", className)}>
      <div className="px-6 py-4 border-b border-border flex items-center justify-between">
        <h3 className="section-title">{title}</h3>
        {action}
      </div>
      <div className="p-6">{children}</div>
    </div>
  );
};
