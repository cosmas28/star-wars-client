import {BsChevronRight, BsChevronLeft, BsHouse, BsSearch} from "react-icons/bs";

export type IconName = "chevronRight" | "home" | "search" | "chevronLeft";
export type IconType = {[name in IconName]: JSX.Element}

export const ICONS: IconType = {
	chevronRight: <BsChevronRight />,
	chevronLeft: <BsChevronLeft/>,
	home: <BsHouse />,
	search: <BsSearch />,
};
