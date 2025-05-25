"use client";

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
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [editVideoId, setEditVideoId] = useState<string | undefined>(undefined);
  const [reloadTrigger, setReloadTrigger] = useState(0);

  // Handler zum Öffnen des Dialogs: "Add" (ohne VideoId)
  const handleFabClick = () => {
    setEditVideoId(undefined);
    setEditDialogOpen(true);
  };

  // Handler für Table: "Edit" (mit VideoId)
  const handleEditVideo = (videoId: string) => {
    setEditVideoId(videoId);
    setEditDialogOpen(true);
  };

  // Handler für Dialog-Open-Change (wird von Dialog aufgerufen)
  const handleDialogOpenChange = (open: boolean) => {
    setEditDialogOpen(open);
    if (!open) {
      setEditVideoId(undefined);
      setReloadTrigger((prev) => prev + 1);
    }
  };

  return (
    <div className="relative min-h-screen">
      <EditAddDialog open={editDialogOpen} onOpenChange={handleDialogOpenChange} videoId={editVideoId} />

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

      <Button
        size="icon"
        className="fixed bottom-8 right-8 z-50 rounded-full shadow-lg bg-primary text-white hover:bg-primary/90 w-16 h-16"
        onClick={handleFabClick}>
        <Plus className="w-8 h-8" />
        <span className="sr-only">Neu hinzufügen</span>
      </Button>
    </div>
  );
};
