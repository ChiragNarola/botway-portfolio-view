import { AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";

interface AtRiskUnit {
  id: string;
  building: string;
  dom: number;
  askingRent: number;
  lastActivity: string;
}

interface AtRiskUnitsProps {
  units: AtRiskUnit[];
}

export const AtRiskUnits = ({ units }: AtRiskUnitsProps) => {
  return (
    <div className="bg-card rounded-xl border border-border p-6">
      <div className="flex items-center gap-2 mb-4">
        <AlertTriangle className="h-5 w-5 text-warning" />
        <h3 className="section-title">At-Risk Units</h3>
      </div>
      
      <div className="space-y-3">
        {units.map((unit) => (
          <Link
            key={unit.id}
            to={`/units?highlight=${unit.id}`}
            className="block p-4 rounded-lg bg-warning/5 border border-warning/20 hover:border-warning/40 transition-colors"
          >
            <div className="flex items-start justify-between mb-2">
              <div>
                <span className="font-medium text-foreground">{unit.id}</span>
                <span className="text-muted-foreground text-sm ml-2">{unit.building}</span>
              </div>
              <span className="status-badge status-badge-warning">
                {unit.dom} DOM
              </span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">{unit.lastActivity}</span>
              <span className="font-spaceGrotesk font-medium text-foreground">
                ${unit.askingRent.toLocaleString()}/mo
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
