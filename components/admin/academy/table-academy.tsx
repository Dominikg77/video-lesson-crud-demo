"use client";

import * as React from "react";
import { useEffect, useState, useMemo } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import { AcademyLocalStorageService } from "@/lib/data/localStorage";
import { AcademyCategory, AcademySection } from "@/lib/data/academy-type";
import { EditAddDialog } from "./edit-add-dialog";

type AcademyTableProps = {
  category: AcademyCategory;
};

export const AcademyTable: React.FC<AcademyTableProps> = ({ category }) => {
  const [sections, setSections] = useState<AcademySection[]>([]);
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [selectedVideoId, setSelectedVideoId] = useState<string | undefined>(undefined);

  useEffect(() => {
    const allSections = AcademyLocalStorageService.getSections();
    setSections(allSections);
  }, []);

  // Entfernt ein Video aus einer Section
  const handleRemove = (sectionId: string, videoId: string) => {
    const updatedSections = sections.map((section) =>
      section.id === sectionId ? { ...section, videos: section.videos.filter((v) => v.id !== videoId) } : section
    );
    setSections(updatedSections);

    AcademyLocalStorageService.removeVideo(videoId); // Entferne Video aus LocalStorage
  };

  // Edit-Handler für TableRow
  const handleEdit = (videoId: string) => {
    setSelectedVideoId(videoId);
    setEditDialogOpen(true);
  };

  // Filtere und sortiere die Sections nach Kategorie und orderId
  const filteredSections = useMemo(() => {
    return sections.filter((section) => section.category === category).sort((a, b) => a.orderId - b.orderId);
  }, [sections, category]);

  return (
    <div className="mb-8">
      <EditAddDialog open={editDialogOpen} onOpenChange={setEditDialogOpen} videoId={selectedVideoId} />

      {filteredSections.map((section) => (
        <div key={section.id} className="mb-6">
          <h2 className="font-semibold text-lg mb-2">{section.title}</h2>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Order</TableHead>
                <TableHead>Titel</TableHead>
                <TableHead>Beschreibung</TableHead>
                <TableHead>Video</TableHead>
                <TableHead>Live</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {section.videos
                .sort((a, b) => a.orderId - b.orderId)
                .map((video) => (
                  <TableRow key={video.id} className="cursor-pointer hover:bg-muted/50" onClick={() => handleEdit(video.id)}>
                    <TableCell>{video.orderId}</TableCell>
                    <TableCell>{video.title}</TableCell>
                    <TableCell>
                      <div dangerouslySetInnerHTML={{ __html: video.description }} />
                    </TableCell>
                    <TableCell>
                      <a href={video.videoUrl} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                        Link
                      </a>
                    </TableCell>
                    <TableCell>{video.isLive ? "✅" : ""}</TableCell>
                    <TableCell>
                      <Button
                        size="icon"
                        variant="ghost"
                        title="Video entfernen"
                        onClick={(e) => {
                          e.stopPropagation(); // Verhindert, dass auch der Row-Click ausgelöst wird!
                          handleRemove(section.id, video.id);
                        }}>
                        <Trash2 className="w-4 h-4" />
                        <span className="sr-only">Entfernen</span>
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </div>
      ))}
    </div>
  );
};
