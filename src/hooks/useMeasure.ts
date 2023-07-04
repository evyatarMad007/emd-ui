import { useState, useCallback, useLayoutEffect, useRef, RefObject } from 'react';

interface Rect {
  top: number;
  right: number;
  bottom: number;
  left: number;
  width: number;
  height: number;
}

type MeasureHookResult = [RefObject<Element>, Rect | null];

const useMeasure = (): MeasureHookResult => {
  const [rect, setRect] = useState<Rect | null>(null);
  const ref = useRef<Element>(null);

  const updateRect = useCallback(() => {
    if (ref.current) {
      setRect(ref.current.getBoundingClientRect());
    }
  }, []);

  useLayoutEffect(() => {
    updateRect();

    const handleResize = () => {
      updateRect();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [updateRect]);

  return [ref, rect];
};

export default useMeasure;
