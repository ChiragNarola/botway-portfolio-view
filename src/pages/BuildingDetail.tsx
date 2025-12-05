import { useParams, Link } from "react-router-dom";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { PageHeader } from "@/components/ui/PageHeader";
import { DataCard } from "@/components/ui/DataCard";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { buildings, units, leads, applications, leases } from "@/data/mockData";
import { ArrowLeft, MapPin, Building2, TrendingUp, Users, FileText } from "lucide-react";
import { KPICard } from "@/components/dashboard/KPICard";

const BuildingDetail = () => {
  const { id } = useParams();
  const building = buildings.find((b) => b.id === id);

  if (!building) {
    return (
      <DashboardLayout>
        <div className="text-center py-12">
          <p className="text-muted-foreground">Building not found</p>
          <Link to="/buildings" className="text-accent hover:underline mt-2 inline-block">
            Back to Buildings
          </Link>
        </div>
      </DashboardLayout>
    );
  }

  const buildingUnits = units.filter((u) => u.building === building.name);
  const buildingLeads = leads.filter((l) => buildingUnits.some((u) => u.id === l.primaryUnit));
  const buildingApplications = applications.filter((a) => a.building === building.name);
  const buildingLeases = leases.filter((l) => l.building === building.name);

  return (
    <DashboardLayout>
      <Link
        to="/buildings"
        className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-4 transition-colors"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Buildings
      </Link>

      <div className="mb-8">
        <h1 className="text-2xl font-gtAmerica font-semibold text-foreground tracking-tight">
          {building.name}
        </h1>
        <div className="flex items-center gap-2 text-muted-foreground mt-1">
          <MapPin className="h-4 w-4" />
          {building.address}
        </div>
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="bg-muted/50 p-1 rounded-lg">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="units">Units</TabsTrigger>
          <TabsTrigger value="leads">Leads & Tours</TabsTrigger>
          <TabsTrigger value="applications">Applications</TabsTrigger>
          <TabsTrigger value="leases">Leases</TabsTrigger>
          <TabsTrigger value="payments">Payments</TabsTrigger>
          <TabsTrigger value="market">Market & Neighborhood</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6 animate-fade-in">
          {/* KPIs */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            <div className="kpi-card">
              <span className="metric-label">Units</span>
              <div className="metric-value mt-2">{building.unitCount}</div>
            </div>
            <div className="kpi-card">
              <span className="metric-label">Occupancy</span>
              <div className="metric-value mt-2 text-success">{building.occupancy}%</div>
            </div>
            <div className="kpi-card">
              <span className="metric-label">Avg DOM</span>
              <div className="metric-value mt-2">{building.dom}</div>
            </div>
            <div className="kpi-card">
              <span className="metric-label">Open Listings</span>
              <div className="metric-value mt-2">{building.openListings}</div>
            </div>
            <div className="kpi-card">
              <span className="metric-label">Avg Rent</span>
              <div className="metric-value mt-2">${building.avgRent.toLocaleString()}</div>
            </div>
            <div className="kpi-card">
              <span className="metric-label">Eff. Rent vs PF</span>
              <div className="metric-value mt-2">{building.effectiveRent}%</div>
            </div>
          </div>

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <DataCard title="Performance Metrics">
              <div className="space-y-4">
                <div className="flex items-center justify-between py-2 border-b border-border/50">
                  <span className="text-muted-foreground">Lead → Tour Conversion</span>
                  <span className="font-spaceGrotesk font-medium">{building.leadToTour}%</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-border/50">
                  <span className="text-muted-foreground">Tour → Application Conversion</span>
                  <span className="font-spaceGrotesk font-medium">{building.tourToApp}%</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-border/50">
                  <span className="text-muted-foreground">Effective Rent vs Pro Forma</span>
                  <span className="font-spaceGrotesk font-medium">{building.effectiveRent}%</span>
                </div>
                <div className="flex items-center justify-between py-2">
                  <span className="text-muted-foreground">Active Alerts</span>
                  <span className="font-spaceGrotesk font-medium">{building.alerts.length}</span>
                </div>
              </div>
            </DataCard>

            <DataCard title="Active Alerts">
              {building.alerts.length > 0 ? (
                <div className="space-y-3">
                  {building.alerts.map((alert, i) => (
                    <div
                      key={i}
                      className="p-3 rounded-lg bg-warning/5 border border-warning/20 text-sm"
                    >
                      {alert}
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8 text-muted-foreground">
                  No active alerts
                </div>
              )}
            </DataCard>
          </div>
        </TabsContent>

        <TabsContent value="units" className="animate-fade-in">
          <div className="bg-card rounded-xl border border-border overflow-hidden">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Unit ID</th>
                  <th>Beds/Baths</th>
                  <th>Sqft</th>
                  <th>Status</th>
                  <th>Asking Rent</th>
                  <th>DOM</th>
                </tr>
              </thead>
              <tbody>
                {buildingUnits.map((unit) => (
                  <tr key={unit.id}>
                    <td className="font-medium">{unit.id}</td>
                    <td>{unit.beds}BR / {unit.baths}BA</td>
                    <td className="font-spaceGrotesk">{unit.sqft.toLocaleString()}</td>
                    <td><StatusBadge status={unit.status} /></td>
                    <td className="font-spaceGrotesk">${unit.askingRent.toLocaleString()}</td>
                    <td className="font-spaceGrotesk">{unit.dom}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </TabsContent>

        <TabsContent value="leads" className="animate-fade-in">
          <div className="bg-card rounded-xl border border-border overflow-hidden">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Primary Unit</th>
                  <th>Budget</th>
                  <th>Status</th>
                  <th>Lead Score</th>
                </tr>
              </thead>
              <tbody>
                {buildingLeads.length > 0 ? (
                  buildingLeads.map((lead) => (
                    <tr key={lead.id}>
                      <td className="font-medium">{lead.name}</td>
                      <td>{lead.primaryUnit}</td>
                      <td>{lead.budget}</td>
                      <td><StatusBadge status={lead.status} /></td>
                      <td className="font-spaceGrotesk">{lead.score}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={5} className="text-center py-8 text-muted-foreground">
                      No leads for this building
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </TabsContent>

        <TabsContent value="applications" className="animate-fade-in">
          <div className="bg-card rounded-xl border border-border overflow-hidden">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Applicant</th>
                  <th>Unit</th>
                  <th>Submitted</th>
                  <th>Status</th>
                  <th>Screening</th>
                </tr>
              </thead>
              <tbody>
                {buildingApplications.length > 0 ? (
                  buildingApplications.map((app) => (
                    <tr key={app.id}>
                      <td className="font-medium">{app.applicant}</td>
                      <td>{app.unit}</td>
                      <td>{app.submitted}</td>
                      <td><StatusBadge status={app.status} /></td>
                      <td><StatusBadge status={app.screening} /></td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={5} className="text-center py-8 text-muted-foreground">
                      No applications for this building
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </TabsContent>

        <TabsContent value="leases" className="animate-fade-in">
          <div className="bg-card rounded-xl border border-border overflow-hidden">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Tenant</th>
                  <th>Unit</th>
                  <th>Start</th>
                  <th>End</th>
                  <th>Rent</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {buildingLeases.length > 0 ? (
                  buildingLeases.map((lease) => (
                    <tr key={lease.id}>
                      <td className="font-medium">{lease.tenant}</td>
                      <td>{lease.unit}</td>
                      <td>{lease.startDate}</td>
                      <td>{lease.endDate}</td>
                      <td className="font-spaceGrotesk">${lease.rent.toLocaleString()}</td>
                      <td><StatusBadge status={lease.status} /></td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={6} className="text-center py-8 text-muted-foreground">
                      No leases for this building
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </TabsContent>

        <TabsContent value="payments" className="animate-fade-in">
          <div className="text-center py-12 text-muted-foreground">
            <p>Payment data for this building will appear here.</p>
          </div>
        </TabsContent>

        <TabsContent value="market" className="animate-fade-in">
          <DataCard title="Market & Neighborhood">
            <div className="text-center py-12">
              <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-muted-foreground" />
              </div>
              <p className="text-muted-foreground mb-2">AI-powered market insights coming soon</p>
              <p className="text-sm text-muted-foreground">
                Neighborhood comps, rental trends, and competitive analysis
              </p>
            </div>
          </DataCard>
        </TabsContent>
      </Tabs>
    </DashboardLayout>
  );
};

export default BuildingDetail;
