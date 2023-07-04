import { jsx as _jsx } from "react/jsx-runtime";
import { FaLink, FaPlusCircle, FaRegSave, FaUser } from "react-icons/fa";
import { MdEdit, MdDelete, MdKeyboardArrowDown, MdDone, MdOutlineContentCopy, MdClose, } from "react-icons/md";
import { AiOutlineFundProjectionScreen, AiFillDashboard } from "react-icons/ai";
import { HiShieldCheck } from "react-icons/hi";
import { RiMenu3Fill } from "react-icons/ri";
import { BsFillDiagram3Fill, BsRocketTakeoff } from "react-icons/bs";
import { BiLogOut } from "react-icons/bi";
import { GiThorHammer } from "react-icons/gi";
import { IconStyle } from "./Icon.styled";
import { colors } from "../../../../ui-settings";
const Icon = ({ iconType, iconSize, iconColor, group = "global", margin = "", }) => {
    const color = iconColor ? iconColor : colors.baseFont;
    const global = {
        edit: _jsx(MdEdit, { fontSize: iconSize, color: color }),
        add: _jsx(FaPlusCircle, { fontSize: iconSize, color: color }),
        remove: _jsx(MdDelete, { fontSize: iconSize, color: color }),
        close: _jsx(MdClose, { fontSize: iconSize, color: color }),
        project: (_jsx(AiOutlineFundProjectionScreen, { fontSize: iconSize, color: color })),
        endpoint: _jsx(BsFillDiagram3Fill, { fontSize: iconSize, color: color }),
        arrowBtn: _jsx(MdKeyboardArrowDown, { fontSize: iconSize, color: color }),
        save: _jsx(FaRegSave, { fontSize: iconSize, color: color }),
        link: _jsx(FaLink, { fontSize: iconSize, color: color }),
        done: _jsx(MdDone, { fontSize: iconSize, color: color }),
        copy: _jsx(MdOutlineContentCopy, { fontSize: iconSize, color: color }),
        hamburger: _jsx(RiMenu3Fill, { fontSize: iconSize, color: color }),
        user: _jsx(FaUser, { fontSize: iconSize, color: color }),
        logout: _jsx(BiLogOut, { fontSize: iconSize, color: color }),
        bizantip: _jsx(BsRocketTakeoff, { fontSize: iconSize, color: color }),
    };
    const routes = {
        lobby: _jsx(AiFillDashboard, { fontSize: iconSize, color: color }),
        attackDocs: _jsx(GiThorHammer, { fontSize: iconSize, color: color }),
        defenseDocs: _jsx(HiShieldCheck, { fontSize: iconSize, color: color }),
    };
    const iconResult = {
        global,
        routes,
    };
    return _jsx(IconStyle, { margin: margin, children: iconResult[group][iconType] });
};
export default Icon;
