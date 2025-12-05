import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { PageHeader } from "@/components/ui/PageHeader";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { units } from "@/data/mockData";
import { cn } from "@/lib/utils";

const Units = () => {
  return (
    <DashboardLayout>
      <PageHeader
        title="Units & Listings"
        description="View and manage all units across your portfolio"
      />

      <div className="bg-card rounded-xl border border-border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="data-table">
            <thead>
              <tr>
                <th>Building</th>
                <th>Unit ID</th>
                <th>Beds/Baths/SF</th>
                <th>Floor</th>
                <th>Status</th>
                <th>Asking Rent</th>
                <th>Net Effective</th>
                <th>DOM</th>
                <th>Availability</th>
                <th>Campaigns</th>
              </tr>
            </thead>
            <tbody>
              {units.map((unit) => (
                <tr key={unit.id}>
                  <td className="text-muted-foreground">{unit.building}</td>
                  <td className="font-medium">{unit.id}</td>
                  <td>
                    {unit.beds}BR / {unit.baths}BA / {unit.sqft.toLocaleString()} SF
                  </td>
                  <td className="font-spaceGrotesk">{unit.floor}</td>
                  <td>
                    <StatusBadge status={unit.status} />
                  </td>
                  <td className="font-spaceGrotesk">
                    ${unit.askingRent.toLocaleString()}
                  </td>
                  <td className="font-spaceGrotesk">
                    ${unit.netEffective.toLocaleString()}
                  </td>
                  <td>
                    <span
                      className={cn(
                        "font-spaceGrotesk font-medium",
                        unit.dom > 30
                          ? "text-danger"
                          : unit.dom > 21
                          ? "text-warning"
                          : "text-foreground"
                      )}
                    >
                      {unit.dom}
                    </span>
                  </td>
                  <td className="text-muted-foreground">{unit.availDate}</td>
                  <td>
                    {unit.campaigns.length > 0 ? (
                      <div className="flex flex-wrap gap-1">
                        {unit.campaigns.map((campaign) => (
                          <span
                            key={campaign}
                            className="px-2 py-0.5 rounded-full text-xs bg-muted text-muted-foreground"
                          >
                            {campaign}
                          </span>
                        ))}
                      </div>
                    ) : (
                      <span className="text-muted-foreground">—</span>
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

export default Units;
