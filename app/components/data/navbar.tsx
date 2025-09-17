import ArrowDown from "../../ui/icons/ArrowDown";

type InavLink = {
  id: number;
  name: string;
  icon?: React.ReactNode;
};

export const navlink: InavLink[] = [
  { id: 1, name: "Home" },
  {
    id: 2,
    name: "Features",
    icon: <ArrowDown />,
  },
  { id: 3, name: "Pricing" },
  { id: 4, name: "Blog" },
];
