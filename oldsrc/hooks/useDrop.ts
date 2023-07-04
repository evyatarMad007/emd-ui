import { useRef, useCallback, DragEvent } from 'react';

interface DropHandlers {
  ref: React.RefObject<HTMLDivElement>;
  handleDragOver: (event: DragEvent<HTMLDivElement>) => void;
  handleDrop: (event: DragEvent<HTMLDivElement>) => void;
}

const useDrop = (onDrop: (data: string) => void): DropHandlers => {
  const ref = useRef<HTMLDivElement>(null);

  const handleDragOver = useCallback((event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  }, []);

  const handleDrop = useCallback(
    (event: DragEvent<HTMLDivElement>) => {
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
