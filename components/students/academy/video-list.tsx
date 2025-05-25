"use client";
/**
 * Kapitel- und Videoübersicht:
 * - Mobile: shadcn/ui DropdownMenu außerhalb der Card, volle Breite, keine Überschrift
 * - Desktop: Akkordeon-Liste wie zuvor
 * - Auswahl-Regeln (abgeschlossen/erstes offenes Video) beachtet
 * - Im Dropdown wird beim Selektieren keine aktuelle Auswahl hervorgehoben
 * - Dropdown-Button zeigt aktuellen Section- und Video-Titel, ist abgeschnitten, nimmt die volle Breite ein
 */
import React, { useMemo } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MockDataAcademy } from "@/lib/data/academy-type";
import { ChevronDown, CheckCircle, Circle } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuGroup,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

// Struktur für einen Abschnitt mit zugehörigen Videos
type AcademySection = {
  id: string;
  title: string;
  orderId: number;
  videos: MockDataAcademy[];
};

// Props für die Komponente
interface VideoListProps {
  sections: AcademySection[];
  currentVideoIndex: number;
  videoList: MockDataAcademy[]; // Flache Liste aller Videos
  onSelect: (index: number) => void;
}

// Hauptkomponente zur Anzeige der Videoübersicht
const VideoList: React.FC<VideoListProps> = ({ sections, currentVideoIndex, videoList, onSelect }) => {
  // Erstelle eine Map für schnellen Zugriff auf Video-Informationen per ID
  const videoMap = useMemo(() => new Map(videoList.map((v) => [v.id, v])), [videoList]);

  // Mische die Sektionen mit den aktuellen Video-Objekten und filtere nur Live-Videos
  const mergedSections = useMemo(
    () =>
      sections.map((section) => ({
        ...section,
        videos: section.videos.map((v) => videoMap.get(v.id)).filter((v): v is MockDataAcademy => !!v && v.isLive),
      })),
    [sections, videoMap]
  );

  // Finde den Index des ersten noch nicht abgeschlossenen Videos
  const firstIncompleteIndex = useMemo(() => videoList.findIndex((v) => !v.isCompleted), [videoList]);

  // Erstelle eine Set-Liste aller auswählbaren Video-Indizes (bereits abgeschlossen oder erstes offenes)
  const selectableIndices = useMemo(
    () =>
      new Set(
        videoList.map((v, idx) => (v.isCompleted || idx === firstIncompleteIndex ? idx : null)).filter((v): v is number => v !== null)
      ),
    [videoList, firstIncompleteIndex]
  );

  // Hilfsfunktion: Ermittle den Index in der flachen Liste anhand der Video-ID
  const getFlatIndex = (videoId: string) => videoList.findIndex((v) => v.id === videoId);

  // Aktuell ausgewähltes Video (Fallback-Titel bei Fehler)
  const currentVideo = videoList[currentVideoIndex] || { title: "Unbekannt", id: "" };

  return (
    <>
      {/* Mobile-Ansicht: Dropdown-Menü */}
      <div className="lg:hidden">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              className="w-full max-w-[80vw] min-w-0 h-auto min-h-10 text-sm px-2 py-1 flex items-center justify-between overflow-hidden">
              <span className="truncate block flex-1 text-left">{currentVideo.title}</span>
              <ChevronDown className="ml-1 h-4 w-4 shrink-0" />
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent side="bottom" align="start" className="max-w-[80vw] w-auto text-sm px-2 py-1">
            {mergedSections.map((section, sIdx) => (
              <React.Fragment key={section.id}>
                {sIdx > 0 && <DropdownMenuSeparator />}
                <DropdownMenuLabel className="break-words">{section.title}</DropdownMenuLabel>
                <DropdownMenuGroup>
                  {section.videos.map((video) => {
                    const idx = getFlatIndex(video.id);
                    const isSelectable = selectableIndices.has(idx);
                    const isCompleted = video.isCompleted;

                    return (
                      <DropdownMenuItem
                        key={video.id}
                        disabled={!isSelectable}
                        onSelect={() => isSelectable && onSelect(idx)}
                        className="flex items-center gap-2">
                        {isCompleted ? (
                          <CheckCircle className="w-4 h-4 text-green-600 shrink-0" />
                        ) : (
                          <Circle className="w-4 h-4 text-muted-foreground shrink-0" />
                        )}
                        <span className="break-words text-left">{video.title}</span>
                      </DropdownMenuItem>
                    );
                  })}
                </DropdownMenuGroup>
              </React.Fragment>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Desktop-Ansicht: Akkordeon-Liste mit Kapiteln */}
      <Card className="hidden lg:block">
        <CardHeader className="hidden lg:block">
          <CardTitle>Kapitelübersicht</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 text-sm hidden lg:block">
            {mergedSections.map((section) => {
              const activeIndexInSection = section.videos.findIndex((v) => getFlatIndex(v.id) === currentVideoIndex);
              const isOpen = activeIndexInSection !== -1;

              return (
                <li key={section.id}>
                  <details open={isOpen} className="group">
                    <summary className="flex items-center cursor-pointer select-none font-medium text-base group-open:text-primary transition-colors">
                      <ChevronDown className="mr-1 h-4 w-4 transition-transform group-open:rotate-180" />
                      {section.title}
                    </summary>
                    <ul className="ml-5 mt-1 space-y-1">
                      {section.videos.map((video) => {
                        const idx = getFlatIndex(video.id);
                        const isCurrent = idx === currentVideoIndex;
                        const isSelectable = selectableIndices.has(idx);
                        const isCompleted = video.isCompleted;

                        return (
                          <li key={video.id}>
                            <button
                              type="button"
                              disabled={!isSelectable}
                              onClick={() => isSelectable && onSelect(idx)}
                              className={`flex items-center w-full text-left rounded px-2 py-1 transition ${
                                isCurrent
                                  ? "bg-primary font-semibold"
                                  : isSelectable
                                  ? "hover:bg-primary/80"
                                  : "text-muted-foreground cursor-not-allowed"
                              }`}>
                              {isCompleted ? (
                                <CheckCircle className="w-4 h-4 mr-2" />
                              ) : (
                                <Circle className="w-4 h-4 text-muted-foreground mr-2" />
                              )}
                              <span>{video.title}</span>
                            </button>
                          </li>
                        );
                      })}
                    </ul>
                  </details>
                </li>
              );
            })}
          </ul>
        </CardContent>
      </Card>
    </>
  );
};

export default VideoList;
