"use client";

import { AcademyTable } from "@/components/admin/academy/table-academy";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import type { AcademyCategory } from "@/lib/data/academy-type";
import { EditAddDialog } from "./edit-add-dialog";
import { useState } from "react";

type MainViewAcademyEditorProps = {
  categories: { key: AcademyCategory; label: string }[];
};

export const MainViewAcademyEditor = ({ categories }: MainViewAcademyEditorProps) => {
  const [editDialogOpen, setEditDialogOpen] = useState(false);

  const handleFabClick = () => {
    setEditDialogOpen(true);
  };

  return (
    <div className="relative min-h-screen">
      <EditAddDialog open={editDialogOpen} onOpenChange={setEditDialogOpen} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {categories.map((cat) => (
          <Card key={cat.key}>
            <CardHeader>
              <CardTitle className="text-xl">{cat.label}</CardTitle>
            </CardHeader>
            <CardContent>
              <AcademyTable category={cat.key} />
            </CardContent>
          </Card>
        ))}
      </div>
      {/* FAB unten rechts */}
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
