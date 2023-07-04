"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const Button_styled_1 = require("./Button.styled");
const Icon_1 = __importDefault(require("../Icon/Icon"));
const ui_settings_1 = require("../../../../ui-settings");
const Button = (0, react_1.forwardRef)(({ id, children, dir = "ltr", disable = false, onClick, style, className, btnType = "button", icon = { type: null, size: 15.5, color: ui_settings_1.colors.baseFont }, }, ref) => {
    const getStyle = (disable, style) => {
        // if disable is true then return style merged with disableStyle, else return style or an empty object
        return disable && style ? Object.assign(Object.assign({}, style), Button_styled_1.disableStyle) : style || {};
    };
    return (<Button_styled_1.ButtonStyled className={className} ref={ref} type={btnType} dir={dir} onClick={onClick} id={id && id} style={getStyle(disable, style)}>
        <div className="button-wrapper" dir={dir}>
          {children && (<span className="value" style={!(icon === null || icon === void 0 ? void 0 : icon.type) ? { marginRight: 0, marginLeft: 0 } : {}}>
              {children}
            </span>)}
          {(icon === null || icon === void 0 ? void 0 : icon.type) && (<span className="icon">
              <Icon_1.default iconType={icon.type} iconSize={icon.size} iconColor={icon.color}/>
            </span>)}
        </div>
      </Button_styled_1.ButtonStyled>);
});
exports.default = Button;
