import type { Metadata } from "next";
import "./globals.css";
import { APP_DESCRIPTION, APP_NAME } from "@/lib/constants";
import { ThemeProvider } from "next-themes";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/sideNav/app-sidebar";
import Header from "@/components/header/header";

export const metadata: Metadata = {
  title: {
    template: `%s | Education`,
    default: APP_NAME,
  },
  description: APP_DESCRIPTION,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-araboto antialiased">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <SidebarProvider>
            <div className="flex min-h-screen w-full">
              {/* Sidebar left */}
              <AppSidebar />
              {/* Main content rechts neben der Sidebar */}
              <main className="flex flex-col flex-1">
                {/* Optional: Topbar with breadcrum etc */}
                <Header />
                {/* Page Content */}
                <div className="p-6">{children}</div>
              </main>
            </div>
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
