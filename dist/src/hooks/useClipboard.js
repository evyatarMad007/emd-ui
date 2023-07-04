import { useState, useCallback } from 'react';
const useClipboard = () => {
    const [isCopied, setIsCopied] = useState(false);
    const copyToClipboard = useCallback(async (text) => {
        try {
            await navigator.clipboard.writeText(text);
            setIsCopied(true);
        }
        catch (error) {
            setIsCopied(false);
        }
    }, []);
    const resetClipboard = useCallback(() => {
        setIsCopied(false);
    }, []);
    return { isCopied, copyToClipboard, resetClipboard };
};
export default useClipboard;
