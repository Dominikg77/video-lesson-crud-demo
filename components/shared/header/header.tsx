"use client";

/**
 * Header-Komponente mit Sidebar-Trigger, Plattform-Titel, Breadcrumb (nur ab 576px sichtbar) und Toggle für Dark/Light-Mode.
 */

import { SidebarTrigger } from "../../ui/sidebar";
import ModeToggle from "./mode-toggle";
import Link from "next/link";
import { usePathname } from "next/navigation";

/**
 * Wandelt URL-Segmente in sprechende Namen um.
 */
function prettify(segment: string) {
  if (!segment) return "";
  switch (segment) {
    case "dashboard":
      return "Dashboard";
    case "users":
      return "Benutzer";
    default:
      return segment.charAt(0).toUpperCase() + segment.slice(1);
  }
}

const Header = () => {
  const pathname = usePathname();

  // Zerlege den Pfad in Segmente, filtere leere Elemente
  const pathSegments = pathname.split("/").filter(Boolean);

  // Breadcrumbs erstellen: für jedes Segment einen Link (ausser letzter, der ist nur Text)
  let href = "";
  const breadcrumbs = pathSegments.map((segment, idx) => {
    href += "/" + segment;
    const isLast = idx === pathSegments.length - 1;
    return (
      <span key={href} className="flex items-center">
        {!isLast ? (
          <>
            <Link href={href} className="text-blue-600 hover:underline">
              {prettify(segment)}
            </Link>
            <span className="mx-2 text-gray-400">/</span>
          </>
        ) : (
          <span className="text-gray-700">{prettify(segment)}</span>
        )}
      </span>
    );
  });

  return (
    <div className="flex items-center justify-between px-4 py-2 border-b">
      {/* Linke Seite: Sidebar-Trigger, Titel und Breadcrumb */}
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-2">
          <SidebarTrigger />
          {/* Logo anzeigen */}
          {/* <Image
            src="/images/logo.png"
            alt="Logo"
            width={0}
            height={0}
            className="h-6 w-auto object-contain"
            sizes="(max-width: 768px) 100vw, 200px"
          /> */}
          <span>Education</span>
        </div>
        {/* Breadcrumb: nur auf grösseren Bildschirmen (>=576px, also ab sm) anzeigen */}
        {breadcrumbs.length > 0 && <span className="ml-2 hidden sm:flex items-center text-sm text-gray-500">{breadcrumbs}</span>}
      </div>

      {/* Rechte Seite: Version & Toggle */}
      <div className="flex items-center gap-4">
        <span className="text-sm font-semibold bg-blue-500 text-white px-2 py-1 rounded">DEV v0.0.1</span>
        <ModeToggle />
      </div>
    </div>
  );
};

export default Header;
