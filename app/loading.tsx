"use client";

/**
 * Loading-Komponente.
 * Wird angezeigt, während Inhalte geladen werden.
 */

import Image from "next/image";
import loader from "@/assets/loader.gif";

const LoadingPage = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center py-24">
      {/* Loader-Icon mit dezenter Animation */}
      <div className="animate-spin-slow">
        <Image src={loader} height={60} width={60} alt="Lädt..." priority className="drop-shadow-lg rounded-full" />
      </div>
      {/* Dezenter Ladehinweis */}
      <span className="mt-4 text-base text-slate-500 dark:text-slate-300 font-medium animate-pulse">
        Bitte warten, Inhalte werden geladen...
      </span>
      <style jsx global>{`
        @keyframes spin-slow {
          100% {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 1.5s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default LoadingPage;
