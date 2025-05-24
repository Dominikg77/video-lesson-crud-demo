"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface ButtonBarVideoProps {
  isCompleted: boolean;
  onPrev: () => void;
  onNext: () => void;
  disablePrev?: boolean;
  disableNext?: boolean;
  onCheck?: (checked: boolean) => void;
}

const ButtonBarVideo = ({
  isCompleted,
  onPrev,
  onNext,
  disablePrev,
  disableNext,
  onCheck,
}: ButtonBarVideoProps) => {
  // Kein eigener useState!
  const handleCheckboxChange = (checked: boolean) => {
    onCheck?.(checked);
  };

  const handleNextClick = () => {
    console.log("Weiter geklickt");
    onNext();
  };

  return (
    <>
      {/* Desktop-Layout */}
      <div className="hidden sm:flex flex-row items-center justify-between gap-4 w-full">
        <Button variant="outline" onClick={onPrev} disabled={disablePrev}>
          Zurück
        </Button>
        <Tabs defaultValue="beschreibung" className="flex-1">
          <TabsList className="flex flex-row w-full justify-center gap-4">
            <TabsTrigger value="beschreibung">Beschreibung</TabsTrigger>
            <TabsTrigger value="notiz">Notiz</TabsTrigger>
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
          <Button onClick={handleNextClick} disabled={!isCompleted}>
            Weiter
          </Button>
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
          <Button onClick={handleNextClick} disabled={!isCompleted}>
            Weiter
          </Button>
        </div>
        <Tabs defaultValue="beschreibung" className="w-full sm:flex-1">
          <TabsList className="flex justify-center gap-4 whitespace-nowrap overflow-x-auto">
            <TabsTrigger value="beschreibung">Beschreibung</TabsTrigger>
            <TabsTrigger value="notiz">Notiz</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
    </>
  );
};

export default ButtonBarVideo;