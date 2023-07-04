import { NavigateOptions } from 'react-router-dom';
import { Location } from 'history';
interface MatchParams {
    [key: string]: string;
}
interface UseRouterResult {
    push: (to: string, options?: NavigateOptions) => void;
    replace: (to: string, options?: NavigateOptions) => void;
    pathname: string;
    query: URLSearchParams;
    params: Record<string, string>;
    match: MatchParams | null;
    location: Location;
    navigate: (to: string | number, options?: NavigateOptions) => void;
}
declare function useRouter(): UseRouterResult;
export default useRouter;
