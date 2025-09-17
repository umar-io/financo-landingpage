"use client"

import { createContext, ReactNode, useState } from "react";

interface SideBarContextType {
  isToggled: boolean;
  sideBarToggler: () => void;
  openSideBar: () => void;
  closeSideBar: () => void;
  setIsToggled: (isToggled: boolean) => void;
}

const SideBarContext = createContext<SideBarContextType | null>(null);

interface ISideBarProvider {
  children: ReactNode;
}

const SideBarProvider: React.FC<ISideBarProvider> = ({ children }) => {
  const [isToggled, setIsToggled] = useState<boolean>(false);
  const sideBarToggler = () => {
    setIsToggled(!isToggled);
  };

  const openSideBar = () => {
    setIsToggled(true);
  };

  const closeSideBar = () => {
    setIsToggled(false);
  };

  return (
    <SideBarContext.Provider
      value={{
        isToggled,
        setIsToggled,
        openSideBar,
        closeSideBar,
        sideBarToggler,
      }}
    >
      {children}
    </SideBarContext.Provider>
  );
};

export { SideBarContext, SideBarProvider };
