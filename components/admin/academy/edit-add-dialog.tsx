"use client";
import React, { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { AcademyLocalStorageService } from "@/lib/data/localStorage";
import type { MockDataAcademy } from "@/lib/data/academy-type";
import AddEditForm from "./form";

type EditAddDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  videoId?: string;
};

export const EditAddDialog: React.FC<EditAddDialogProps> = ({ open, onOpenChange, videoId }) => {
  const [video, setVideo] = useState<MockDataAcademy | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState<any>(null); // Zum Ausloggen nach dem Speichern
  const isEdit = Boolean(videoId);

  useEffect(() => {
    if (isEdit && videoId) {
      const videoData = AcademyLocalStorageService.getVideoById(videoId);
      setVideo(videoData ?? null);
    } else {
      setVideo(null);
    }
    setSubmittedData(null);
  }, [isEdit, videoId, open]);

  // Wird vom Formular aufgerufen
  const handleSubmit = async (data: any) => {
    setIsSubmitting(true);

    // Speicher-Logik: Edit oder Add
    if (isEdit && videoId) {
      AcademyLocalStorageService.editVideo(videoId, data);
    } else {
      // Neues Video hinzufügen
      const addData: MockDataAcademy = {
        ...data,
        id: crypto.randomUUID(),
        isCompleted: false,
      } satisfies MockDataAcademy; 

      AcademyLocalStorageService.addVideo(data.sectionId, addData);
    }

    setSubmittedData(data);
    setIsSubmitting(false);

    // Dialog kann hier geschlossen werden, falls gewünscht:
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

        {submittedData && (
          <div className="mt-4 p-2 bg-muted text-xs rounded">
            <strong>Zuletzt gespeichert:</strong>
            <pre>{JSON.stringify(submittedData, null, 2)}</pre>
          </div>
        )}

        <DialogFooter>
          <Button onClick={() => onOpenChange(false)} variant="secondary" disabled={isSubmitting}>
            Abbrechen
          </Button>
          {/* Der Speichern-Button wird im Formular als type="submit" eingebunden */}
          <Button form="add-edit-form" type="submit" disabled={isSubmitting}>
            {isEdit ? "Änderungen speichern" : "Video erstellen"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
