import {BsChevronRight, BsChevronLeft, BsHouse, BsSearch, BsStar, BsExclamationTriangle, BsThreeDots, BsX} from "react-icons/bs";

export type IconName = "chevronRight" | "home" | "search" | "chevronLeft" | "star" | "exclamationTriangle" | "ellipsis" | "cross";
export type IconType = {[name in IconName]: JSX.Element}

export const ICONS: IconType = {
	chevronRight: <BsChevronRight />,
	chevronLeft: <BsChevronLeft/>,
	home: <BsHouse />,
	search: <BsSearch />,
	star: <BsStar/>,
	exclamationTriangle: <BsExclamationTriangle />,
	ellipsis: <BsThreeDots />,
	cross: <BsX/>,
};
