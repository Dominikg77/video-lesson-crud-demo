
export enum AcademyCategory {
    Intraday = "intraday",
    Scalping = "scalping"
}

export interface MockDataAcademy {
    id: string;
    orderId: number;
    sectionId: string;
    title: string;
    description: string;
    videoUrl: string;
    isLive: boolean;
    // Props from User, userData, sollten nicht mit den Academy Daten gespeichert werden
    note: string;
    isCompleted: boolean;
}

// wäre eine eigene Tabelle  (Sectionen erstellen und darin wieder ein verweiss auf die Videos)
export interface AcademySection {
    id: string;
    title: string;
    orderId: number;
    category: AcademyCategory;
    videos: MockDataAcademy[];
}

export interface MockDataAcademyAddEdit {
    orderId: number;
    sectionId: string;
    title: string;
    description: string;
    videoUrl: string;
    isLive: boolean;
}