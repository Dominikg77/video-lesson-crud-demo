"use client";

/**
 * Haupt-Komponente für die Akademie-Verwaltung im Back Office.
 * - Übersichtskarten je Kategorie mit Tabellenansicht
 * - Floating Action Button zum Hinzufügen neuer Videos
 * - Dialog zum Bearbeiten/Hinzufügen von Videos
 */

import { useState } from "react";
import { AcademyTable } from "@/components/admin/academy/table-academy";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import type { AcademyCategory } from "@/lib/data/academy-type";
import { EditAddDialog } from "./edit-add-dialog";

type MainViewAcademyEditorProps = {
  categories: { key: AcademyCategory; label: string }[];
};

export const MainViewAcademyEditor = ({ categories }: MainViewAcademyEditorProps) => {
  // Status für Dialog (offen/geschlossen), bearbeitetes Video und Reload-Trigger
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [editVideoId, setEditVideoId] = useState<string | undefined>(undefined);
  const [reloadTrigger, setReloadTrigger] = useState(0);

  // Öffnet den Dialog zum Hinzufügen
  const handleFabClick = () => {
    setEditVideoId(undefined);
    setEditDialogOpen(true);
  };

  // Öffnet den Dialog zum Bearbeiten eines Videos
  const handleEditVideo = (videoId: string) => {
    setEditVideoId(videoId);
    setEditDialogOpen(true);
  };

  // Wird beim Schliessen des Dialogs aufgerufen, triggert einen Reload der Tabellen
  const handleDialogOpenChange = (open: boolean) => {
    setEditDialogOpen(open);
    if (!open) {
      setEditVideoId(undefined);
      setReloadTrigger((prev) => prev + 1);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Dialog für Hinzufügen/Bearbeiten */}
      <EditAddDialog open={editDialogOpen} onOpenChange={handleDialogOpenChange} videoId={editVideoId} />

      {/* Karten-Grid für alle Kategorien */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {categories.map((cat) => (
          <Card key={cat.key}>
            <CardHeader>
              <CardTitle className="text-xl">{cat.label}</CardTitle>
            </CardHeader>
            <CardContent>
              <AcademyTable category={cat.key} reloadTrigger={reloadTrigger} onEditVideo={handleEditVideo} />
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Floating Action Button für "Neu hinzufügen" */}
      <Button
        size="icon"
        className="fixed bottom-8 right-8 z-50 rounded-full shadow-lg bg-primary text-white hover:bg-primary/90 w-16 h-16"
        onClick={handleFabClick}
        aria-label="Neues Video hinzufügen">
        <Plus className="w-8 h-8" />
        <span className="sr-only">Neu hinzufügen</span>
      </Button>
    </div>
  );
};
