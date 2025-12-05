import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { PageHeader } from "@/components/ui/PageHeader";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { DataCard } from "@/components/ui/DataCard";
import { leads } from "@/data/mockData";
import { cn } from "@/lib/utils";
import { User, Mail, Phone, Calendar, DollarSign, Home, Star } from "lucide-react";
import { useState } from "react";

const Leads = () => {
  const [selectedLead, setSelectedLead] = useState<typeof leads[0] | null>(null);

  return (
    <DashboardLayout>
      <PageHeader
        title="Leads"
        description="Track and manage prospective renters"
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Leads Table */}
        <div className="lg:col-span-2 bg-card rounded-xl border border-border overflow-hidden">
          <div className="overflow-x-auto">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Source</th>
                  <th>Budget</th>
                  <th>Move-in</th>
                  <th>Primary Unit</th>
                  <th>Status</th>
                  <th>Score</th>
                </tr>
              </thead>
              <tbody>
                {leads.map((lead) => (
                  <tr
                    key={lead.id}
                    onClick={() => setSelectedLead(lead)}
                    className={cn(
                      "cursor-pointer",
                      selectedLead?.id === lead.id && "bg-accent/5"
                    )}
                  >
                    <td className="font-medium">{lead.name}</td>
                    <td className="text-muted-foreground">{lead.source}</td>
                    <td className="font-spaceGrotesk">{lead.budget}</td>
                    <td className="text-muted-foreground">{lead.moveIn}</td>
                    <td>{lead.primaryUnit}</td>
                    <td>
                      <StatusBadge status={lead.status} />
                    </td>
                    <td>
                      <span
                        className={cn(
                          "font-spaceGrotesk font-medium",
                          lead.score >= 80
                            ? "text-success"
                            : lead.score >= 60
                            ? "text-warning"
                            : "text-muted-foreground"
                        )}
                      >
                        {lead.score}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Lead Detail Panel */}
        <div className="space-y-4">
          {selectedLead ? (
            <>
              <DataCard title="Lead Details">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 pb-4 border-b border-border">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                      <User className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <div className="font-medium text-foreground">
                        {selectedLead.name}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Lead Score: {selectedLead.score}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-sm">
                      <Mail className="h-4 w-4 text-muted-foreground" />
                      <span>{selectedLead.email}</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <Phone className="h-4 w-4 text-muted-foreground" />
                      <span>{selectedLead.phone}</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <DollarSign className="h-4 w-4 text-muted-foreground" />
                      <span>{selectedLead.budget}</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span>Move-in: {selectedLead.moveIn}</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <Home className="h-4 w-4 text-muted-foreground" />
                      <span>Primary: {selectedLead.primaryUnit}</span>
                    </div>
                  </div>
                </div>
              </DataCard>

              <DataCard title="Activity Timeline">
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2" />
                    <div>
                      <div className="text-sm font-medium">Lead created</div>
                      <div className="text-xs text-muted-foreground">
                        {selectedLead.createdAt}
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-2 h-2 rounded-full bg-muted mt-2" />
                    <div>
                      <div className="text-sm font-medium">
                        Inquiry sent via {selectedLead.source}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {selectedLead.createdAt}
                      </div>
                    </div>
                  </div>
                </div>
              </DataCard>

              <DataCard title="Recommended Units">
                <div className="text-center py-6 text-muted-foreground text-sm">
                  <Star className="h-8 w-8 mx-auto mb-2 text-muted-foreground/50" />
                  AI-powered unit recommendations coming soon
                </div>
              </DataCard>
            </>
          ) : (
            <div className="bg-card rounded-xl border border-border p-8 text-center">
              <User className="h-12 w-12 mx-auto mb-4 text-muted-foreground/30" />
              <p className="text-muted-foreground">
                Select a lead to view details
              </p>
            </div>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Leads;
