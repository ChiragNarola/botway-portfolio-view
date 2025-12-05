import { Link } from "react-router-dom";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { PageHeader } from "@/components/ui/PageHeader";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { buildings } from "@/data/mockData";
import { Building2, AlertTriangle } from "lucide-react";

const Buildings = () => {
  return (
    <DashboardLayout>
      <PageHeader
        title="Buildings"
        description="Manage and monitor all properties in your portfolio"
      />

      <div className="bg-card rounded-xl border border-border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="data-table">
            <thead>
              <tr>
                <th>Building</th>
                <th>Address</th>
                <th>Units</th>
                <th>Occupancy</th>
                <th>Avg Rent</th>
                <th>Open Listings</th>
                <th>Alerts</th>
              </tr>
            </thead>
            <tbody>
              {buildings.map((building) => (
                <tr key={building.id}>
                  <td>
                    <Link
                      to={`/buildings/${building.id}`}
                      className="flex items-center gap-3 group"
                    >
                      <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center">
                        <Building2 className="h-5 w-5 text-muted-foreground" />
                      </div>
                      <span className="font-medium text-foreground group-hover:text-accent transition-colors">
                        {building.name}
                      </span>
                    </Link>
                  </td>
                  <td className="text-muted-foreground max-w-[200px] truncate">
                    {building.address}
                  </td>
                  <td className="font-spaceGrotesk">{building.unitCount}</td>
                  <td>
                    <span
                      className={`font-spaceGrotesk font-medium ${
                        building.occupancy >= 95
                          ? "text-success"
                          : building.occupancy >= 90
                          ? "text-warning"
                          : "text-danger"
                      }`}
                    >
                      {building.occupancy}%
                    </span>
                  </td>
                  <td className="font-spaceGrotesk">
                    ${building.avgRent.toLocaleString()}
                  </td>
                  <td className="font-spaceGrotesk">{building.openListings}</td>
                  <td>
                    {building.alerts.length > 0 ? (
                      <div className="flex flex-wrap gap-1">
                        {building.alerts.map((alert, i) => (
                          <span
                            key={i}
                            className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs bg-warning/10 text-warning"
                          >
                            <AlertTriangle className="h-3 w-3" />
                            {alert}
                          </span>
                        ))}
                      </div>
                    ) : (
                      <span className="text-muted-foreground text-sm">—</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Buildings;
