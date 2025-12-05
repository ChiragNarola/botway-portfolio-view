import { Calendar } from "lucide-react";

interface ExpiringLease {
  tenant: string;
  unit: string;
  building: string;
  endDate: string;
  daysUntil: number;
  currentRent: number;
  marketRent: number;
}

interface ExpiringLeasesProps {
  leases: ExpiringLease[];
}

export const ExpiringLeases = ({ leases }: ExpiringLeasesProps) => {
  return (
    <div className="bg-card rounded-xl border border-border overflow-hidden">
      <div className="p-6 border-b border-border flex items-center gap-2">
        <Calendar className="h-5 w-5 text-muted-foreground" />
        <h3 className="section-title">Expiring Leases (60-90 days)</h3>
      </div>
      
      <div className="overflow-x-auto">
        <table className="data-table">
          <thead>
            <tr>
              <th>Tenant</th>
              <th>Unit</th>
              <th>Building</th>
              <th>End Date</th>
              <th>Days Until</th>
              <th>Current Rent</th>
              <th>Market Rent</th>
              <th>Upside</th>
            </tr>
          </thead>
          <tbody>
            {leases.map((lease, index) => {
              const upside = lease.marketRent - lease.currentRent;
              const upsidePercent = ((upside / lease.currentRent) * 100).toFixed(1);
              
              return (
                <tr key={index}>
                  <td className="font-medium">{lease.tenant}</td>
                  <td>{lease.unit}</td>
                  <td className="text-muted-foreground">{lease.building}</td>
                  <td>{lease.endDate}</td>
                  <td>
                    <span className={`font-spaceGrotesk font-medium ${lease.daysUntil <= 60 ? "text-warning" : "text-foreground"}`}>
                      {lease.daysUntil}
                    </span>
                  </td>
                  <td className="font-spaceGrotesk">${lease.currentRent.toLocaleString()}</td>
                  <td className="font-spaceGrotesk">${lease.marketRent.toLocaleString()}</td>
                  <td>
                    <span className="text-success font-medium">
                      +${upside} ({upsidePercent}%)
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
