import { useContext } from "react";
import { IsMobileContext } from "../providers/ismobile-provider";

const UseIsMobile = () => {
  const context = useContext(IsMobileContext);

  if (!context) {
    throw new Error("UseSidebar must be used within a sidebarProvider");
  }

  return context;
};

export default UseIsMobile;
