import { 
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem, 
} from "@/components/ui/sidebar";
import LogoImage from "@/public/Logo.png"
import BlackImage from "@/public/LogoBlack.png"
import { Home, User2, UserRound } from "lucide-react";
import Image from "next/image";
import pfp from "@/public/randomImage.jpg"
import { UserData } from "@/data/userData";

const AppSidebar = () => {
  return (
    <Sidebar>
        <SidebarHeader className="flex items-center px-4 py-4">
            <Image
            src={BlackImage}
            alt="Logo"
            className="h-35 w-auto"
            />
        </SidebarHeader>
        <SidebarContent>
            <SidebarGroup>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton asChild>
                        <a href="/dashboard"><Home/> <span>Home</span></a>
                        </SidebarMenuButton>
                        <SidebarMenuButton asChild>
                        <a href="/profile"><UserRound/> <span>Profile</span></a>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarGroup>
        </SidebarContent>
        <SidebarFooter>
            <SidebarMenu>
                <SidebarMenuItem>
                    <SidebarMenuButton>
                        <Image
                        src={pfp}
                        alt="pfp"
                        width={32}
                        height={32}
                        className="rounded-full object-cover"
                        /> {UserData.name}
                    </SidebarMenuButton>
                </SidebarMenuItem>
            </SidebarMenu>
        </SidebarFooter>
    </Sidebar>
  )
}

export default AppSidebar
