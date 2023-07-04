import { useState, useCallback } from 'react';

interface ClipboardHook {
  isCopied: boolean;
  copyToClipboard: (text: string) => Promise<void>;
  resetClipboard: () => void;
}

const useClipboard = (): ClipboardHook => {
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = useCallback(async (text: string): Promise<void> => {
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
