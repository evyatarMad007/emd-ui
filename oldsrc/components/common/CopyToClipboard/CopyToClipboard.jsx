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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const CopyToClipboard_styled_1 = require("./CopyToClipboard.styled");
const Icon_1 = __importDefault(require("../Icon/Icon"));
const CopyToClipboard = ({ text, children }) => {
    const [isCopied, setIsCopied] = (0, react_1.useState)(false);
    const copyToClipboard = () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            yield navigator.clipboard.writeText(text);
            setIsCopied(true);
            setTimeout(() => {
                setIsCopied(false);
            }, 2000);
        }
        catch (err) { }
    });
    return (<CopyToClipboard_styled_1.CopyToClipboardStyled>
      <p className="CopyToClipboard-text">{text}</p>
      <button className="CopyToClipboard-button" onClick={copyToClipboard}>
        {isCopied ? (<>
            <Icon_1.default iconType={"done"}/> Copied!
          </>) : (<>
            <Icon_1.default iconType={"copy"}/> Copy Link
          </>)}
      </button>
      {children}
    </CopyToClipboard_styled_1.CopyToClipboardStyled>);
};
exports.default = CopyToClipboard;
