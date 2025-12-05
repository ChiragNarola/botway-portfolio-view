import { NavLink, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useSidebar } from "./DashboardLayout";
import {
  LayoutDashboard,
  Building2,
  Home,
  Users,
  CalendarDays,
  FileText,
  FileCheck,
  CreditCard,
  Settings,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const navigation = [
  { name: "Overview", href: "/", icon: LayoutDashboard },
  { name: "Buildings", href: "/buildings", icon: Building2 },
  { name: "Units", href: "/units", icon: Home },
  { name: "Leads", href: "/leads", icon: Users },
  { name: "Tours", href: "/tours", icon: CalendarDays },
  { name: "Applications", href: "/applications", icon: FileText },
  { name: "Leases", href: "/leases", icon: FileCheck },
  { name: "Payments", href: "/payments", icon: CreditCard },
];

const bottomNavigation = [
  { name: "Settings", href: "/settings", icon: Settings },
];

export const Sidebar = () => {
  const { collapsed, setCollapsed } = useSidebar();
  const location = useLocation();

  return (
    <aside
      className={cn(
        "fixed left-0 top-0 h-screen bg-card border-r border-border flex flex-col transition-all duration-300 z-50",
        collapsed ? "w-16" : "w-60"
      )}
    >
      {/* Logo */}
      <div className="h-16 flex items-center justify-between px-4 border-b border-border">
        {!collapsed && (
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center">
              <span className="text-accent-foreground font-bold text-sm">B</span>
            </div>
            <span className="font-gtAmerica font-semibold text-foreground">Botway</span>
          </div>
        )}
        {collapsed && (
          <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center mx-auto">
            <span className="text-accent-foreground font-bold text-sm">B</span>
          </div>
        )}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className={cn(
            "p-1.5 rounded-md hover:bg-muted transition-colors text-muted-foreground hover:text-foreground",
            collapsed && "absolute -right-3 top-6 bg-card border border-border shadow-sm"
          )}
        >
          {collapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 py-4 px-3 space-y-1 overflow-y-auto">
        {navigation.map((item) => {
          const isActive = location.pathname === item.href || 
            (item.href !== "/" && location.pathname.startsWith(item.href));
          
          return (
            <NavLink
              key={item.name}
              to={item.href}
              className={cn(
                "nav-link",
                isActive && "nav-link-active"
              )}
            >
              <item.icon className="h-5 w-5 flex-shrink-0" />
              {!collapsed && <span>{item.name}</span>}
            </NavLink>
          );
        })}
      </nav>

      {/* Bottom Navigation */}
      <div className="py-4 px-3 border-t border-border">
        {bottomNavigation.map((item) => {
          const isActive = location.pathname === item.href;
          
          return (
            <NavLink
              key={item.name}
              to={item.href}
              className={cn(
                "nav-link",
                isActive && "nav-link-active"
              )}
            >
              <item.icon className="h-5 w-5 flex-shrink-0" />
              {!collapsed && <span>{item.name}</span>}
            </NavLink>
          );
        })}
      </div>
    </aside>
  );
};
