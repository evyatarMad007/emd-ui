/// <reference types="react" />
type RefType = React.RefObject<HTMLElement>;
/**
 * Custom hook that alerts clicks outside of the passed ref
 *
 * @param ref - React ref object to the target element
 * @param handler - Callback function to execute when click is detected outside the ref
 */
declare function useOnClickOutside(ref: RefType, handler: (event: MouseEvent | TouchEvent) => void): void;
export default useOnClickOutside;
