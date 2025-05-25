"use client";

import React, { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { AcademyLocalStorageService } from "@/lib/data/localStorage";
import type { MockDataAcademy, MockDataAcademyAddEdit } from "@/lib/data/academy-type";
import AddEditForm from "./form";

type EditAddDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  videoId?: string;
};

export const EditAddDialog: React.FC<EditAddDialogProps> = ({ open, onOpenChange, videoId }) => {
  const [video, setVideo] = useState<MockDataAcademy | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const isEdit = Boolean(videoId);

  useEffect(() => {
    if (isEdit && videoId) {
      const videoData = AcademyLocalStorageService.getVideoById(videoId);
      setVideo(videoData ?? null);
    } else {
      setVideo(null);
    }
  }, [isEdit, videoId, open]);

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
            {isEdit ? `Du bearbeitest das Video mit dem Titel: ${video?.title}` : "Erstelle ein neues Video."}
          </DialogDescription>
        </DialogHeader>
        <AddEditForm initialValues={video} onSubmit={handleSubmit} disabled={isSubmitting} />
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
