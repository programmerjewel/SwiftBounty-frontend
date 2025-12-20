import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

import DashboardSidebar from "./DashboardSidebar";


const DashboardLayout = () => {
  return (
    <SidebarProvider>
      <DashboardSidebar />
      
      <main className="p-4">
        <SidebarTrigger />
      </main>
    </SidebarProvider>
    
  );
};

export default DashboardLayout;