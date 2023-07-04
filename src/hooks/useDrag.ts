import { useState, useCallback, useRef, MouseEvent } from 'react';

interface DragPosition {
  x: number;
  y: number;
}

interface DragHandlers {
  handleMouseDown: (event: MouseEvent<HTMLDivElement>) => void;
  handleMouseMove: (event: MouseEvent<HTMLDivElement>) => void;
  handleMouseUp: () => void;
  isDragging: boolean;
}

const useDrag = (): DragHandlers => {
  const [isDragging, setIsDragging] = useState(false);
  const position = useRef<DragPosition>({ x: 0, y: 0 });

  const handleMouseDown = useCallback((event: MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);
    position.current = {
      x: event.clientX - event.currentTarget.getBoundingClientRect().left,
      y: event.clientY - event.currentTarget.getBoundingClientRect().top,
    };
  }, []);

  const handleMouseMove = useCallback((event: MouseEvent<HTMLDivElement>) => {
    if (isDragging) {
      const el = event.target as HTMLDivElement;
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
    isDragging,
  };
};

export default useDrag;
