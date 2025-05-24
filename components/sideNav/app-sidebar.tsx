"use client";

import * as React from "react";
import {
  Activity,
  ArrowUpCircle,
  BarChart2,
  BookOpen,
  Code,
  Command,
  CreditCard,
  DollarSign,
  Edit3,
  FileText,
  Frame,
  GraduationCap,
  Layers,
  Layers3,
  Link,
  Map,
  Package,
  PencilRuler,
  PieChart,
  Settings,
  Star,
  UserLock,
  Users,
  Video,
  Zap,
} from "lucide-react";


import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarRail } from "@/components/ui/sidebar";
import { TeamSwitcher } from "./team-switcher";
import { NavUser } from "./nav-user";
import { PrimaryMenu } from "./primary-menu";
import { AdditionalSection } from "./additional-section";
import { BackOfficeSection } from "./back-office-section";

// This is sample data.
const data = {
  user: {
    name: "Dominik Graf",
    email: "dominik.graf2001@gmail.com",
    avatar: "/avatars/shadcn.jpg",
  },

  roles: [
    {
      name: "Schüler",
      logo: GraduationCap,
      plan: "Masterclass",
    },
    {
      name: "Coach",
      logo: UserLock,
      plan: "coach",
    },
    {
      name: "Admin",
      logo: Command,
      plan: "admin",
    },
    {
      name: "Super Admin",
      logo: Code,
      plan: "SuperAdmin",
    },
  ],

  primaryMenu: [
    {
      title: "Intraday",
      url: "#",
      icon: Activity,
      isActive: true,
      items: [
        {
          title: "Academy",
          url: "academy/intraday",
        },
        {
          title: "Lessons",
          url: "#",
        },
        {
          title: "Voice Over",
          url: "#",
        },
        {
          title: "Performance Guide",
          url: "#",
        },
      ],
    },
    {
      title: "Scalping",
      url: "#",
      icon: Zap,
      items: [
        {
          title: "Academy",
          url: "#",
        },
        {
          title: "Lessons",
          url: "#",
        },
        {
          title: "Voice Over",
          url: "#",
        },
      ],
    },
    {
      title: "Masterclass",
      url: "#",
      icon: Users,
      items: [
        {
          title: "Webinar Aufzeichnung",
          url: "#",
        },
        {
          title: "Mentor Calls",
          url: "#",
        },
      ],
    },
    {
      title: "Add-On Wissen",
      url: "#",
      icon: Layers,
      items: [
        {
          title: "Daily Insights",
          url: "#",
        },
        {
          title: "Live Trading",
          url: "#",
        },
        {
          title: "Lessons",
          url: "#",
        },
      ],
    },
    {
      title: "Software & Links",
      url: "#",
      icon: Link,
      items: [
        {
          title: "Atas",
          url: "#",
        },
        {
          title: "Bookmap",
          url: "#",
        },
        {
          title: "Trading-Kontent",
          url: "#",
        },
        {
          title: "Discord Community",
          url: "#",
        },
        {
          title: "Lightshot",
          url: "#",
        },
      ],
    },
    {
      title: "Tools",
      url: "#",
      icon: PencilRuler,
      items: [
        {
          title: "Wirtschaftskalender",
          url: "#",
        },
        {
          title: "Ferienkalender",
          url: "#",
        },
        {
          title: "Aktien-Screener",
          url: "#",
        },
        {
          title: "Aktien-Headmap",
          url: "#",
        },
      ],
    },
    {
      title: "Spezielles",
      url: "#",
      icon: Star,
      items: [
        {
          title: "Tralgo Day 2024",
          url: "#",
        },
        {
          title: "Tralgo Day Aufzeichnung",
          url: "#",
        },
        {
          title: "Spezial Webinar",
          url: "#",
        },
        {
          title: "Workshops",
          url: "#",
        },
      ],
    },
  ],

  additionalSections: [
    {
      name: "Analytics",
      url: "#",
      icon: BarChart2,
    },
    {
      name: "Capital",
      url: "#",
      icon: DollarSign,
    },
    {
      name: "Upgrade",
      url: "#",
      icon: ArrowUpCircle,
    },
    {
      name: "Trading Package",
      url: "#",
      icon: Package,
    },
    {
      name: "Add On Wissen",
      url: "#",
      icon: Layers3,
    },
    {
      name: "Notizen",
      url: "#",
      icon: Edit3,
    },
  ],

  backOffice: [
    {
      name: "Academy",
      url: "#",
      icon: BookOpen,
    },
    {
      name: "Lessons",
      url: "#",
      icon: FileText,
    },
    {
      name: "Live Streams",
      url: "#",
      icon: Video,
    },

    {
      name: "Zahlungen",
      url: "#",
      icon: CreditCard,
    },
    {
      name: "Web-Tracker",
      url: "#",
      icon: BarChart2,
    },
    {
      name: "Settings",
      url: "#",
      icon: Settings,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher roles={data.roles} />
      </SidebarHeader>
      <SidebarContent>
        {/* LOGO */}
        {/* <div className="my-4 flex justify-center">
          <Image
            src="/images/logo2.jpg"
            alt="Logo"
            width={220} 
            height={15} 
            priority 
          />
        </div> */}

        <PrimaryMenu items={data.primaryMenu} />
        <AdditionalSection additionalSections={data.additionalSections} />
        <BackOfficeSection backOfficeSection={data.backOffice} />

      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
