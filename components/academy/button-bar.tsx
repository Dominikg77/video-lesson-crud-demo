"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface ButtonBarVideoProps {
  isCompleted: boolean;
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

const ButtonBarVideo = ({
  isCompleted,
  onPrev,
  onNext,
  onFinish,
  disablePrev,
  disableNext,
  isLast,
  onCheck,
  tabValue,
  onTabChange,
}: ButtonBarVideoProps) => {
  const handleCheckboxChange = (checked: boolean) => {
    onCheck?.(checked);
  };

  // Tab-Wechsel
  const handleTabsValueChange = (value: string) => {
    if (value === "description" || value === "note") {
      onTabChange(value);
    }
  };

  // Desktop-Layout
  return (
    <>
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
          <Checkbox
            id="isCompleted"
            checked={isCompleted}
            onCheckedChange={handleCheckboxChange}
          />
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

      {/* Mobile-Layout */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between sm:hidden gap-4">
        <div className="flex justify-between w-full sm:w-auto sm:flex-col sm:justify-start sm:gap-4 items-center gap-2">
          <Button variant="outline" onClick={onPrev} disabled={disablePrev}>
            Zurück
          </Button>
          <div className="flex items-center gap-3">
            <Checkbox
              id="isCompletedMobile"
              checked={isCompleted}
              onCheckedChange={handleCheckboxChange}
            />
            <label htmlFor="isCompletedMobile" className="cursor-pointer select-none">
              Abgeschlossen
            </label>
          </div>
          {!isLast ? (
            <Button onClick={onNext} disabled={!isCompleted || disableNext}>
              Weiter
            </Button>
          ) : (
            <Button onClick={onFinish} disabled={!isCompleted} variant="success">
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