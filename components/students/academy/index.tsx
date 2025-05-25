"use client";

import React, { useEffect, useMemo, useState } from "react";
import ButtonBarVideo from "./button-bar";
import ContentVideo from "./content";
import ProgressBar from "./progressbar";
import VideoEmbed from "./video-embed";
import VideoList from "./video-list";
import { AcademyCategory, AcademySection, MockDataAcademy } from "@/lib/data/academy-type";
import { AcademyLocalStorageService } from "@/lib/data/localStorage";

// Hilfsfunktion: Updated Sections mit aktuellem VideoState mergen
function mergeSectionsWithVideoStates(sections: AcademySection[], videoStates: MockDataAcademy[]) {
  const stateById = Object.fromEntries(videoStates.map((v) => [v.id, v]));
  return sections.map((section) => ({
    ...section,
    videos: section.videos.map((v) => ({
      ...v,
      ...stateById[v.id],
    })),
  }));
}

const VideoPlayerPage = ({ category }: { category: AcademyCategory }) => {
  const [sections, setSections] = useState<AcademySection[]>([]);
  const [videoStates, setVideoStates] = useState<MockDataAcademy[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeTab, setActiveTab] = useState<"description" | "note">("description");
  const [hasInitialized, setHasInitialized] = useState(false);

  // Lade sortierte Sections aus LocalStorage
  useEffect(() => {
    const sections = AcademyLocalStorageService.getSectionsByCategorySorted(category, false);
    setSections(sections);
  }, [category]);

  // Initialisiere VideoStates & Index nur einmal beim ersten Laden
  useEffect(() => {
    if (hasInitialized || sections.length === 0) return;

    const initialVideos = sections
      .slice()
      .sort((a, b) => a.orderId - b.orderId)
      .flatMap((section) => section.videos.slice().sort((a, b) => a.orderId - b.orderId));

    setVideoStates(initialVideos);

    const firstIncompleteIndex = initialVideos.findIndex((v) => !v.isCompleted);
    setCurrentIndex(firstIncompleteIndex !== -1 ? firstIncompleteIndex : 0);
    setHasInitialized(true);

  }, [sections, hasInitialized]);

  const mergedSections = useMemo(() => mergeSectionsWithVideoStates(sections, videoStates), [sections, videoStates]);

  if (sections.length === 0 || videoStates.length === 0) {
    return <div className="w-full max-w-[2400px] mx-auto p-4">No data available</div>;
  }

  const completedCount = videoStates.filter((v) => v.isCompleted).length;
  const progress = Math.round((completedCount / videoStates.length) * 100);
  const currentVideo = videoStates[currentIndex];
  const isLastVideo = currentIndex === videoStates.length - 1;

  const handlePrev = () => setCurrentIndex((i) => Math.max(0, i - 1));
  const handleNext = () => setCurrentIndex((i) => Math.min(videoStates.length - 1, i + 1));

  const handleCheck = (checked: boolean) => {

    setVideoStates((states) => {
      const newStates = [...states];
      newStates[currentIndex] = {
        ...newStates[currentIndex],
        isCompleted: checked,
      };
      return newStates;
    });

    AcademyLocalStorageService.setVideoCompleted(currentVideo.id, checked);
  };
  const handleTabChange = (value: "description" | "note") => setActiveTab(value);
  const handleFinish = () => {
    window.alert("Kurs abgeschlossen!");
  };

  return (
    <div className="w-full max-w-[2400px] mx-auto p-4 space-y-4">
      <h1 className="text-3xl font-bold">{currentVideo.title}</h1>
      <div className="flex flex-col space-y-4 lg:hidden">
        <ProgressBar progress={progress} />
        <VideoList
          sections={mergedSections}
          currentVideoIndex={currentIndex}
          videoList={videoStates}
          onSelect={(idx) => setCurrentIndex(idx)}
        />
      </div>

      <div className="flex flex-col lg:grid lg:grid-cols-12 lg:gap-6">
        <div className="lg:col-span-8 flex flex-col space-y-4">
          <VideoEmbed src={currentVideo.videoUrl} title={currentVideo.title} />
          <ButtonBarVideo
            isCompleted={currentVideo.isCompleted}
            videoId={currentVideo.id}
            onPrev={handlePrev}
            onNext={handleNext}
            onFinish={handleFinish}
            disablePrev={currentIndex === 0}
            disableNext={isLastVideo}
            isLast={isLastVideo}
            onCheck={handleCheck}
            tabValue={activeTab}
            onTabChange={handleTabChange}
          />
          {/* <ContentVideo description={currentVideo.description} note={currentVideo.note} activeTab={activeTab} /> */}
        </div>
        <div className="lg:col-span-4 mt-6 lg:mt-0 hidden lg:flex flex-col space-y-4">
          <ProgressBar progress={progress} />
          <VideoList
            sections={mergedSections}
            currentVideoIndex={currentIndex}
            videoList={videoStates}
            onSelect={(idx) => setCurrentIndex(idx)}
          />
        </div>
      </div>
    </div>
  );
};

export default VideoPlayerPage;
