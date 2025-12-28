import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import DashboardSidebar from "./DashboardSidebar";
import { Outlet, useLocation } from "react-router";
import { Separator } from "@/components/ui/separator";
import React from "react";

const DashboardLayout = () => {
  const location = useLocation();

  const getBreadcrumbLabel = (path) => {
    const segments = path.split("/").filter(Boolean);
    if (segments.length <= 1) return "Home";
    
    return segments[segments.length - 1]
      .split("-")
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  return (
    <SidebarProvider>
      <DashboardSidebar />
      <main className="flex-1 flex flex-col min-h-screen bg-slate-50/50">
        
        {/* Fixed Header */}
        <header className="flex h-14 shrink-0 items-center gap-2 border-b px-4 bg-white sticky top-0 z-10">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
          
          {/* Breadcrumb Logic */}
          <nav className="flex items-center space-x-1 text-sm font-medium">
            <span className="text-muted-foreground">Dashboard</span>
            <span className="text-muted-foreground">/</span>
            <span className="text-foreground">
              {getBreadcrumbLabel(location.pathname)}
            </span>
          </nav>
        </header>

        {/* Content Area with refined Width and Padding */}
        <div className="flex-1">
          <div className="mx-auto w-full max-w-screen-2xl p-4 md:p-6 lg:p-10">
            <Outlet />
          </div>
        </div>
      </main>
    </SidebarProvider>
  );
};

export default DashboardLayout;