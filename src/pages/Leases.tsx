import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { PageHeader } from "@/components/ui/PageHeader";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { DataCard } from "@/components/ui/DataCard";
import { leases } from "@/data/mockData";
import { useState } from "react";
import { cn } from "@/lib/utils";
import {
  User,
  Building2,
  Calendar,
  DollarSign,
  RefreshCw,
  FileCheck,
  Sparkles,
} from "lucide-react";

const Leases = () => {
  const [selectedLease, setSelectedLease] = useState<typeof leases[0] | null>(
    null
  );

  return (
    <DashboardLayout>
      <PageHeader
        title="Leases"
        description="Manage active and expiring leases"
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Leases Table */}
        <div className="lg:col-span-2 bg-card rounded-xl border border-border overflow-hidden">
          <div className="overflow-x-auto">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Tenant</th>
                  <th>Unit</th>
                  <th>Lease Start</th>
                  <th>Lease End</th>
                  <th>Rent</th>
                  <th>Status</th>
                  <th>Renewal Trigger</th>
                </tr>
              </thead>
              <tbody>
                {leases.map((lease) => (
                  <tr
                    key={lease.id}
                    onClick={() => setSelectedLease(lease)}
                    className={cn(
                      "cursor-pointer",
                      selectedLease?.id === lease.id && "bg-accent/5"
                    )}
                  >
                    <td className="font-medium">{lease.tenant}</td>
                    <td>{lease.unit}</td>
                    <td className="text-muted-foreground">{lease.startDate}</td>
                    <td className="text-muted-foreground">{lease.endDate}</td>
                    <td className="font-spaceGrotesk">
                      ${lease.rent.toLocaleString()}
                    </td>
                    <td>
                      <StatusBadge status={lease.status} />
                    </td>
                    <td
                      className={cn(
                        lease.status === "Expiring Soon"
                          ? "text-warning font-medium"
                          : "text-muted-foreground"
                      )}
                    >
                      {lease.renewalTrigger}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Lease Detail Panel */}
        <div className="space-y-4">
          {selectedLease ? (
            <>
              <DataCard title="Lease Details">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 pb-4 border-b border-border">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                      <User className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <div className="font-medium text-foreground">
                        {selectedLease.tenant}
                      </div>
                      <StatusBadge status={selectedLease.status} />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-sm">
                      <Building2 className="h-4 w-4 text-muted-foreground" />
                      <span>
                        {selectedLease.unit} · {selectedLease.building}
                      </span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span>
                        {selectedLease.startDate} → {selectedLease.endDate}
                      </span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <DollarSign className="h-4 w-4 text-muted-foreground" />
                      <span>
                        ${selectedLease.rent.toLocaleString()}/month
                      </span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <RefreshCw className="h-4 w-4 text-muted-foreground" />
                      <span>
                        Renewal trigger: {selectedLease.renewalTrigger}
                      </span>
                    </div>
                  </div>
                </div>
              </DataCard>

              <DataCard title="Lease Terms">
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between py-2 border-b border-border/50">
                    <span className="text-muted-foreground">Lease Type</span>
                    <span>12-Month Fixed</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-border/50">
                    <span className="text-muted-foreground">Security Deposit</span>
                    <span className="font-spaceGrotesk">
                      ${(selectedLease.rent * 2).toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-border/50">
                    <span className="text-muted-foreground">Pet Deposit</span>
                    <span className="font-spaceGrotesk">$500</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="text-muted-foreground">Utilities</span>
                    <span>Tenant Responsibility</span>
                  </div>
                </div>
              </DataCard>

              <DataCard title="Renewal Suggestions">
                <div className="text-center py-6">
                  <Sparkles className="h-8 w-8 mx-auto mb-2 text-accent" />
                  <p className="text-sm text-muted-foreground">
                    AI-powered renewal recommendations coming soon
                  </p>
                </div>
              </DataCard>
            </>
          ) : (
            <div className="bg-card rounded-xl border border-border p-8 text-center">
              <FileCheck className="h-12 w-12 mx-auto mb-4 text-muted-foreground/30" />
              <p className="text-muted-foreground">
                Select a lease to view details
              </p>
            </div>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Leases;
