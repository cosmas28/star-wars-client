import {BsChevronRight, BsHouse} from "react-icons/bs";

export type IconName = "chevronRight" | "home";
export type IconType = {[name in IconName]: JSX.Element}

export const ICONS: IconType = {
	chevronRight: <BsChevronRight />,
	home: <BsHouse />,
};
