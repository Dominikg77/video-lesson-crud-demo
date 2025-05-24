"use client";
import { useEffect } from "react";
import { AcademyLocalStorageService, STORAGE_KEY_ACADEMY_CONTENT } from "@/lib/data/localStorage";
import { mockSections } from "@/lib/data/mock-data-academy";

// Temp File to initialize localStorage with mock data

export function AppInit() {
  useEffect(() => {
    const hasData = !!localStorage.getItem(STORAGE_KEY_ACADEMY_CONTENT);
    if (!hasData) {
      AcademyLocalStorageService.initData(mockSections);
    }
  }, []);
  return null;
}
