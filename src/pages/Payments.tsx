import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { PageHeader } from "@/components/ui/PageHeader";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { payments } from "@/data/mockData";
import { cn } from "@/lib/utils";

const Payments = () => {
  const totalDue = payments.reduce((sum, p) => sum + p.amountDue, 0);
  const totalPaid = payments.reduce((sum, p) => sum + p.amountPaid, 0);
  const pendingPayments = payments.filter((p) => p.status === "Pending");

  return (
    <DashboardLayout>
      <PageHeader
        title="Payments"
        description="Track first month rent and security deposits"
      />

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="kpi-card">
          <span className="metric-label">Total Due</span>
          <div className="metric-value mt-2">
            ${totalDue.toLocaleString()}
          </div>
        </div>
        <div className="kpi-card">
          <span className="metric-label">Total Collected</span>
          <div className="metric-value mt-2 text-success">
            ${totalPaid.toLocaleString()}
          </div>
        </div>
        <div className="kpi-card">
          <span className="metric-label">Pending</span>
          <div className="metric-value mt-2 text-warning">
            ${(totalDue - totalPaid).toLocaleString()}
          </div>
          <div className="text-xs text-muted-foreground mt-1">
            {pendingPayments.length} payments pending
          </div>
        </div>
      </div>

      {/* Payments Table */}
      <div className="bg-card rounded-xl border border-border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="data-table">
            <thead>
              <tr>
                <th>Tenant</th>
                <th>Unit</th>
                <th>Type</th>
                <th>Amount Due</th>
                <th>Amount Paid</th>
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {payments.map((payment) => (
                <tr key={payment.id}>
                  <td className="font-medium">{payment.tenant}</td>
                  <td>{payment.unit}</td>
                  <td>
                    <span
                      className={cn(
                        "px-2 py-0.5 rounded-full text-xs",
                        payment.type === "First Month"
                          ? "bg-accent/10 text-accent"
                          : "bg-muted text-muted-foreground"
                      )}
                    >
                      {payment.type}
                    </span>
                  </td>
                  <td className="font-spaceGrotesk">
                    ${payment.amountDue.toLocaleString()}
                  </td>
                  <td
                    className={cn(
                      "font-spaceGrotesk",
                      payment.amountPaid === payment.amountDue
                        ? "text-success"
                        : payment.amountPaid > 0
                        ? "text-warning"
                        : "text-muted-foreground"
                    )}
                  >
                    ${payment.amountPaid.toLocaleString()}
                  </td>
                  <td className="text-muted-foreground">{payment.date}</td>
                  <td>
                    <StatusBadge status={payment.status} />
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

export default Payments;
