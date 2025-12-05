import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

interface Building {
  id: string;
  name: string;
  occupancy: number;
  dom: number;
  leadToTour: number;
  tourToApp: number;
  effectiveRent: number;
}

interface BuildingHeatmapProps {
  buildings: Building[];
}

const getHeatColor = (value: number, thresholds: { good: number; warning: number }, invert = false) => {
  if (invert) {
    if (value <= thresholds.good) return "text-success";
    if (value <= thresholds.warning) return "text-warning";
    return "text-danger";
  }
  if (value >= thresholds.good) return "text-success";
  if (value >= thresholds.warning) return "text-warning";
  return "text-danger";
};

export const BuildingHeatmap = ({ buildings }: BuildingHeatmapProps) => {
  return (
    <div className="bg-card rounded-xl border border-border overflow-hidden">
      <div className="p-6 border-b border-border">
        <h3 className="section-title">Building Performance</h3>
      </div>
      
      <div className="overflow-x-auto">
        <table className="data-table">
          <thead>
            <tr>
              <th>Building</th>
              <th>Occupancy</th>
              <th>DOM</th>
              <th>Lead→Tour</th>
              <th>Tour→App</th>
              <th>Eff. Rent vs PF</th>
            </tr>
          </thead>
          <tbody>
            {buildings.map((building) => (
              <tr key={building.id}>
                <td>
                  <Link
                    to={`/buildings/${building.id}`}
                    className="font-medium text-foreground hover:text-accent transition-colors"
                  >
                    {building.name}
                  </Link>
                </td>
                <td>
                  <span className={cn("font-spaceGrotesk font-medium", getHeatColor(building.occupancy, { good: 95, warning: 90 }))}>
                    {building.occupancy}%
                  </span>
                </td>
                <td>
                  <span className={cn("font-spaceGrotesk font-medium", getHeatColor(building.dom, { good: 14, warning: 21 }, true))}>
                    {building.dom}
                  </span>
                </td>
                <td>
                  <span className={cn("font-spaceGrotesk font-medium", getHeatColor(building.leadToTour, { good: 40, warning: 35 }))}>
                    {building.leadToTour}%
                  </span>
                </td>
                <td>
                  <span className={cn("font-spaceGrotesk font-medium", getHeatColor(building.tourToApp, { good: 60, warning: 55 }))}>
                    {building.tourToApp}%
                  </span>
                </td>
                <td>
                  <span className={cn("font-spaceGrotesk font-medium", getHeatColor(building.effectiveRent, { good: 98, warning: 95 }))}>
                    {building.effectiveRent}%
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
