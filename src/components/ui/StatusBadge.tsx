import { cn } from "@/lib/utils";

type StatusType = "success" | "warning" | "danger" | "neutral" | "info";

interface StatusBadgeProps {
  status: string;
  type?: StatusType;
}

const statusTypeMap: Record<string, StatusType> = {
  // Unit statuses
  "Available": "success",
  "Leased": "neutral",
  "Application": "info",
  "Tour Scheduled": "info",
  
  // Lead statuses
  "New": "info",
  "Tour Completed": "success",
  "Application Submitted": "success",
  "Not Qualified": "danger",
  
  // Application statuses
  "Under Review": "warning",
  "Approved": "success",
  "Documents Needed": "warning",
  "Denied": "danger",
  
  // Screening statuses
  "Passed": "success",
  "Pending": "warning",
  "Failed": "danger",
  
  // Lease statuses
  "Active": "success",
  "Expiring Soon": "warning",
  "Expired": "danger",
  
  // Payment statuses
  "Paid": "success",
  "Partial": "warning",
  
  // Tour statuses
  "Scheduled": "info",
  "Completed": "success",
  "Cancelled": "danger",
  "No Show": "danger",
};

export const StatusBadge = ({ status, type }: StatusBadgeProps) => {
  const statusType = type || statusTypeMap[status] || "neutral";
  
  const typeClasses: Record<StatusType, string> = {
    success: "status-badge-success",
    warning: "status-badge-warning",
    danger: "status-badge-danger",
    neutral: "status-badge-neutral",
    info: "bg-accent/10 text-accent",
  };

  return (
    <span className={cn("status-badge", typeClasses[statusType])}>
      {status}
    </span>
  );
};
