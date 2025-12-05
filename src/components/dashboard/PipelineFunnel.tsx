interface PipelineData {
  leads: number;
  tours: number;
  applications: number;
  approved: number;
  leases: number;
  moveIns: number;
}

interface PipelineFunnelProps {
  data: PipelineData;
}

export const PipelineFunnel = ({ data }: PipelineFunnelProps) => {
  const stages = [
    { label: "Leads", value: data.leads, color: "bg-muted" },
    { label: "Tours", value: data.tours, color: "bg-soft-honey/50" },
    { label: "Applications", value: data.applications, color: "bg-light-clay" },
    { label: "Approved", value: data.approved, color: "bg-tangerine-pop/30" },
    { label: "Leases", value: data.leases, color: "bg-tangerine-pop/50" },
    { label: "Move-ins", value: data.moveIns, color: "bg-tangerine-pop" },
  ];

  const maxValue = data.leads;

  return (
    <div className="bg-card rounded-xl border border-border p-6">
      <h3 className="section-title mb-6">Pipeline Funnel</h3>
      
      <div className="space-y-3">
        {stages.map((stage, index) => {
          const width = (stage.value / maxValue) * 100;
          const conversionRate = index > 0 
            ? ((stage.value / stages[index - 1].value) * 100).toFixed(0)
            : null;
          
          return (
            <div key={stage.label} className="group">
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center gap-3">
                  <span className="text-sm font-medium text-foreground w-24">
                    {stage.label}
                  </span>
                  <span className="font-spaceGrotesk font-semibold text-foreground">
                    {stage.value}
                  </span>
                </div>
                {conversionRate && (
                  <span className="text-xs text-muted-foreground">
                    {conversionRate}% conversion
                  </span>
                )}
              </div>
              <div className="h-8 bg-muted/30 rounded-lg overflow-hidden">
                <div
                  className={`h-full ${stage.color} rounded-lg transition-all duration-500 group-hover:opacity-90`}
                  style={{ width: `${width}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
