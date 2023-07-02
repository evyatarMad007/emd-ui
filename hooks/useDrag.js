// useDrag: A hook to implement drag sources.
import { useState, useCallback, useRef } from 'react';

const useDrag = () => {
  const [isDragging, setIsDragging] = useState(false);
  const position = useRef({ x: 0, y: 0 });

  const handleMouseDown = useCallback((event) => {
    setIsDragging(true);
    position.current = {
      x: event.clientX - event.currentTarget.getBoundingClientRect().left,
      y: event.clientY - event.currentTarget.getBoundingClientRect().top,
    };
  }, []);

  const handleMouseMove = useCallback((event) => {
    if (isDragging) {
      const el = event.target;
      el.style.left = `${event.clientX - position.current.x}px`;
      el.style.top = `${event.clientY - position.current.y}px`;
    }
  }, [isDragging]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  return {
    handleMouseDown,
    handleMouseMove,
    handleMouseUp,
    isDragging
  };
};

export default useDrag;


// example use
// import React from 'react';
// import useDrag from './useDrag';

// const DraggableBox = () => {
//   const { handleMouseDown, handleMouseMove, handleMouseUp, isDragging } = useDrag();

//   return (
//     <div
//       style={{
//         position: 'absolute',
//         width: '100px',
//         height: '100px',
//         background: 'red',
//         cursor: isDragging ? 'grabbing' : 'grab'
//       }}
//       onMouseDown={handleMouseDown}
//       onMouseMove={handleMouseMove}
//       onMouseUp={handleMouseUp}
//     >
//       Drag me
//     </div>
//   );
// };

// export default DraggableBox;



