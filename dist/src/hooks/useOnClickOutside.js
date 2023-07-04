import { useEffect } from 'react';
/**
 * Custom hook that alerts clicks outside of the passed ref
 *
 * @param ref - React ref object to the target element
 * @param handler - Callback function to execute when click is detected outside the ref
 */
function useOnClickOutside(ref, handler) {
    useEffect(() => {
        const listener = (event) => {
            // Do nothing if the ref element or the click event does not exist
            if (!ref.current || ref.current.contains(event.target)) {
                return;
            }
            // Execute the handler if click is outside the ref element
            handler(event);
        };
        // Add event listeners for both mousedown and touchstart events
        document.addEventListener('mousedown', listener);
        document.addEventListener('touchstart', listener);
        // Cleanup function to remove the event listeners
        return () => {
            document.removeEventListener('mousedown', listener);
            document.removeEventListener('touchstart', listener);
        };
    }, [ref, handler]);
}
export default useOnClickOutside;
// example usage
// import React, { useRef } from 'react';
// import useOnClickOutside from './useOnClickOutside';
// const MyComponent: React.FC = () => {
//   const ref = useRef<HTMLDivElement>(null);
//   const handleOutsideClick = () => {
//     console.log("You clicked outside of the element!");
//   };
//   useOnClickOutside(ref, handleOutsideClick);
//   return (
//     <div ref={ref}>
//       Clicking outside this element will trigger a console log.
//     </div>
//   );
// };
// export default MyComponent;
