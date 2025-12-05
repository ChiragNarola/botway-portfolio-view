import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { PageHeader } from "@/components/ui/PageHeader";
import { KPICard } from "@/components/dashboard/KPICard";
import { PipelineFunnel } from "@/components/dashboard/PipelineFunnel";
import { BuildingHeatmap } from "@/components/dashboard/BuildingHeatmap";
import { AtRiskUnits } from "@/components/dashboard/AtRiskUnits";
import { ExpiringLeases } from "@/components/dashboard/ExpiringLeases";
import { kpiData, pipelineData, buildings, atRiskUnits, expiringLeases } from "@/data/mockData";

const Dashboard = () => {
  return (
    <DashboardLayout>
      <PageHeader
        title="Portfolio Overview"
        description="Real-time performance metrics across your entire portfolio"
      />

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7 gap-4 mb-8">
        <KPICard
          title="Occupancy Rate"
          value={kpiData.occupancyRate.value}
          target={kpiData.occupancyRate.target}
          delta={kpiData.occupancyRate.delta}
          trend={kpiData.occupancyRate.trend}
          isPercentage
        />
        <KPICard
          title="Avg Days on Market"
          value={kpiData.avgDaysOnMarket.value}
          target={kpiData.avgDaysOnMarket.target}
          delta={kpiData.avgDaysOnMarket.delta}
          trend={kpiData.avgDaysOnMarket.trend}
          invertDelta
        />
        <KPICard
          title="Lead → Tour"
          value={kpiData.leadToTour.value}
          target={kpiData.leadToTour.target}
          delta={kpiData.leadToTour.delta}
          trend={kpiData.leadToTour.trend}
          isPercentage
        />
        <KPICard
          title="Tour → App"
          value={kpiData.tourToApplication.value}
          target={kpiData.tourToApplication.target}
          delta={kpiData.tourToApplication.delta}
          trend={kpiData.tourToApplication.trend}
          isPercentage
        />
        <KPICard
          title="App → Lease"
          value={kpiData.applicationToLease.value}
          target={kpiData.applicationToLease.target}
          delta={kpiData.applicationToLease.delta}
          trend={kpiData.applicationToLease.trend}
          isPercentage
        />
        <KPICard
          title="Eff. Rent vs PF"
          value={kpiData.effectiveRentVsProForma.value}
          target={kpiData.effectiveRentVsProForma.target}
          delta={kpiData.effectiveRentVsProForma.delta}
          trend={kpiData.effectiveRentVsProForma.trend}
          isPercentage
        />
        <KPICard
          title="Renewal Rate"
          value={kpiData.renewalRate.value}
          target={kpiData.renewalRate.target}
          delta={kpiData.renewalRate.delta}
          trend={kpiData.renewalRate.trend}
          isPercentage
        />
      </div>

      {/* Pipeline & At-Risk */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-2">
          <PipelineFunnel data={pipelineData} />
        </div>
        <AtRiskUnits units={atRiskUnits} />
      </div>

      {/* Building Performance */}
      <div className="mb-8">
        <BuildingHeatmap buildings={buildings} />
      </div>

      {/* Expiring Leases */}
      <ExpiringLeases leases={expiringLeases} />
    </DashboardLayout>
  );
};

export default Dashboard;
