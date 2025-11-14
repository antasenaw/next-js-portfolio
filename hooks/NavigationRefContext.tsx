"use client"
import React, { createContext, useContext, useRef } from 'react';

type RefContextType = {
  homeRef: React.RefObject<HTMLDivElement | null>;
  aboutRef: React.RefObject<HTMLDivElement | null>;
  projectsRef: React.RefObject<HTMLDivElement | null>;
  contactsRef: React.RefObject<HTMLDivElement | null>;
};

const RefContext = createContext<RefContextType | null>(null);

export const useRefContext = (): RefContextType => {
  const ctx = useContext(RefContext);
  if (!ctx) {
    throw new Error('useRefContext must be used within a RefProvider');
  }
  return ctx;
};

export function RefProvider({ children }: { children: React.ReactNode }) {
  const homeRef = useRef<HTMLDivElement | null>(null);
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const projectsRef = useRef<HTMLDivElement | null>(null);
  const contactsRef = useRef<HTMLDivElement | null>(null);

  const contextValue: RefContextType = {
    homeRef,
    aboutRef,
    projectsRef,
    contactsRef
  };

  return (
    <RefContext.Provider value={contextValue}>
      {children}
    </RefContext.Provider>
  );
}