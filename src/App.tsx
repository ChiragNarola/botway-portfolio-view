import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Buildings from "./pages/Buildings";
import BuildingDetail from "./pages/BuildingDetail";
import Units from "./pages/Units";
import Leads from "./pages/Leads";
import Tours from "./pages/Tours";
import Applications from "./pages/Applications";
import Leases from "./pages/Leases";
import Payments from "./pages/Payments";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/buildings" element={<Buildings />} />
          <Route path="/buildings/:id" element={<BuildingDetail />} />
          <Route path="/units" element={<Units />} />
          <Route path="/leads" element={<Leads />} />
          <Route path="/tours" element={<Tours />} />
          <Route path="/applications" element={<Applications />} />
          <Route path="/leases" element={<Leases />} />
          <Route path="/payments" element={<Payments />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
