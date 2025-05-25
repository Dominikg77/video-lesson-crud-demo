import { IntraDayRoutes, ScalpingRoutes } from "@/lib/constants/route-constant";

export interface DashboardCardData {
    title: string;
    description: string;
    link: string;
}

/**
 * dashboardMainCards
 * ------------------
 * Enthält die Hauptkarten für das Dashboard.
 * Jede Karte repräsentiert eine Route und enthält Titel, Beschreibung und Link.
 */

export const dashboardMainCards: DashboardCardData[] = [
    {
        title: "Intraday",
        description: "Lerne die Grundlagen des Intraday Tradings und wie du erfolgreich in Echtzeit handelst.",
        link: IntraDayRoutes.academy
    },
    {
        title: "Scalping",
        description: "Scalping Strategien für schnelle Trades und hohe Frequenz.",
        link: ScalpingRoutes.academy
    },
    {
        title: "Masterclass",
        description: "Vertiefe dein Wissen mit unserer Masterclass und werde zum Experten.",
        link: "/masterclass"
    }
];