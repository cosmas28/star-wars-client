import {BsChevronRight, BsChevronLeft, BsHouse, BsSearch, BsStar, BsExclamationTriangle} from "react-icons/bs";

export type IconName = "chevronRight" | "home" | "search" | "chevronLeft" | "star" | "exclamationTriangle";
export type IconType = {[name in IconName]: JSX.Element}

export const ICONS: IconType = {
	chevronRight: <BsChevronRight />,
	chevronLeft: <BsChevronLeft/>,
	home: <BsHouse />,
	search: <BsSearch />,
	star: <BsStar/>,
	exclamationTriangle: <BsExclamationTriangle />,
};
