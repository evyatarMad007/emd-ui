import { RefObject } from 'react';
interface Rect {
    top: number;
    right: number;
    bottom: number;
    left: number;
    width: number;
    height: number;
}
type MeasureHookResult = [RefObject<Element>, Rect | null];
declare const useMeasure: () => MeasureHookResult;
export default useMeasure;
