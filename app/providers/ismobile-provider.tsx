"use client";

import { useState, createContext, ReactNode } from "react";

interface IisMobileContextType {
  isMobile: boolean;
  setIsMobile: (isMobile: boolean) => void;
}

type isMobileProviderType = {
  children: ReactNode;
};

const IsMobileContext = createContext<IisMobileContextType | null>(null);

const IsMobileProvider: React.FC<isMobileProviderType> = ({ children }) => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  return (
    <IsMobileContext.Provider value={{ isMobile, setIsMobile }}>
      {children}
    </IsMobileContext.Provider>
  );
};

export { IsMobileContext, IsMobileProvider };
