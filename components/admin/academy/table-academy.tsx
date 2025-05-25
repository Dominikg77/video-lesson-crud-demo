"use client";

import * as React from "react";
import { useEffect, useState } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import { AcademyLocalStorageService } from "@/lib/data/localStorage";
import { AcademyCategory, AcademySection } from "@/lib/data/academy-type";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

type AcademyTableProps = {
  category: AcademyCategory;
  reloadTrigger?: number;
  onEditVideo?: (videoId: string) => void;
};

export const AcademyTable: React.FC<AcademyTableProps> = ({ category, reloadTrigger, onEditVideo }) => {
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [deleteTarget, setDeleteTarget] = useState<{ sectionId: string; videoId: string } | null>(null);

  const [filteredSections, setFilteredSections] = useState<AcademySection[]>([]);

  // Lade die Sections aus dem LocalStorage nach Kategorie/Reload
  useEffect(() => {
    const sections = AcademyLocalStorageService.getSectionsByCategorySorted(category, false);
    setFilteredSections(sections);
  }, [reloadTrigger, category]);

  // Video löschen aus State und LocalStorage
  const handleRemove = (sectionId: string, videoId: string) => {
    const updatedSections = filteredSections.map((section) =>
      section.id === sectionId ? { ...section, videos: section.videos.filter((v) => v.id !== videoId) } : section
    );
    setFilteredSections(updatedSections);
    AcademyLocalStorageService.removeVideo(videoId);
  };

  // Delete Dialog öffnen
  const handleAskDelete = (sectionId: string, videoId: string) => {
    setDeleteTarget({ sectionId, videoId });
    setDeleteDialogOpen(true);
  };

  // Bestätigen: Video löschen
  const handleConfirmDelete = () => {
    if (deleteTarget) {
      handleRemove(deleteTarget.sectionId, deleteTarget.videoId);
    }
    setDeleteDialogOpen(false);
    setDeleteTarget(null);
  };

  return (
    <div className="mb-8">
      <AlertDialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Bist du sicher?</AlertDialogTitle>
            <AlertDialogDescription>
              Möchtest du dieses Video wirklich löschen? Dieser Vorgang kann nicht rückgängig gemacht werden.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Abbrechen</AlertDialogCancel>
            <AlertDialogAction onClick={handleConfirmDelete}>Löschen</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

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
                  <TableRow
                    key={video.id}
                    className="cursor-pointer hover:bg-muted/50"
                    onClick={() => onEditVideo && onEditVideo(video.id)}>
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
                          e.stopPropagation();
                          handleAskDelete(section.id, video.id);
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
