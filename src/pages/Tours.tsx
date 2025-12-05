import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { PageHeader } from "@/components/ui/PageHeader";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { DataCard } from "@/components/ui/DataCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { tours } from "@/data/mockData";
import { Calendar, Clock, User, Building2, MessageSquare } from "lucide-react";

const Tours = () => {
  const scheduledTours = tours.filter((t) => t.status === "Scheduled");
  const completedTours = tours.filter((t) => t.status === "Completed");

  return (
    <DashboardLayout>
      <PageHeader
        title="Tours"
        description="Schedule and track property tours"
      />

      <Tabs defaultValue="calendar" className="space-y-6">
        <TabsList className="bg-muted/50 p-1 rounded-lg">
          <TabsTrigger value="calendar">Calendar View</TabsTrigger>
          <TabsTrigger value="table">Table View</TabsTrigger>
          <TabsTrigger value="feedback">Feedback Summary</TabsTrigger>
        </TabsList>

        <TabsContent value="calendar" className="animate-fade-in">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Upcoming Tours */}
            <DataCard title="Upcoming Tours">
              <div className="space-y-4">
                {scheduledTours.map((tour) => (
                  <div
                    key={tour.id}
                    className="p-4 rounded-lg border border-border hover:border-accent/30 transition-colors"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <User className="h-4 w-4 text-muted-foreground" />
                        <span className="font-medium">{tour.lead}</span>
                      </div>
                      <StatusBadge status={tour.status} />
                    </div>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Building2 className="h-4 w-4" />
                        <span>
                          {tour.unit} · {tour.building}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span>{tour.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        <span>{tour.time}</span>
                      </div>
                    </div>
                    <div className="mt-3 pt-3 border-t border-border text-sm">
                      <span className="text-muted-foreground">Agent: </span>
                      <span>{tour.agent}</span>
                    </div>
                  </div>
                ))}
                {scheduledTours.length === 0 && (
                  <div className="text-center py-8 text-muted-foreground">
                    No upcoming tours scheduled
                  </div>
                )}
              </div>
            </DataCard>

            {/* Recent Completed */}
            <DataCard title="Recently Completed">
              <div className="space-y-4">
                {completedTours.map((tour) => (
                  <div
                    key={tour.id}
                    className="p-4 rounded-lg border border-border"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <User className="h-4 w-4 text-muted-foreground" />
                        <span className="font-medium">{tour.lead}</span>
                      </div>
                      <StatusBadge status={tour.status} />
                    </div>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Building2 className="h-4 w-4" />
                        <span>
                          {tour.unit} · {tour.building}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span>{tour.date} at {tour.time}</span>
                      </div>
                    </div>
                    {tour.feedback && (
                      <div className="mt-3 pt-3 border-t border-border">
                        <div className="flex items-start gap-2 text-sm">
                          <MessageSquare className="h-4 w-4 text-muted-foreground mt-0.5" />
                          <span className="text-muted-foreground italic">
                            "{tour.feedback}"
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </DataCard>
          </div>
        </TabsContent>

        <TabsContent value="table" className="animate-fade-in">
          <div className="bg-card rounded-xl border border-border overflow-hidden">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Lead</th>
                  <th>Unit</th>
                  <th>Building</th>
                  <th>Date</th>
                  <th>Time</th>
                  <th>Agent</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {tours.map((tour) => (
                  <tr key={tour.id}>
                    <td className="font-medium">{tour.lead}</td>
                    <td>{tour.unit}</td>
                    <td className="text-muted-foreground">{tour.building}</td>
                    <td>{tour.date}</td>
                    <td>{tour.time}</td>
                    <td className="text-muted-foreground">{tour.agent}</td>
                    <td>
                      <StatusBadge status={tour.status} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </TabsContent>

        <TabsContent value="feedback" className="animate-fade-in">
          <DataCard title="Tour Feedback Summary">
            <div className="space-y-4">
              {completedTours
                .filter((t) => t.feedback)
                .map((tour) => (
                  <div
                    key={tour.id}
                    className="p-4 rounded-lg bg-muted/30 border border-border"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium">{tour.lead}</span>
                      <span className="text-sm text-muted-foreground">
                        {tour.unit} · {tour.date}
                      </span>
                    </div>
                    <p className="text-muted-foreground italic">
                      "{tour.feedback}"
                    </p>
                  </div>
                ))}
              {completedTours.filter((t) => t.feedback).length === 0 && (
                <div className="text-center py-8 text-muted-foreground">
                  No feedback recorded yet
                </div>
              )}
            </div>
          </DataCard>
        </TabsContent>
      </Tabs>
    </DashboardLayout>
  );
};

export default Tours;
