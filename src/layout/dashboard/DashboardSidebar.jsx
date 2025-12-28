import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import useAuth from '@/hooks/useAuth';
import { Send, Home, Inbox, PackagePlus, BanknoteArrowDown, Coins, CreditCard, Users, ClipboardList } from "lucide-react";
import { NavLink } from "react-router";


const menuItemsArr = {
  worker: [
    { title: "Home", url: "stat", icon: Home },
    { title: "Task List", url: "task-list", icon: Inbox },
    { title: "My Submissions", url: "my-submission", icon: Send },
    { title: "Withdrawals", url: "withdrawals", icon: BanknoteArrowDown },
  ],
  buyer: [
    { title: "Home", url: "/dashboard", icon: Home },
    { title: "Add New Tasks", url: "/add-tasks", icon: PackagePlus },
    { title: "Purchase Coin", url: "/purchase", icon: Coins },
    { title: "Payment History", url: "/payments", icon: CreditCard },
  ],
  admin: [
    { title: "Home", url: "/dashboard", icon: Home },
    { title: "Manage Users", url: "/manage-users", icon: Users },
    { title: "Manage Task", url: "/manage-tasks", icon: ClipboardList },
  ]
};

export default function DashboardSidebar() {
  const { user } = useAuth();

  const role = user?.role || 'worker'; 
  const menuItems = menuItemsArr[role] || [];

  return (
    <Sidebar>
      {/* ✅ LOGO IN HEADER */}
      <SidebarHeader className="p-4 pb-2">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild className="cursor-default hover:bg-transparent">
              <div className="flex items-center gap-2">
                <span className="font-bold text-lg">SwiftBounty</span>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      {/* MAIN NAVIGATION */}
      <SidebarContent className="px-4">
        <SidebarMenu>
         {menuItems.map((item) => (
            <SidebarMenuItem key={item.title}>
              <NavLink to={item.url} className={({ isActive }) =>
              `flex items-center gap-2 p-2 rounded-sm transition-all ${
                isActive 
                  ? "bg-purple-500 text-white" 
                  : ""
              }`
            }
          >
            <item.icon className="size-4" />
            <span>{item.title}</span>
          </NavLink>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>


      <SidebarFooter className="p-4 pt-2">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <a href="/profile" className="cursor-pointer">
                <span className="sr-only">User Menu</span>
                {user?.photoURL ? (
                  <img
                    src={user.photoURL}
                    alt={user.displayName || "User"}
                    referrerPolicy="no-referrer"
                    className="h-8 w-8 rounded-md object-cover"
                  />
                ) : (
                  <div className="flex h-8 w-8 items-center justify-center rounded-md bg-sidebar-primary text-sidebar-primary-foreground">
                    <span className="text-sm font-medium">
                      {(user?.displayName?.charAt(0) || "U").toUpperCase()}
                    </span>
                  </div>
                )}
                <div className="flex flex-col gap-1 leading-none">
                  <span>{user?.displayName || "Guest"}</span>
                  <span className="text-xs text-sidebar-foreground/70">
                    {user?.email || ""}
                  </span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}