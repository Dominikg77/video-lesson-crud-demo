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

type AcademySection = {
  id: string;
  title: string;
  orderId: number;
  videos: MockDataAcademy[];
};

interface VideoListProps {
  sections: AcademySection[];
  currentVideoIndex: number;
  videoList: MockDataAcademy[]; // Flat-Liste, sortiert
  onSelect: (index: number) => void;
}

const VideoList: React.FC<VideoListProps> = ({ sections, currentVideoIndex, videoList, onSelect }) => {
  // Map für schnellen Zugriff auf aktuelle Video-Daten
  const videoMap = useMemo(() => new Map(videoList.map((v) => [v.id, v])), [videoList]);

  // Sections mit aktuellen Video-Objekten mergen, nur Live-Videos anzeigen
  const mergedSections = useMemo(
    () =>
      sections.map((section) => ({
        ...section,
        videos: section.videos.map((v) => videoMap.get(v.id)).filter((v): v is MockDataAcademy => !!v && v.isLive),
      })),
    [sections, videoMap]
  );

  // Finde Index des ersten nicht-abgeschlossenen Videos
  const firstIncompleteIndex = useMemo(() => videoList.findIndex((v) => !v.isCompleted), [videoList]);

  // Erlaubte auswählbare Videos: alle abgeschlossenen + das erste offene
  const selectableIndices = useMemo(
    () =>
      new Set(
        videoList.map((v, idx) => (v.isCompleted || idx === firstIncompleteIndex ? idx : null)).filter((v): v is number => v !== null)
      ),
    [videoList, firstIncompleteIndex]
  );

  // Hilfsfunktion: Hole Index im Flat-Array für ein Video
  const getFlatIndex = (videoId: string) => videoList.findIndex((v) => v.id === videoId);

  // Aktuelle Section und aktuelles Video ermitteln
  const currentSection = mergedSections.find((section) => section.videos.some((video) => getFlatIndex(video.id) === currentVideoIndex));
  const currentVideo = videoList[currentVideoIndex] || { title: "Unbekannt", id: "" };

  return (
    <>
      {/* Mobile: Dropdown außerhalb der Card, volle Breite */}
      <div className="block lg:hidden w-full mb-4">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              className="w-full h-auto min-h-12 flex items-center px-3 justify-between py-2"
              style={{ minWidth: 0 }}>
              <span className="block w-full min-w-0 break-words text-left">{currentSection ? currentVideo.title : currentVideo.title}</span>
              <ChevronDown className="ml-2 h-4 w-4 shrink-0" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            side="bottom"
            align="start"
            className="min-w-[var(--radix-dropdown-menu-trigger-width)] max-w-full overflow-x-hidden">
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
                        className="flex items-center">
                        {isCompleted ? (
                          <CheckCircle className="w-4 h-4 mr-2 text-green-600 shrink-0" />
                        ) : (
                          <Circle className="w-4 h-4 mr-2 text-muted-foreground shrink-0" />
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

      {/* Desktop: Akkordeon-Liste */}
      <Card>
        <CardHeader className="hidden lg:block">
          <CardTitle>Kapitelübersicht</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 text-sm hidden lg:block">
            {mergedSections.map((section) => {
              // Ist ein Video aus diesem Kapitel aktiv?
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
