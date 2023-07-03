// useClipboard: A hook to interact with the clipboard.
import { useState, useCallback } from 'react';

const useClipboard = () => {
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = useCallback(async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setIsCopied(true);
    } catch (error) {
      setIsCopied(false);
    }
  }, []);

  const resetClipboard = useCallback(() => {
    setIsCopied(false);
  }, []);

  return { isCopied, copyToClipboard, resetClipboard };
};

export default useClipboard;


// example use
// import React from 'react';
// import useClipboard from './useClipboard';

// const ClipboardComponent = () => {
//   const { isCopied, copyToClipboard } = useClipboard();

//   const handleCopyClick = () => {
//     copyToClipboard('Text to copy to clipboard');
//   };

//   return (
//     <div>
//       <button onClick={handleCopyClick}>
//         {isCopied ? 'Copied!' : 'Copy to Clipboard'}
//       </button>
//     </div>
//   );
// };

// export default ClipboardComponent;

