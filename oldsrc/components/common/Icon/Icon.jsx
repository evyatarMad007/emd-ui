"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
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
        edit: <md_1.MdEdit fontSize={iconSize} color={color}/>,
        add: <fa_1.FaPlusCircle fontSize={iconSize} color={color}/>,
        remove: <md_1.MdDelete fontSize={iconSize} color={color}/>,
        close: <md_1.MdClose fontSize={iconSize} color={color}/>,
        project: (<ai_1.AiOutlineFundProjectionScreen fontSize={iconSize} color={color}/>),
        endpoint: <bs_1.BsFillDiagram3Fill fontSize={iconSize} color={color}/>,
        arrowBtn: <md_1.MdKeyboardArrowDown fontSize={iconSize} color={color}/>,
        save: <fa_1.FaRegSave fontSize={iconSize} color={color}/>,
        link: <fa_1.FaLink fontSize={iconSize} color={color}/>,
        done: <md_1.MdDone fontSize={iconSize} color={color}/>,
        copy: <md_1.MdOutlineContentCopy fontSize={iconSize} color={color}/>,
        hamburger: <ri_1.RiMenu3Fill fontSize={iconSize} color={color}/>,
        user: <fa_1.FaUser fontSize={iconSize} color={color}/>,
        logout: <bi_1.BiLogOut fontSize={iconSize} color={color}/>,
        bizantip: <bs_1.BsRocketTakeoff fontSize={iconSize} color={color}/>,
    };
    const routes = {
        lobby: <ai_1.AiFillDashboard fontSize={iconSize} color={color}/>,
        attackDocs: <gi_1.GiThorHammer fontSize={iconSize} color={color}/>,
        defenseDocs: <hi_1.HiShieldCheck fontSize={iconSize} color={color}/>,
    };
    const iconResult = {
        global,
        routes,
    };
    return <Icon_styled_1.IconStyle margin={margin}>{iconResult[group][iconType]}</Icon_styled_1.IconStyle>;
};
exports.default = Icon;
