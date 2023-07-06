import React from "react";
import { FaLink, FaPlusCircle, FaRegSave, FaUser } from "react-icons/fa";
import {
  MdEdit,
  MdDelete,
  MdKeyboardArrowDown,
  MdDone,
  MdOutlineContentCopy,
  MdClose,
} from "react-icons/md";
import { AiOutlineFundProjectionScreen, AiFillDashboard } from "react-icons/ai";
import { HiShieldCheck } from "react-icons/hi";
import { RiMenu3Fill } from "react-icons/ri";
import { BsFillDiagram3Fill, BsRocketTakeoff } from "react-icons/bs";
import { BiLogOut } from "react-icons/bi";
import { GiThorHammer } from "react-icons/gi";
import { IconStyle } from "./Icon.styled";
import { colors } from "../../../ui-settings-configs";

type GlobalIconTypes = string;
type RouteIconTypes = string;

interface IconProps {
  iconType: GlobalIconTypes | RouteIconTypes;
  iconSize?: string | number;
  iconColor?: string;
  group?: "global" | "routes";
  margin?: string;
}

const Icon: React.FC<IconProps> = ({
  iconType,
  iconSize,
  iconColor,
  group = "global",
  margin = "",
}) => {
  const color = iconColor ? iconColor : colors.baseFont;

  const global: Record<GlobalIconTypes, JSX.Element> = {
    edit: <MdEdit fontSize={iconSize} color={color} />,
    add: <FaPlusCircle fontSize={iconSize} color={color} />,
    remove: <MdDelete fontSize={iconSize} color={color} />,
    close: <MdClose fontSize={iconSize} color={color} />,
    project: (
      <AiOutlineFundProjectionScreen fontSize={iconSize} color={color} />
    ),
    endpoint: <BsFillDiagram3Fill fontSize={iconSize} color={color} />,
    arrowBtn: <MdKeyboardArrowDown fontSize={iconSize} color={color} />,
    save: <FaRegSave fontSize={iconSize} color={color} />,
    link: <FaLink fontSize={iconSize} color={color} />,
    done: <MdDone fontSize={iconSize} color={color} />,
    copy: <MdOutlineContentCopy fontSize={iconSize} color={color} />,
    hamburger: <RiMenu3Fill fontSize={iconSize} color={color} />,
    user: <FaUser fontSize={iconSize} color={color} />,
    logout: <BiLogOut fontSize={iconSize} color={color} />,
    bizantip: <BsRocketTakeoff fontSize={iconSize} color={color} />,
  };

  const routes: Record<RouteIconTypes, JSX.Element> = {
    lobby: <AiFillDashboard fontSize={iconSize} color={color} />,
    attackDocs: <GiThorHammer fontSize={iconSize} color={color} />,
    defenseDocs: <HiShieldCheck fontSize={iconSize} color={color} />,
  };

  const iconResult = {
    global,
    routes,
  };

  return <IconStyle margin={margin}>{iconResult[group][iconType]}</IconStyle>;
};

export default Icon;
