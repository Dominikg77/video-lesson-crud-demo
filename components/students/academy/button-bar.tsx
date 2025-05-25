"use client";

/**
 * Steuerungsleiste für den Videoplayer: Button für Prev/Next, Checkbox für Abgeschlossen-Status,
 * Tabs für Beschreibung/Notiz.
 * Responsives Layout für Desktop und Mobile.
 */

import React, { useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AcademyLocalStorageService } from "@/lib/data/localStorage";

interface ButtonBarVideoProps {
  isCompleted: boolean;
  videoId: string;
  onPrev: () => void;
  onNext: () => void;
  onFinish: () => void;
  disablePrev?: boolean;
  disableNext?: boolean;
  isLast?: boolean;
  onCheck?: (checked: boolean) => void;
  tabValue: "description" | "note";
  onTabChange: (value: "description" | "note") => void;
}

const ButtonBarVideo: React.FC<ButtonBarVideoProps> = ({
  isCompleted,
  videoId,
  onPrev,
  onNext,
  onFinish,
  disablePrev,
  disableNext,
  isLast,
  onCheck,
  tabValue,
  onTabChange,
}) => {
  /**
   * Setzt den Completed-Status im Storage und ruft Parent-Callback.
   */
  const handleCheckboxChange = useCallback(
    (checked: boolean) => {
      AcademyLocalStorageService.setVideoCompleted(videoId, checked);
      onCheck?.(checked);
    },
    [videoId, onCheck]
  );

  /**
   * Tab-Wechsel (Beschreibung/Notiz)
   */
  const handleTabsValueChange = useCallback(
    (value: string) => {
      if (value === "description" || value === "note") {
        onTabChange(value);
      }
    },
    [onTabChange]
  );

  return (
    <>
      {/* Desktop-Version */}
      <div className="hidden sm:flex flex-row items-center justify-between gap-4 w-full">
        <Button variant="outline" onClick={onPrev} disabled={disablePrev}>
          Zurück
        </Button>
        <Tabs value={tabValue} onValueChange={handleTabsValueChange} className="flex-1">
          <TabsList className="flex flex-row w-full justify-center gap-4">
            <TabsTrigger value="description">Beschreibung</TabsTrigger>
            <TabsTrigger value="note">Notiz</TabsTrigger>
          </TabsList>
        </Tabs>
        <div className="flex items-center gap-3">
          <Checkbox id="isCompleted" checked={isCompleted} onCheckedChange={handleCheckboxChange} type="button" />
          <label htmlFor="isCompleted" className="cursor-pointer select-none">
            Abgeschlossen
          </label>
          {!isLast ? (
            <Button onClick={onNext} disabled={!isCompleted || disableNext}>
              Weiter
            </Button>
          ) : (
            <Button onClick={onFinish} disabled={!isCompleted}>
              Finish
            </Button>
          )}
        </div>
      </div>

      {/* Mobile-Version */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between sm:hidden gap-4">
        <div className="flex justify-between w-full sm:w-auto sm:flex-col sm:justify-start sm:gap-4 items-center gap-2">
          <Button variant="outline" onClick={onPrev} disabled={disablePrev}>
            Zurück
          </Button>
          <div className="flex items-center gap-3">
            <Checkbox id="isCompletedMobile" checked={isCompleted} onCheckedChange={handleCheckboxChange} />
            <label htmlFor="isCompletedMobile" className="cursor-pointer select-none">
              Abgeschlossen
            </label>
          </div>
          {!isLast ? (
            <Button onClick={onNext} disabled={!isCompleted || disableNext}>
              Weiter
            </Button>
          ) : (
            <Button onClick={onFinish} disabled={!isCompleted}>
              Finish
            </Button>
          )}
        </div>
        <Tabs value={tabValue} onValueChange={handleTabsValueChange} className="w-full sm:flex-1">
          <TabsList className="flex justify-center gap-4 whitespace-nowrap overflow-x-auto">
            <TabsTrigger value="description">Beschreibung</TabsTrigger>
            <TabsTrigger value="note">Notiz</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
    </>
  );
};

export default ButtonBarVideo;
