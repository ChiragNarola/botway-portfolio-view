import { ReactNode, useState, createContext, useContext } from "react";
import { Sidebar } from "./Sidebar";
import { cn } from "@/lib/utils";

interface DashboardLayoutProps {
  children: ReactNode;
}

interface SidebarContextType {
  collapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
}

export const SidebarContext = createContext<SidebarContextType>({
  collapsed: false,
  setCollapsed: () => {},
});

export const useSidebar = () => useContext(SidebarContext);

export const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <SidebarContext.Provider value={{ collapsed, setCollapsed }}>
      <div className="min-h-screen bg-background">
        <Sidebar />
        <main className={cn(
          "min-h-screen transition-all duration-300",
          collapsed ? "pl-16" : "pl-60"
        )}>
          <div className="p-8">
            {children}
          </div>
        </main>
      </div>
    </SidebarContext.Provider>
  );
};
