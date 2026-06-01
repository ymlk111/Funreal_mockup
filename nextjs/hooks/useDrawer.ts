"use client";
import { useState, useCallback } from "react";

export function useDrawer() {
  const [isOpen, setIsOpen] = useState(false);
  const [subOpen, setSubOpen] = useState(false);

  const openDrawer = useCallback(() => setIsOpen(true), []);
  const closeDrawer = useCallback(() => setIsOpen(false), []);
  const toggleSub = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    setSubOpen((v) => !v);
  }, []);

  return { isOpen, subOpen, openDrawer, closeDrawer, toggleSub };
}
