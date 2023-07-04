interface ClipboardHook {
    isCopied: boolean;
    copyToClipboard: (text: string) => Promise<void>;
    resetClipboard: () => void;
}
declare const useClipboard: () => ClipboardHook;
export default useClipboard;
