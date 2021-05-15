import {BsChevronRight, BsChevronLeft, BsHouse, BsSearch, BsStar} from "react-icons/bs";

export type IconName = "chevronRight" | "home" | "search" | "chevronLeft" | "star";
export type IconType = {[name in IconName]: JSX.Element}

export const ICONS: IconType = {
	chevronRight: <BsChevronRight />,
	chevronLeft: <BsChevronLeft/>,
	home: <BsHouse />,
	search: <BsSearch />,
	star: <BsStar/>
};
