"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MockDataAcademy } from "@/lib/data/academy-type";
import { ChevronDown, CheckCircle, Circle } from "lucide-react";
import * as React from "react";

type AcademySection = {
  id: string;
  title: string;
  orderId: number;
  videos: MockDataAcademy[];
};

interface VideoListProps {
  sections: AcademySection[];
  currentVideoIndex: number;
  videoList: MockDataAcademy[]; // flat list, ordered
  onSelect: (index: number) => void;
}

const VideoList: React.FC<VideoListProps> = ({ sections, currentVideoIndex, videoList, onSelect }) => {
  // Map für schnellen Zugriff auf aktuelle Video-Daten
  const videoMap = React.useMemo(() => new Map(videoList.map((v) => [v.id, v])), [videoList]);

  // Sections mit aktuellen Video-Objekten mergen
  const mergedSections = React.useMemo(() => {
    return sections.map((section) => ({
      ...section,
      videos: section.videos.map((v) => videoMap.get(v.id)).filter((v): v is MockDataAcademy => !!v && v.isLive),
    }));
  }, [sections, videoMap]);

  // Finde alle erlaubten Videos (isComplete==true oder das erste nicht-komplette)
  const firstIncompleteIndex = videoList.findIndex((v) => !v.isCompleted);
  const selectableIndices = new Set(
    videoList.map((v, idx) => (v.isCompleted || idx === firstIncompleteIndex ? idx : null)).filter((v) => v !== null) as number[]
  );

  // Hole Index im flat videoList für ein Video
  const getFlatIndex = (videoId: string) => videoList.findIndex((v) => v.id === videoId);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Kapitelübersicht</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2 text-sm">
          {mergedSections.map((section) => {
            // Gibt es ein aktives Video im Kapitel?
            const activeIndexInSection = section.videos.findIndex((v) => getFlatIndex(v.id) === currentVideoIndex);
            const isOpen = activeIndexInSection !== -1;

            return (
              <li key={section.id}>
                <details open={isOpen} className="group">
                  <summary className="flex items-center cursor-pointer select-none font-medium text-base  group-open:text-primary transition-colors">
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
                                ? " hover:bg-primary/80"
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
  );
};

export default VideoList;
