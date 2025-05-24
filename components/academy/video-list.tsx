import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronDown, CheckCircle, Circle } from "lucide-react";
import * as React from "react";

type Video = {
  id: string;
  title: string;
  isCompleted: boolean;
  orderId: number;
};

type AcademySection = {
  id: string;
  title: string;
  orderId: number;
  videos: Video[];
};

interface VideoListProps {
  sections: AcademySection[];
  currentVideoIndex: number;
  videoList: Video[]; // flat list, ordered
  onSelect: (index: number) => void;
}

const VideoList: React.FC<VideoListProps> = ({ sections, currentVideoIndex, videoList, onSelect }) => {
  // Finde alle erlaubten Videos (isComplete==true oder das erste nicht-komplette)
  const firstIncompleteIndex = videoList.findIndex((v) => !v.isCompleted);
  const selectableIndices = new Set(
    videoList.map((v, idx) => (v.isCompleted || idx === firstIncompleteIndex ? idx : null)).filter((v) => v !== null) as number[]
  );

  // Hilfsfunktion: Hole index im flat videoList für ein Video
  const getFlatIndex = (videoId: string) => videoList.findIndex((v) => v.id === videoId);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Kapitelübersicht</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2 text-sm">
          {sections.map((section) => {
            // Gibt es ein aktives Video im Kapitel?
            const activeIndexInSection = section.videos.findIndex((v) => getFlatIndex(v.id) === currentVideoIndex);
            const isOpen = activeIndexInSection !== -1;

            return (
              <li key={section.id}>
                <details open={isOpen} className="group">
                  <summary className="flex items-center cursor-pointer select-none font-medium text-base text-white group-open:text-primary transition-colors">
                    <ChevronDown className={`mr-1 h-4 w-4 transition-transform group-open:rotate-180`} />
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
                                ? "bg-primary text-white font-semibold"
                                : isSelectable
                                ? "text-white hover:bg-primary/80"
                                : "text-muted-foreground cursor-not-allowed"
                            }`}>
                            {isCompleted ? (
                              <CheckCircle className="w-4 h-4 text-white mr-2" />
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
