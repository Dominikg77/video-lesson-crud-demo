"use client";

/**
 * Universelle Video-Einbettung (YouTube, Vimeo, MP4, Fallback).
 * Erkennt Typ automatisch und rendert passende Komponente.
 */

import React from "react";
import { Card, CardContent } from "@/components/ui/card";

interface VideoEmbedProps {
  src?: string;
  title?: string;
}

const VideoEmbed: React.FC<VideoEmbedProps> = ({ src = "", title = "Video" }) => {
  // Prüfe Video-Quelle und bestimme Typ
  const isYouTube = src && (src.includes("youtube.com") || src.includes("youtu.be"));
  const isVimeo = src && src.includes("vimeo.com");
  const isMp4 = src && src.endsWith(".mp4");

  // Wrapper für konsistentes Styling
  const Wrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <Card className="w-full mx-auto p-0 rounded-lg">
      <CardContent className="aspect-video p-0 flex items-center justify-center overflow-hidden bg-black rounded-lg">
        {children}
      </CardContent>
    </Card>
  );

  if (!src) {
    return (
      <Wrapper>
        <span className="text-white text-lg">Kein Video-Link angegeben</span>
      </Wrapper>
    );
  }

  if (isYouTube || isVimeo) {
    return (
      <Wrapper>
        <iframe
          src={src}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          className="w-full h-full border-none rounded-lg"
          allowFullScreen
          loading="lazy"
        />
      </Wrapper>
    );
  }

  if (isMp4) {
    return (
      <Wrapper>
        <video controls className="w-full h-full rounded-lg">
          <source src={src} type="video/mp4" />
        </video>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <span className="text-white text-lg">Kein gültiger Video-Link</span>
    </Wrapper>
  );
};

export default VideoEmbed;
