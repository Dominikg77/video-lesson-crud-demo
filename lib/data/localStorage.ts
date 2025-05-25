"use client";
import { AcademyCategory, AcademySection, MockDataAcademy } from "./academy-type";

export const STORAGE_KEY_ACADEMY_CONTENT = "academy_content";

export const AcademyLocalStorageService = {
    // Initialdaten setzen
    initData: (sections: AcademySection[]) => {
        localStorage.removeItem(STORAGE_KEY_ACADEMY_CONTENT);
        localStorage.setItem(STORAGE_KEY_ACADEMY_CONTENT, JSON.stringify(sections));
    },

    // Alle Sections holen
    getSections: (): AcademySection[] => {
        const raw = localStorage.getItem(STORAGE_KEY_ACADEMY_CONTENT);
        return raw ? JSON.parse(raw) : [];
    },


    getSectionsByCategorySorted: (
        category: AcademyCategory,
        isLiveFilter: boolean = false
    ): AcademySection[] => {
        const sections: AcademySection[] = AcademyLocalStorageService.getSections();

        // Filtern nach Kategorie
        const filtered = sections.filter(section => section.category === category);

        // Videos in jeder Section sortieren (vor LiveFilter, damit Sortierung auch da stimmt)
        const sortedVideosPerSection = filtered.map(section => ({
            ...section,
            videos: section.videos
                .filter(video => !isLiveFilter || video.isLive) // optionaler LiveFilter
                .sort((a, b) => a.orderId - b.orderId), // sortiere Videos
        }));

        // Nur Sections behalten, die noch Videos haben (nach Filterung)
        const nonEmptySections = sortedVideosPerSection.filter(section => section.videos.length > 0);

        // Sortiere Sections nach orderId
        return nonEmptySections.sort((a, b) => a.orderId - b.orderId);
    },



    // Set Completed-Status eines Videos
    setVideoCompleted: (videoId: string, isCompleted: boolean) => {
        const sections = AcademyLocalStorageService.getSections();
        const [sIdx, vIdx] = AcademyLocalStorageService.findVideoById(sections, videoId);

        if (sIdx !== -1 && vIdx !== -1) {
            sections[sIdx].videos[vIdx].isCompleted = isCompleted;
            localStorage.setItem(STORAGE_KEY_ACADEMY_CONTENT, JSON.stringify(sections));
        }
    },


    // Video löschen
    removeVideo: (videoId: string) => {
        const sections = AcademyLocalStorageService.getSections();
        for (const section of sections) {
            const before = section.videos.length;
            section.videos = section.videos.filter((v) => v.id !== videoId);
            if (before !== section.videos.length) break; // Schon gefunden & gelöscht
        }
        localStorage.setItem(STORAGE_KEY_ACADEMY_CONTENT, JSON.stringify(sections));
    },

    // Holt ein Video anhand der Video-Id aus dem Local Storage
  getVideoById: (videoId: string) => {
    const sections = AcademyLocalStorageService.getSections();
    for (const section of sections) {
        const video = section.videos.find((v) => v.id === videoId);
        if (video) {
            return {
                video,
                category: section.category, // oder section.category, je nach Datenmodell
            };
        }
    }
    return null;
},



    // Video editieren (beliebige Felder, anhand der Id)
    editVideo: (videoId: string, update: Partial<MockDataAcademy>) => {
        AcademyLocalStorageService.updateVideo(videoId, update);
    },


    // Video updaten (z.B. isCompleted), partialUpdate = {isCompleted: true}
    updateVideo: (videoId: string, partialUpdate: Partial<MockDataAcademy>) => {
        const sections = AcademyLocalStorageService.getSections();
        const [sIdx, vIdx] = AcademyLocalStorageService.findVideoById(sections, videoId);

        if (sIdx !== -1 && vIdx !== -1) {
            sections[sIdx].videos[vIdx] = {
                ...sections[sIdx].videos[vIdx],
                ...partialUpdate,
            };
            localStorage.setItem(STORAGE_KEY_ACADEMY_CONTENT, JSON.stringify(sections));
        }
    },

    // Neues Video zu einer Section hinzufügen (sectionId angeben)
    addVideo: (sectionId: string, video: MockDataAcademy) => {
        const sections = AcademyLocalStorageService.getSections();
        const section = sections.find((s) => s.id === sectionId);
        if (section) {
            section.videos.push(video);
            localStorage.setItem(STORAGE_KEY_ACADEMY_CONTENT, JSON.stringify(sections));
        }
    },


    // Hilfsfunktion: Video suchen (liefert [sectionIdx, videoIdx] oder [-1, -1])
    findVideoById: (sections: AcademySection[], videoId: string): [number, number] => {
        for (let sIdx = 0; sIdx < sections.length; sIdx++) {
            const vIdx = sections[sIdx].videos.findIndex((v) => v.id === videoId);
            if (vIdx !== -1) return [sIdx, vIdx];
        }
        return [-1, -1];
    },

};