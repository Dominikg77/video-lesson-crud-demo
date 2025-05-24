"use client";

import React, { useMemo, useState } from "react";
import { AcademySection, MockDataAcademy } from "@/app/(root)/intraday/academy/mock-data-intraday";
import ButtonBarVideo from "./button-bar";
import ContentVideo from "./content";
import ProgressBar from "./progressbar";
import VideoEmbed from "./video-embed";
import VideoList from "./video-list";

const VideoPlayerPage = ({ data }: { data: AcademySection[] }) => {
  const allVideos = useMemo(
    () =>
      data
        .slice()
        .sort((a, b) => a.orderId - b.orderId)
        .flatMap((section) => section.videos.slice().sort((a, b) => a.orderId - b.orderId)),
    [data]
  );

  // State für das komplette Video-Array (inkl. aktuellem isCompleted pro Video)
  const [videoStates, setVideoStates] = useState(allVideos);

  // Finde Index des ersten nicht abgeschlossenen Videos
  const firstIncompleteIndex = videoStates.findIndex(v => !v.isCompleted);
  const initialIndex = firstIncompleteIndex !== -1 ? firstIncompleteIndex : 0;

  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  if (!data || data.length === 0 || videoStates.length === 0) {
    return <div className="max-w-7xl mx-auto p-4">No data available</div>;
  }

  // Progress berechnen
  const completedCount = videoStates.filter((v) => v.isCompleted).length;
  const progress = Math.round((completedCount / videoStates.length) * 100);

  const currentVideo = videoStates[currentIndex];

  // Handler fürs Navigieren
  const handlePrev = () => setCurrentIndex((i) => Math.max(0, i - 1));
  const handleNext = () => setCurrentIndex((i) => Math.min(videoStates.length - 1, i + 1));

  // Checkbox-Handler
  const handleCheck = (checked: boolean) => {
    setVideoStates((states) =>
      states.map((v, idx) =>
        idx === currentIndex ? { ...v, isCompleted: checked } : v
      )
    );
  };

  return (
    <div className="max-w-7xl mx-auto p-4 space-y-4">
      <h1 className="text-3xl font-bold">{currentVideo.title}</h1>
      <div className="flex flex-col space-y-4 lg:hidden">
        <ProgressBar progress={progress} />
        <VideoList />
      </div>
      <div className="flex flex-col lg:grid lg:grid-cols-12 lg:gap-6">
        <div className="lg:col-span-8 flex flex-col space-y-4">
          <VideoEmbed src={currentVideo.videoUrl} title={currentVideo.title} />
          <ButtonBarVideo
            isCompleted={currentVideo.isCompleted}
            onPrev={handlePrev}
            onNext={handleNext}
            disablePrev={currentIndex === 0}
            disableNext={currentIndex === videoStates.length - 1}
            onCheck={handleCheck}
          />
          <ContentVideo description={currentVideo.description} note={currentVideo.note} />
        </div>
        <div className="lg:col-span-4 mt-6 lg:mt-0 hidden lg:flex flex-col space-y-4">
          <ProgressBar progress={progress} />
          <VideoList />
        </div>
      </div>
    </div>
  );
};

export default VideoPlayerPage;