
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