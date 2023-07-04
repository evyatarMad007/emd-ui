import { DragEvent } from 'react';
interface DropHandlers {
    ref: React.RefObject<HTMLDivElement>;
    handleDragOver: (event: DragEvent<HTMLDivElement>) => void;
    handleDrop: (event: DragEvent<HTMLDivElement>) => void;
}
declare const useDrop: (onDrop: (data: string) => void) => DropHandlers;
export default useDrop;
