/**
 * RootLayout-Komponente
 * ---------------------
 * Dies ist das zentrale Layout für die gesamte Next.js-App.
 * - Definiert globale Metadaten (Titel, Beschreibung)
 * - Bindet globale Stile und Themes ein
 * - Stellt App-weite Provider bereit (Theme, Sidebar)
 * - Strukturiert das Layout in Sidebar, Header und Hauptinhalt
 */

import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { SidebarProvider } from "@/components/ui/sidebar";
import { APP_DESCRIPTION, APP_NAME } from "@/lib/constants/constants";
import { AppInit } from "./app-init";
import Header from "@/components/shared/header/header";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { AppSidebar } from "@/components/shared/sidebar";

// Globale Metadaten für die Seite (z.B. für SEO)
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
    // html-Root-Element, setzt Sprache und unterdrückt Hydrationswarnungen (wichtig für ThemeProvider)
    <html lang="en" suppressHydrationWarning>
      <body className="font-araboto antialiased">
        {/* Initialisierungscode für App, z.B. Auth, Analytics */}
        <AppInit />
        {/* ThemeProvider für Light/Dark/Auto Theme */}
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {/* Globaler SidebarProvider (z.B. für mobile Sidebar-Handling) */}
          <SidebarProvider>
            {/* Flex-Container: Sidebar + Hauptinhalt */}
            <div className="flex min-h-screen w-full">
              {/* Linke Sidebar */}
              <AppSidebar />
              {/* Hauptbereich: Header + Seiteninhalt */}
              <main className="flex flex-col flex-1">
                {/* Obere Navigationsleiste, z.B. mit Breadcrumbs oder User-Menü */}
                <Header />
                {/* Seiteninhalt: Hier werden die Seiten gerendert */}
                <div className="px-8 md:px-10 py-6 md:py-10 w-full max-w-[2400px] mx-auto">{children}</div>
              </main>
            </div>
          </SidebarProvider>
        </ThemeProvider>
        <SpeedInsights />
      </body>
    </html>
  );
}
