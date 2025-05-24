
export enum AcademyCategory {
    Intraday = "intraday",
    Scalping = "scalping"
}

export interface MockDataAcademy {
    id: string;
    orderId: number;
    title: string;
    description: string;
    note: string;
    videoUrl: string;
    isCompleted: boolean;
}

export interface AcademySection {
    id: string;
    title: string;
    orderId: number;
    category: AcademyCategory;
    videos: MockDataAcademy[];
}

export const mockSections: AcademySection[] = [
    {
        id: "basic-wissen",
        title: "Basic Wissen",
        orderId: 1,
        category: AcademyCategory.Intraday,
        videos: [
            {
                id: "1sfd",
                orderId: 1,
                title: "Demand Index - Einer der besten Indikatoren für dein Trading",
                description: "<h3>Was ist der Demand Index</h3><p>Der Demand Index ist ein technischer Indikator, der das Verhältnis von Angebot und Nachfrage auf dem Markt misst. Er wird verwendet, um potenzielle Umkehrpunkte im Preisverlauf zu identifizieren und die Stärke eines Trends zu bewerten.</p>",
                note: "Muss ich Researchen, damit ich es in meinem Setup verwenden kann",
                videoUrl: "https://www.youtube.com/embed/q0Yo8lvsr4E",
                isCompleted: true,
            },
            {
                id: "as3ea",
                orderId: 2,
                title: "Nie wieder orientierungslos traden! Die richtige Marktanalyse",
                description: "In der folgenden Lesson zeige ich dir wie du Schritt für Schritt eine Marktanalyse für jeden Markt erstellen kannst und so immer eine klare Orientierung haben wirst. Die richtige Analyse ist das Fundament im Trading.",
                note: "Werde ich jeden Sonntag machen",
                videoUrl: "https://www.youtube.com/embed/4FU_E9inTAE",
                isCompleted: false,
            },
            {
                id: "asdasdgsdg",
                orderId: 3,
                title: "Eigener Prop-Trading Pool! So kann dein Trading seriöser und professioneller werden ",
                description: "Schaue mir Live über die Schulter und sichere Dir noch heute Dein Ticket für den ersten Offline Tralgo Day am 14. Juni 2024!",
                note: "Test str ",
                videoUrl: "https://www.youtube.com/embed/G3-W35YPVf4",
                isCompleted: false,
            },
        ],
    },
    {
        id: "live-trading",
        title: "Live Trading",
        orderId: 2,
        category: AcademyCategory.Intraday,
        videos: [
            {
                id: "asdasdasd",
                orderId: 1,
                title: "Trading Session 30 Lots im NQ $20.000 Profit",
                description: "enn Du den profitablen Handel mit Futures umf",
                note: "asdasdsad",
                videoUrl: "https://www.youtube.com/embed/fKRo4_8SwRo",
                isCompleted: false,
            },
            {
                id: "as3ea",
                orderId: 2,
                title: "Trading Session $8000 in einer Stunde ",
                description: "del mit Futures umfassend erlernen möchtest, bewirb Dich auf unsere ",
                note: "Weasdsadasden",
                videoUrl: "https://www.youtube.com/embed/GJr4zbbVn40",
                isCompleted: false,
            },
        ],
    },
];