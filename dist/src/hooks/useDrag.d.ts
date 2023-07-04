import { MouseEvent } from 'react';
interface DragHandlers {
    handleMouseDown: (event: MouseEvent<HTMLDivElement>) => void;
    handleMouseMove: (event: MouseEvent<HTMLDivElement>) => void;
    handleMouseUp: () => void;
    isDragging: boolean;
}
declare const useDrag: () => DragHandlers;
export default useDrag;
