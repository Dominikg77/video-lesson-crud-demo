import { IntraDayRoutes } from "@/lib/constants/route-constant";

export interface DashboardCardData {
    title: string;
    description: string;
    link: string;
}

export const dashboardMainCards: DashboardCardData[] = [
    {
        title: "Intraday",
        description: "Lerne die Grundlagen des Intraday Tradings und wie du erfolgreich in Echtzeit handelst.",
        link: IntraDayRoutes.academy
    },
    {
        title: "Scalping",
        description: "Scalping Strategien für schnelle Trades und hohe Frequenz.",
        link: "/scalping"
    },
    {
        title: "Masterclass",
        description: "Vertiefe dein Wissen mit unserer Masterclass und werde zum Experten.",
        link: "/"
    }
];