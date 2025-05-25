"use client";

/**
 * Dialog zum Hinzufügen oder Bearbeiten eines Videos.
 * Lädt bestehende Videodaten und zeigt das AddEditForm.
 * Übergibt die Form-Daten an den LocalStorage-Service.
 */

import React, { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { AcademyLocalStorageService } from "@/lib/data/localStorage";
import type { AcademyCategory, MockDataAcademy, MockDataAcademyAddEdit } from "@/lib/data/academy-type";
import AddEditForm from "./form";

type EditAddDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  videoId?: string;
};

type InitialVideoData = {
  video: MockDataAcademy;
  category: AcademyCategory;
} | null;

export const EditAddDialog: React.FC<EditAddDialogProps> = ({ open, onOpenChange, videoId }) => {
  const [videoData, setVideoData] = useState<InitialVideoData>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const isEdit = Boolean(videoId);

  // Lade Videodaten beim Öffnen zum Bearbeiten
  useEffect(() => {
    if (isEdit && videoId) {
      const loaded = AcademyLocalStorageService.getVideoById(videoId);
      setVideoData(loaded ?? null);
    } else {
      setVideoData(null);
    }
  }, [isEdit, videoId, open]);

  // Verarbeitung des Formular-Submits (Hinzufügen oder Bearbeiten)
  const handleSubmit = async (data: MockDataAcademyAddEdit) => {
    setIsSubmitting(true);
    if (isEdit && videoId) {
      AcademyLocalStorageService.editVideo(videoId, data);
    } else {
      const addData: MockDataAcademy = {
        ...data,
        id: crypto.randomUUID(),
        isCompleted: false,
        note: "",
      };
      AcademyLocalStorageService.addVideo(data.sectionId, addData);
    }
    setIsSubmitting(false);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{isEdit ? "Video bearbeiten" : "Video erstellen"}</DialogTitle>
          <DialogDescription>
            {isEdit ? `Du bearbeitest das Video mit dem Titel: ${videoData?.video.title}` : "Erstelle ein neues Video."}
          </DialogDescription>
        </DialogHeader>
        <AddEditForm
          initialValues={{
            ...videoData?.video,
            categoryId: videoData?.category, // Kategorie vorbelegen
          }}
          onSubmit={handleSubmit}
          disabled={isSubmitting}
        />
        <DialogFooter>
          <Button onClick={() => onOpenChange(false)} variant="secondary" disabled={isSubmitting}>
            Abbrechen
          </Button>
          <Button form="add-edit-form" type="submit" disabled={isSubmitting}>
            {isEdit ? "Änderungen speichern" : "Video erstellen"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
