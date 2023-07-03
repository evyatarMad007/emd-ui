// useDrop: A hook to implement drop targets.
import { useRef, useCallback } from 'react';

const useDrop = (onDrop) => {
  const ref = useRef();

  const handleDragOver = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  }, []);

  const handleDrop = useCallback(
    (event) => {
      event.preventDefault();
      if (onDrop) {
        onDrop(event.dataTransfer.getData('text'));
      }
    },
    [onDrop]
  );

  return {
    ref,
    handleDragOver,
    handleDrop,
  };
};

export default useDrop;



// example use
// import React from 'react';
// import useDrop from './useDrop';

// const DropZone = ({ onDrop }) => {
//   const { ref, handleDragOver, handleDrop } = useDrop(onDrop);

//   return (
//     <div
//       ref={ref}
//       style={{
//         border: '2px dashed gray',
//         height: '200px',
//         width: '200px',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//       }}
//       onDragOver={handleDragOver}
//       onDrop={handleDrop}
//     >
//       Drop here
//     </div>
//   );
// };

// export default DropZone;
