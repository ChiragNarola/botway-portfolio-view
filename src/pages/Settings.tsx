import { useState } from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { PageHeader } from "@/components/ui/PageHeader";
import { DataCard } from "@/components/ui/DataCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { settings as initialSettings } from "@/data/mockData";
import { toast } from "@/hooks/use-toast";
import { Save, RotateCcw } from "lucide-react";

const Settings = () => {
  const [targets, setTargets] = useState(initialSettings);

  const handleSliderChange = (key: keyof typeof targets, value: number[]) => {
    setTargets((prev) => ({ ...prev, [key]: value[0] }));
  };

  const handleInputChange = (key: keyof typeof targets, value: string) => {
    const numValue = parseInt(value) || 0;
    setTargets((prev) => ({ ...prev, [key]: numValue }));
  };

  const handleSave = () => {
    toast({
      title: "Settings saved",
      description: "Your KPI targets have been updated successfully.",
    });
  };

  const handleReset = () => {
    setTargets(initialSettings);
    toast({
      title: "Settings reset",
      description: "KPI targets have been restored to defaults.",
    });
  };

  const targetFields = [
    { key: "occupancyTarget" as const, label: "Occupancy Target", unit: "%", min: 80, max: 100 },
    { key: "domTarget" as const, label: "Days on Market Target", unit: " days", min: 7, max: 30 },
    { key: "leadToTourTarget" as const, label: "Lead → Tour Conversion Target", unit: "%", min: 20, max: 60 },
    { key: "tourToAppTarget" as const, label: "Tour → Application Target", unit: "%", min: 40, max: 80 },
    { key: "appToLeaseTarget" as const, label: "Application → Lease Target", unit: "%", min: 50, max: 90 },
    { key: "effectiveRentTarget" as const, label: "Effective Rent vs Pro Forma Target", unit: "%", min: 90, max: 105 },
    { key: "renewalRateTarget" as const, label: "Renewal Rate Target", unit: "%", min: 50, max: 90 },
  ];

  return (
    <DashboardLayout>
      <PageHeader
        title="Settings"
        description="Configure KPI targets and dashboard preferences"
        actions={
          <div className="flex items-center gap-3">
            <Button variant="outline" onClick={handleReset}>
              <RotateCcw className="h-4 w-4 mr-2" />
              Reset to Defaults
            </Button>
            <Button onClick={handleSave}>
              <Save className="h-4 w-4 mr-2" />
              Save Changes
            </Button>
          </div>
        }
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <DataCard title="KPI Targets">
          <div className="space-y-8">
            {targetFields.map((field) => (
              <div key={field.key} className="space-y-3">
                <div className="flex items-center justify-between">
                  <Label className="text-sm font-medium">{field.label}</Label>
                  <div className="flex items-center gap-2">
                    <Input
                      type="number"
                      value={targets[field.key]}
                      onChange={(e) => handleInputChange(field.key, e.target.value)}
                      className="w-20 h-8 text-right font-spaceGrotesk"
                      min={field.min}
                      max={field.max}
                    />
                    <span className="text-sm text-muted-foreground w-10">
                      {field.unit}
                    </span>
                  </div>
                </div>
                <Slider
                  value={[targets[field.key]]}
                  onValueChange={(value) => handleSliderChange(field.key, value)}
                  min={field.min}
                  max={field.max}
                  step={1}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>{field.min}{field.unit}</span>
                  <span>{field.max}{field.unit}</span>
                </div>
              </div>
            ))}
          </div>
        </DataCard>

        <div className="space-y-6">
          <DataCard title="Current Targets Summary">
            <div className="space-y-3">
              {targetFields.map((field) => (
                <div
                  key={field.key}
                  className="flex items-center justify-between py-2 border-b border-border/50 last:border-0"
                >
                  <span className="text-muted-foreground text-sm">
                    {field.label}
                  </span>
                  <span className="font-spaceGrotesk font-medium">
                    {targets[field.key]}{field.unit}
                  </span>
                </div>
              ))}
            </div>
          </DataCard>

          <DataCard title="Notification Preferences">
            <div className="text-center py-8 text-muted-foreground">
              <p className="text-sm">
                Email and alert preferences coming soon
              </p>
            </div>
          </DataCard>

          <DataCard title="Data Export">
            <div className="text-center py-8 text-muted-foreground">
              <p className="text-sm">
                Export portfolio data to CSV/Excel coming soon
              </p>
            </div>
          </DataCard>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Settings;
