"use client";

import { AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="flex flex-1 items-center justify-center h-full px-4">
      <div className="flex flex-col items-center text-center">
        <div className="flex items-center justify-center w-16 h-16 rounded-full bg-red-100 text-red-600 mb-6">
          <AlertTriangle className="w-8 h-8" />
        </div>
        <h1 className="text-3xl font-bold mb-2">Seite nicht gefunden</h1>
        <p className="text-muted-foreground mb-4">
          Die angeforderte Seite existiert nicht oder wurde verschoben.
        </p>
        <Button asChild variant="outline">
          <Link href="/">Zurück zur Startseite</Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFoundPage;
