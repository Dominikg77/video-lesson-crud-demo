"use client";

/**
 * 404 Page
 * Zeigt einen freundlichen Hinweis für den Benutzer,
 * wenn eine nicht existierende Route aufgerufen wird.
 */
import { AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const NotFoundPage = () => {
  return (
    // Hauptcontainer: Zentriert den Seiteninhalt sowohl vertikal als auch horizontal
    <main className="flex items-center justify-center px-4">
      {/* Card-ähnlicher Bereich für die eigentliche Fehlermeldung */}
      <section className="flex flex-col items-center text-center p-8 rounded-2xl shadow-lg bg-white dark:bg-slate-900">
        {/* Warn-Icon mit Bounce-Animation */}
        <div className="animate-bounce flex items-center justify-center w-20 h-20 rounded-full bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400 mb-8 shadow">
          <AlertTriangle className="w-10 h-10" />
        </div>
        {/* Überschrift */}
        <h1 className="text-4xl font-extrabold mb-3 tracking-tight">Ups... verlaufen? 🐾</h1>
        {/* Beschreibungstext */}
        <p className="text-muted-foreground mb-6 max-w-sm">
          Diese Seite existiert nicht – oder sie versteckt sich gerade besonders gut.
          <br />
          Vielleicht liegt’s am Kaffee... oder am Internet. Versuch’s doch einfach nochmal!
        </p>
        {/* Button zur Startseite */}
        <Button asChild size="lg" className="font-semibold">
          <Link href="/">Zurück zur Startseite</Link>
        </Button>
        {/* Zusatzhinweis für Support */}
        <span className="mt-8 text-xs text-gray-400 dark:text-gray-500">
          Wenn du Hilfe brauchst, schick uns eine Brieftaube 🕊️ – oder schreib dem Support.
        </span>
      </section>
    </main>
  );
};

export default NotFoundPage; 
