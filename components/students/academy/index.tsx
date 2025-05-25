"use client";

/**
 * Haupt-Komponente für den Videoplayer einer Academy-Kategorie (Intraday / Scalping).
 * Video, Button Prev / Next, Beschreibung und Nodes, Fortschritt und Kapitelübersicht.
 */

import React, { useEffect, useMemo, useState, useCallback } from "react";
import ButtonBarVideo from "./button-bar";
import ContentVideo from "./content";
import ProgressBar from "./progressbar";
import VideoEmbed from "./video-embed";
import VideoList from "./video-list";
import { AcademyCategory, AcademySection, MockDataAcademy } from "@/lib/data/academy-type";
import { AcademyLocalStorageService } from "@/lib/data/localStorage";

/**
 * Hilfsfunktion: Merged Sections mit aktuellen Video-States (z.B. isCompleted).
 * Für jedes Video in jeder Section werden Status-Informationen aus stateById gemergt.
 */
function mergeSectionsWithVideoStates(sections: AcademySection[], stateById: Map<string, MockDataAcademy>): AcademySection[] {
  return sections.map((section) => ({
    ...section,
    videos: section.videos.map((v) => ({
      ...v,
      ...stateById.get(v.id),
    })),
  }));
}

const VideoPlayerPage: React.FC<{ category: AcademyCategory }> = ({ category }) => {
  // State für die geladenen Kapitel (Sections) aus dem Storage
  const [sections, setSections] = useState<AcademySection[]>([]);
  // State für alle Videos dieser Kategorie (als Flat-Array)
  const [videoStates, setVideoStates] = useState<MockDataAcademy[]>([]);
  // Index des aktuell ausgewählten Videos im Flat-Array
  const [currentVideoIdx, setCurrentVideoIdx] = useState(0);
  // Aktiver Tab: "description" für Beschreibung, "note" für Notiz
  const [activeTab, setActiveTab] = useState<"description" | "note">("description");

  /**
   * Effekt: Lädt Sections und initialisiert Video-Liste & aktuellen Index bei Kategorie-Wechsel.
   * - Holt die Sections aus dem Storage.
   * - Baut ein Flat-Array aller Videos (sortiert) für einfachere Navigation.
   * - Setzt den Index auf das erste nicht-abgeschlossene Video (oder auf 0).
   */
  useEffect(() => {
    const loadedSections = AcademyLocalStorageService.getSectionsByCategorySorted(category, true);
    setSections(loadedSections);

    // Erzeuge eine flache Liste aller Videos aus allen Sections
    const flatVideos = loadedSections.flatMap((section) => section.videos);
    setVideoStates(flatVideos);

    // Finde das erste nicht abgeschlossene Video, sonst wähle das erste Video
    const firstIncompleteIdx = flatVideos.findIndex((v) => !v.isCompleted);
    setCurrentVideoIdx(firstIncompleteIdx !== -1 ? firstIncompleteIdx : 0);
  }, [category]);

  /**
   * Memo: Mapping von Video-ID auf Video-Objekt für schnellen Zugriff beim Mergen.
   */
  const stateById = useMemo(() => new Map(videoStates.map((v) => [v.id, v])), [videoStates]);

  /**
   * Memo: Sections mit aktuellem Video-Status (isCompleted etc.) für die Kapitelübersicht.
   */
  const mergedSections = useMemo(() => mergeSectionsWithVideoStates(sections, stateById), [sections, stateById]);

  /**
   * Memo: Berechnet die Anzahl abgeschlossener Videos und den Fortschritt in Prozent.
   */
  const completedCount = useMemo(() => videoStates.filter((v) => v.isCompleted).length, [videoStates]);
  const progress = useMemo(() => Math.round((completedCount / videoStates.length) * 100), [completedCount, videoStates.length]);

  // --- Steuerungsfunktionen und Callbacks ---

  /**
   * Callback: Navigiert zum vorherigen Video.
   */
  const handlePrev = useCallback(() => setCurrentVideoIdx((i) => Math.max(0, i - 1)), []);

  /**
   * Callback: Navigiert zum nächsten Video.
   */
  const handleNext = useCallback(() => setCurrentVideoIdx((i) => Math.min(videoStates.length - 1, i + 1)), [videoStates.length]);

  /**
   * Callback: Setzt oder entfernt den "abgeschlossen"-Status für das aktuelle Video.
   * Aktualisiert sowohl den lokalen State als auch den LocalStorage.
   */
  const handleCheck = useCallback(
    (checked: boolean) => {
      setVideoStates((states) => {
        const updated = [...states];
        updated[currentVideoIdx] = { ...updated[currentVideoIdx], isCompleted: checked };
        return updated;
      });
      AcademyLocalStorageService.setVideoCompleted(videoStates[currentVideoIdx].id, checked);
    },
    [currentVideoIdx, videoStates]
  );

  /**
   * Callback: Wechselt den aktiven Tab (zwischen Beschreibung und Notiz).
   */
  const handleTabChange = useCallback((value: "description" | "note") => setActiveTab(value), []);

  /**
   * Callback: Zeigt eine Abschlussmeldung an, wenn der Kurs beendet wird.
   */
  const handleFinish = useCallback(() => window.alert("Kurs abgeschlossen!"), []);

  /**
   * Callback: Navigiert zu einem ausgewählten Video aus der Kapitelübersicht.
   */
  const handleVideoSelect = useCallback((idx: number) => setCurrentVideoIdx(idx), []);

  // --- Fallback: Zeige Hinweis, falls keine Daten geladen wurden ---
  if (sections.length === 0 || videoStates.length === 0) {
    return <div className="w-full max-w-[2400px] mx-auto p-4">Keine Daten verfügbar</div>;
  }

  // --- Rendering der eigentlichen Seite ---

  // Hole aktuelles Video-Objekt und prüfe, ob es das letzte Video ist
  const currentVideo = videoStates[currentVideoIdx];
  const isLastVideo = currentVideoIdx === videoStates.length - 1;

  return (
    <div className="w-full max-w-[2400px] mx-auto p-4 space-y-4">
      {/* Titel des aktuellen Videos */}
      <h1 className=" font-bold  sm:text-xl  lg:text-3xl">{currentVideo.title}</h1>

      {/* Mobile-Ansicht: Fortschritt und Kapitelübersicht oben */}
      <div className="flex flex-col space-y-4 lg:hidden">
        <ProgressBar progress={progress} />
        <VideoList sections={mergedSections} currentVideoIndex={currentVideoIdx} videoList={videoStates} onSelect={handleVideoSelect} />
      </div>

      {/* Desktop-Layout: Video, Navigation, Beschreibung/Notiz, Fortschritt, Kapitel */}
      <div className="flex flex-col lg:grid lg:grid-cols-12 lg:gap-6">
        {/* Linke Seite: Video, Navigation und Beschreibung/Notiz */}
        <div className="lg:col-span-8 flex flex-col space-y-4">
          <VideoEmbed src={currentVideo.videoUrl} title={currentVideo.title} />
          <ButtonBarVideo
            isCompleted={currentVideo.isCompleted}
            videoId={currentVideo.id}
            onPrev={handlePrev}
            onNext={handleNext}
            onFinish={handleFinish}
            disablePrev={currentVideoIdx === 0}
            disableNext={isLastVideo}
            isLast={isLastVideo}
            onCheck={handleCheck}
            tabValue={activeTab}
            onTabChange={handleTabChange}
          />
          <ContentVideo description={currentVideo.description} note={currentVideo.note} activeTab={activeTab} />
        </div>
        {/* Rechte Seite: Fortschritt und Kapitelübersicht */}
        <div className="lg:col-span-4 mt-6 lg:mt-0 hidden lg:flex flex-col space-y-4">
          <ProgressBar progress={progress} />
          <VideoList sections={mergedSections} currentVideoIndex={currentVideoIdx} videoList={videoStates} onSelect={handleVideoSelect} />
        </div>
      </div>
    </div>
  );
};

export default VideoPlayerPage;
