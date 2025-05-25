"use client";

/**
 * LocalStorage-Service Dummy Backend für die Academy
 * Enthält Methoden zum Initialisieren, Lesen, Schreiben, Bearbeiten und Entfernen von Videos.
 */

import { AcademyCategory, AcademySection, MockDataAcademy } from "./academy-type";

// LocalStorage Key für Json 
export const STORAGE_KEY_ACADEMY_CONTENT = "academy_content";

export const AcademyLocalStorageService = {
    /**
     * Setzt die Anfangsdaten überschreibt alles, beim ersten Starte der App 
     * @param sections - Array mit allen Mock Daten aus mock-data-academy.ts
     */
    initData: (sections: AcademySection[]) => {
        localStorage.removeItem(STORAGE_KEY_ACADEMY_CONTENT);
        localStorage.setItem(STORAGE_KEY_ACADEMY_CONTENT, JSON.stringify(sections));
    },

    /**
     * Holt alle Sections inklusive aller Videos 
     * @returns Array von AcademySection
     */
    getSections: (): AcademySection[] => {
        const raw = localStorage.getItem(STORAGE_KEY_ACADEMY_CONTENT);
        return raw ? JSON.parse(raw) : [];
    },

    /**
     * Holt alle Sections einer Kategorie, sortiert, optional nur Live-Videos (Schüler sehen nur Live-Videos)
     * @param category - Gewünschte Kategorie
     * @param isLiveFilter - Wenn true: nur Videos, bei denen isLive=true
     * @returns Sortiertes, gefiltertes Array von Sections
     */
    getSectionsByCategorySorted: (
        category: AcademyCategory,
        isLiveFilter: boolean = false
    ): AcademySection[] => {
        const sections = AcademyLocalStorageService.getSections();

        // Sections nach Kategorie filtern
        const filtered = sections.filter(section => section.category === category);

        // Videos pro Section je nach Filter sortieren
        const sortedVideosPerSection = filtered.map(section => ({
            ...section,
            videos: section.videos
                .filter(video => !isLiveFilter || video.isLive)
                .sort((a, b) => a.orderId - b.orderId),
        }));

        // Leere Sections (ohne Videos nach Filter) entfernen
        const nonEmptySections = sortedVideosPerSection.filter(section => section.videos.length > 0);

        // Sections nach orderId sortieren
        return nonEmptySections.sort((a, b) => a.orderId - b.orderId);
    },

    /**
     * Setzt den Completed-Status eines Videos (true/false) im LocalStorage
     * @param videoId - ID des Videos
     * @param isCompleted - Neuer Status
     */
    setVideoCompleted: (videoId: string, isCompleted: boolean) => {
        const sections = AcademyLocalStorageService.getSections();
        const [sIdx, vIdx] = AcademyLocalStorageService.findVideoById(sections, videoId);

        if (sIdx !== -1 && vIdx !== -1) {
            sections[sIdx].videos[vIdx].isCompleted = isCompleted;
            localStorage.setItem(STORAGE_KEY_ACADEMY_CONTENT, JSON.stringify(sections));
        }
    },

    /**
     * Löscht ein Video anhand der ID aus allen Sections, nur Einzel Löschen möglich
     * @param videoId - ID des zu löschenden Videos
     */
    removeVideo: (videoId: string) => {
        const sections = AcademyLocalStorageService.getSections();
        for (const section of sections) {
            const before = section.videos.length;
            section.videos = section.videos.filter((v) => v.id !== videoId);
            if (before !== section.videos.length) break; // Video gefunden und entfernt, abbrechen
        }
        localStorage.setItem(STORAGE_KEY_ACADEMY_CONTENT, JSON.stringify(sections));
    },

    /**
     * Holt ein Video, gibt das Video und die Kategorie zurück
     * @param videoId - ID des Videos
     * @returns { video, category } oder null, falls nicht gefunden
     */
    getVideoById: (videoId: string): { video: MockDataAcademy; category: AcademyCategory } | null => {
        const sections = AcademyLocalStorageService.getSections();
        for (const section of sections) {
            const video = section.videos.find((v) => v.id === videoId);
            if (video) {
                return {
                    video,
                    category: section.category,
                };
            }
        }
        return null;
    },

    /**
     * Bearbeitet ein Video (Partial = nur die Felder, die im Update übergeben werden)
     * @param videoId - ID des Videos
     * @param update - Teilweise neue Daten
     */
    editVideo: (videoId: string, update: Partial<MockDataAcademy>) => {
        AcademyLocalStorageService.updateVideo(videoId, update);
    },

    /**
     * Aktualisiert ein Video anhand der ID (z.B. einzelne Felder wie Titel, Status, etc.)
     * @param videoId - ID des Videos
     * @param partialUpdate - Teilweise neue Daten
     */
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

    /**
     * Fügt ein neues Video zu einer Section hinzu
     * @param sectionId - ID der Section
     * @param video - Komplette Video-Objekt
     */
    addVideo: (sectionId: string, video: MockDataAcademy) => {
        const sections = AcademyLocalStorageService.getSections();
        const section = sections.find((s) => s.id === sectionId);
        if (section) {
            section.videos.push(video);
            localStorage.setItem(STORAGE_KEY_ACADEMY_CONTENT, JSON.stringify(sections));
        }
    },

    /**
     * Hilfsfunktion: Sucht ein Video anhand der ID in allen Sections
     * @param sections - Array aller Sections
     * @param videoId - ID des Videos
     * @returns [sectionIdx, videoIdx] oder [-1, -1] falls nicht gefunden
     */
    findVideoById: (sections: AcademySection[], videoId: string): [number, number] => {
        for (let sIdx = 0; sIdx < sections.length; sIdx++) {
            const vIdx = sections[sIdx].videos.findIndex((v) => v.id === videoId);
            if (vIdx !== -1) return [sIdx, vIdx];
        }
        return [-1, -1];
    },
};