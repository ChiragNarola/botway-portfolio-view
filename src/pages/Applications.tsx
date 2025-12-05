import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { PageHeader } from "@/components/ui/PageHeader";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { DataCard } from "@/components/ui/DataCard";
import { applications } from "@/data/mockData";
import { useState } from "react";
import { cn } from "@/lib/utils";
import {
  User,
  Building2,
  DollarSign,
  CreditCard,
  FileText,
  Calendar,
  CheckCircle,
  Clock,
  XCircle,
} from "lucide-react";

const Applications = () => {
  const [selectedApp, setSelectedApp] = useState<typeof applications[0] | null>(
    null
  );

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Approved":
        return <CheckCircle className="h-4 w-4 text-success" />;
      case "Denied":
        return <XCircle className="h-4 w-4 text-danger" />;
      default:
        return <Clock className="h-4 w-4 text-warning" />;
    }
  };

  return (
    <DashboardLayout>
      <PageHeader
        title="Applications"
        description="Review and manage rental applications"
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Applications Table */}
        <div className="lg:col-span-2 bg-card rounded-xl border border-border overflow-hidden">
          <div className="overflow-x-auto">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Applicant</th>
                  <th>Unit</th>
                  <th>Building</th>
                  <th>Submitted</th>
                  <th>Status</th>
                  <th>Screening</th>
                </tr>
              </thead>
              <tbody>
                {applications.map((app) => (
                  <tr
                    key={app.id}
                    onClick={() => setSelectedApp(app)}
                    className={cn(
                      "cursor-pointer",
                      selectedApp?.id === app.id && "bg-accent/5"
                    )}
                  >
                    <td className="font-medium">{app.applicant}</td>
                    <td>{app.unit}</td>
                    <td className="text-muted-foreground">{app.building}</td>
                    <td className="text-muted-foreground">{app.submitted}</td>
                    <td>
                      <StatusBadge status={app.status} />
                    </td>
                    <td>
                      <StatusBadge status={app.screening} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Application Detail Panel */}
        <div className="space-y-4">
          {selectedApp ? (
            <>
              <DataCard title="Application Details">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 pb-4 border-b border-border">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                      <User className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <div className="font-medium text-foreground">
                        {selectedApp.applicant}
                      </div>
                      <div className="flex items-center gap-1 text-sm">
                        {getStatusIcon(selectedApp.status)}
                        <span className="text-muted-foreground">
                          {selectedApp.status}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-sm">
                      <Building2 className="h-4 w-4 text-muted-foreground" />
                      <span>
                        {selectedApp.unit} · {selectedApp.building}
                      </span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <DollarSign className="h-4 w-4 text-muted-foreground" />
                      <span>Income: {selectedApp.income}</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <CreditCard className="h-4 w-4 text-muted-foreground" />
                      <span>Credit Score: {selectedApp.creditScore}</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span>Submitted: {selectedApp.submitted}</span>
                    </div>
                  </div>
                </div>
              </DataCard>

              <DataCard title="Timeline">
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2" />
                    <div>
                      <div className="text-sm font-medium">
                        Application submitted
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {selectedApp.submitted}
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-2 h-2 rounded-full bg-muted mt-2" />
                    <div>
                      <div className="text-sm font-medium">
                        Screening {selectedApp.screening.toLowerCase()}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Background & credit check
                      </div>
                    </div>
                  </div>
                </div>
              </DataCard>

              <DataCard title="Documents">
                <div className="grid grid-cols-2 gap-3">
                  {["ID", "Pay Stubs", "Bank Statement", "Tax Return"].map(
                    (doc) => (
                      <div
                        key={doc}
                        className="p-3 rounded-lg bg-muted/30 border border-border text-center"
                      >
                        <FileText className="h-6 w-6 mx-auto mb-2 text-muted-foreground" />
                        <span className="text-xs text-muted-foreground">
                          {doc}
                        </span>
                      </div>
                    )
                  )}
                </div>
              </DataCard>
            </>
          ) : (
            <div className="bg-card rounded-xl border border-border p-8 text-center">
              <FileText className="h-12 w-12 mx-auto mb-4 text-muted-foreground/30" />
              <p className="text-muted-foreground">
                Select an application to view details
              </p>
            </div>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Applications;
