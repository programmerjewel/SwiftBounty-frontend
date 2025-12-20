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
import { Calendar, Home, Inbox, Search, Settings } from "lucide-react";


const items = [
  { title: "Home", url: "/dashboard", icon: Home },
  { title: "Inbox", url: "/inbox", icon: Inbox },
  { title: "Calendar", url: "/calendar", icon: Calendar },
  { title: "Search", url: "/search", icon: Search },
  { title: "Settings", url: "/settings", icon: Settings },
];

export default function DashboardSidebar() {
  const { user } = useAuth();

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
      <SidebarContent className="px-2">
        <SidebarMenu>
          {items.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton asChild>
                <a href={item.url}>
                  <item.icon />
                  <span>{item.title}</span>
                </a>
              </SidebarMenuButton>
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