import React, { useState } from "react";
import { CopyToClipboardStyled } from "./CopyToClipboard.styled";
import Icon from "../Icon/Icon";
import { truncateString } from "../../../utils/general-utils";

const CopyToClipboard = ({ text, children }) => {
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setIsCopied(true);

      setTimeout(() => {
        setIsCopied(false);
        }, 2000);
    } catch (err) {}
  };

  return (
    <CopyToClipboardStyled>
      <p className="CopyToClipboard-text">{truncateString(text, 185)}</p>
      <button className="CopyToClipboard-button" onClick={copyToClipboard}>
        {isCopied ? (
          <>
            <Icon iconType={"done"} /> Copied!
          </>
        ) : (
          <>
            <Icon iconType={"copy"} /> Copy Link
          </>
        )}
      </button>
      {children}
    </CopyToClipboardStyled>
  );
};

export default CopyToClipboard;
