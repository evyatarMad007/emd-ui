// useMeasure: Measures dimensions of a DOM element.

import { useState, useCallback, useLayoutEffect } from 'react';

const useMeasure = () => {
  const [rect, setRect] = useState(null);

  const ref = useCallback(node => {
    if (node !== null) {
      setRect(node.getBoundingClientRect());
    }
  }, []);

  useLayoutEffect(() => {
    if (ref.current) {
      setRect(ref.current.getBoundingClientRect());
    }

    const handleResize = () => {
      if (ref.current) {
        setRect(ref.current.getBoundingClientRect());
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [ref]);

  return [ref, rect];
};

export default useMeasure;



// example use
// import React from 'react';
// import useMeasure from './useMeasure';

// const MeasureExample = () => {
//   const [ref, rect] = useMeasure();

//   return (
//     <div>
//       <div ref={ref} style={{ width: '100px', height: '100px', backgroundColor: 'red' }}></div>
      
//       {rect && (
//         <div>
//           <p>Width: {rect.width}</p>
//           <p>Height: {rect.height}</p>
//           <p>Top: {rect.top}</p>
//           <p>Left: {rect.left}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default MeasureExample;

