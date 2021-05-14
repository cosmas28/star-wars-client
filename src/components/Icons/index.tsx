import {BsChevronRight, BsHouse, BsSearch} from "react-icons/bs";

export type IconName = "chevronRight" | "home" | "search";
export type IconType = {[name in IconName]: JSX.Element}

export const ICONS: IconType = {
	chevronRight: <BsChevronRight />,
	home: <BsHouse />,
	search: <BsSearch />,
};
