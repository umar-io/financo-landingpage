import { useContext } from "react";
import { SideBarContext } from "../providers/sidebar-provider";

const useSideBar = () => {
  const context = useContext(SideBarContext);

  if (!context) {
    throw new Error("UseSidebar must be used within a sidebarProvider");
  }

  return context;
};

export default useSideBar;
