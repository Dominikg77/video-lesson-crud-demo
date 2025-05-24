
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
    // Props from User, userData verweiss auf Id from AcademyData ans safe the Date in one place
    note: string;
    isCompleted: boolean;
}

export interface AcademySection {
    id: string;
    title: string;
    orderId: number;
    category: AcademyCategory;
    videos: MockDataAcademy[];
}