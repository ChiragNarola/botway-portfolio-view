import { cn } from "@/lib/utils";

interface KPICardProps {
  title: string;
  value: number;
  target: number;
  delta: number;
  trend: number[];
  unit?: string;
  isPercentage?: boolean;
  invertDelta?: boolean;
}

const Sparkline = ({ data, isPositive }: { data: number[]; isPositive: boolean }) => {
  const min = Math.min(...data);
  const max = Math.max(...data);
  const range = max - min || 1;
  
  const points = data.map((value, index) => {
    const x = (index / (data.length - 1)) * 80;
    const y = 24 - ((value - min) / range) * 20;
    return `${x},${y}`;
  }).join(" ");

  return (
    <svg width="80" height="28" className="overflow-visible">
      <polyline
        fill="none"
        stroke={isPositive ? "hsl(var(--success))" : "hsl(var(--danger))"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        points={points}
      />
      <circle
        cx={(data.length - 1) / (data.length - 1) * 80}
        cy={24 - ((data[data.length - 1] - min) / range) * 20}
        r="3"
        fill={isPositive ? "hsl(var(--success))" : "hsl(var(--danger))"}
      />
    </svg>
  );
};

export const KPICard = ({
  title,
  value,
  target,
  delta,
  trend,
  unit = "",
  isPercentage = false,
  invertDelta = false,
}: KPICardProps) => {
  const isPositive = invertDelta ? delta < 0 : delta >= 0;
  const displayDelta = Math.abs(delta);
  const formattedValue = isPercentage ? `${value}%` : `${value}${unit}`;
  const formattedTarget = isPercentage ? `${target}%` : `${target}${unit}`;

  return (
    <div className="kpi-card group">
      <div className="flex items-start justify-between mb-3">
        <span className="metric-label">{title}</span>
        <Sparkline data={trend} isPositive={isPositive} />
      </div>
      
      <div className="flex items-end justify-between">
        <div>
          <div className="metric-value">{formattedValue}</div>
          <div className="flex items-center gap-2 mt-1">
            <span className="text-xs text-muted-foreground">
              Target: {formattedTarget}
            </span>
            <span
              className={cn(
                "text-xs font-medium flex items-center gap-0.5",
                isPositive ? "text-success" : "text-danger"
              )}
            >
              {isPositive ? "↑" : "↓"} {displayDelta}{isPercentage ? "%" : unit}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
