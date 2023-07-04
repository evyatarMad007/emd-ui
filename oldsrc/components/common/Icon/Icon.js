"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const fa_1 = require("react-icons/fa");
const md_1 = require("react-icons/md");
const ai_1 = require("react-icons/ai");
const hi_1 = require("react-icons/hi");
const ri_1 = require("react-icons/ri");
const bs_1 = require("react-icons/bs");
const bi_1 = require("react-icons/bi");
const gi_1 = require("react-icons/gi");
const Icon_styled_1 = require("./Icon.styled");
const ui_settings_1 = require("../../../../ui-settings");
const Icon = ({ iconType, iconSize, iconColor, group = "global", margin = "", }) => {
    const color = iconColor ? iconColor : ui_settings_1.colors.baseFont;
    const global = {
        edit: (0, jsx_runtime_1.jsx)(md_1.MdEdit, { fontSize: iconSize, color: color }),
        add: (0, jsx_runtime_1.jsx)(fa_1.FaPlusCircle, { fontSize: iconSize, color: color }),
        remove: (0, jsx_runtime_1.jsx)(md_1.MdDelete, { fontSize: iconSize, color: color }),
        close: (0, jsx_runtime_1.jsx)(md_1.MdClose, { fontSize: iconSize, color: color }),
        project: ((0, jsx_runtime_1.jsx)(ai_1.AiOutlineFundProjectionScreen, { fontSize: iconSize, color: color })),
        endpoint: (0, jsx_runtime_1.jsx)(bs_1.BsFillDiagram3Fill, { fontSize: iconSize, color: color }),
        arrowBtn: (0, jsx_runtime_1.jsx)(md_1.MdKeyboardArrowDown, { fontSize: iconSize, color: color }),
        save: (0, jsx_runtime_1.jsx)(fa_1.FaRegSave, { fontSize: iconSize, color: color }),
        link: (0, jsx_runtime_1.jsx)(fa_1.FaLink, { fontSize: iconSize, color: color }),
        done: (0, jsx_runtime_1.jsx)(md_1.MdDone, { fontSize: iconSize, color: color }),
        copy: (0, jsx_runtime_1.jsx)(md_1.MdOutlineContentCopy, { fontSize: iconSize, color: color }),
        hamburger: (0, jsx_runtime_1.jsx)(ri_1.RiMenu3Fill, { fontSize: iconSize, color: color }),
        user: (0, jsx_runtime_1.jsx)(fa_1.FaUser, { fontSize: iconSize, color: color }),
        logout: (0, jsx_runtime_1.jsx)(bi_1.BiLogOut, { fontSize: iconSize, color: color }),
        bizantip: (0, jsx_runtime_1.jsx)(bs_1.BsRocketTakeoff, { fontSize: iconSize, color: color }),
    };
    const routes = {
        lobby: (0, jsx_runtime_1.jsx)(ai_1.AiFillDashboard, { fontSize: iconSize, color: color }),
        attackDocs: (0, jsx_runtime_1.jsx)(gi_1.GiThorHammer, { fontSize: iconSize, color: color }),
        defenseDocs: (0, jsx_runtime_1.jsx)(hi_1.HiShieldCheck, { fontSize: iconSize, color: color }),
    };
    const iconResult = {
        global,
        routes,
    };
    return (0, jsx_runtime_1.jsx)(Icon_styled_1.IconStyle, { margin: margin, children: iconResult[group][iconType] });
};
exports.default = Icon;
