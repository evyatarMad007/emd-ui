import React, { useState } from "react";
import { CopyToClipboardStyled } from "./CopyToClipboard.styled";
import Icon from "../../../../src/components/common/Icon/Icon";

interface CopyToClipboardProps {
  text: string;
  children?: React.ReactNode;
}

const CopyToClipboard: React.FC<CopyToClipboardProps> = ({
  text,
  children,
}) => {
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
      <p className="CopyToClipboard-text">{text}</p>
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
