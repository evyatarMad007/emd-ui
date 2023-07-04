"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Modal_styled_1 = require("./Modal.styled");
const Icon_1 = __importDefault(require("../../common/Icon/Icon"));
const ModalTemplate = ({ children, modalTitle, isModalActive, setModal, iconType, iconColor, modalError, }) => {
    if (!isModalActive)
        return null;
    return (<Modal_styled_1.ModalTemplateStyled>
      <div className="outside" onClick={() => setModal(false)}></div>
      <div className="inside">
        <div className="modal-header">
          {iconType && (<span className="icon">
              <Icon_1.default iconType={iconType} iconSize={20} iconColor={iconColor}/>
            </span>)}
          <h2 className="title">{modalTitle}</h2>
          <button className="close-button" onClick={() => setModal(false)}>
            <Icon_1.default iconType="close" iconSize={20} iconColor="#adadadff"/>
          </button>
        </div>
        <div className="modal-body">{children}</div>
        <div className="modal-footer">
          {modalError && <p className="modal-error">{modalError}</p>}
        </div>
      </div>
    </Modal_styled_1.ModalTemplateStyled>);
};
exports.default = ModalTemplate;
