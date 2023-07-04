import { useState, useEffect } from 'react';
/**
 * Custom hook for testing a media query.
 *
 * @param query - The media query string
 * @returns A boolean that indicates if the document matches the media query.
 */
function useMediaQuery(query) {
    // State and setter for match status
    const [matches, setMatches] = useState(window.matchMedia(query).matches);
    useEffect(() => {
        const mediaQueryList = window.matchMedia(query);
        const handleMediaChange = (event) => {
            setMatches(event.matches);
        };
        // Listen for changes in media query status
        mediaQueryList.addEventListener('change', handleMediaChange);
        return () => {
            // Cleanup: Remove the event listener
            mediaQueryList.removeEventListener('change', handleMediaChange);
        };
    }, [query]);
    return matches;
}
export default useMediaQuery;
// example usage
// import useMediaQuery from './useMediaQuery';
// const isScreenSmall = useMediaQuery('(max-width: 768px)');
// return (
//   <div>
//     {isScreenSmall ? (
//       <p>This content is rendered on small screens.</p>
//     ) : (
//       <p>This content is rendered on larger screens.</p>
//     )}
//   </div>
// );
