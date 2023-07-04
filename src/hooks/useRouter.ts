import { useNavigate, useLocation, useParams, useMatch, NavigateOptions } from 'react-router-dom';
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

function useRouter(): UseRouterResult {
  const navigate = useNavigate();
  const locationObj = useLocation();
  const params = useParams();

  const match = useMatch('/your-pattern-here'); // You can adjust the pattern here as needed

  return {
    push: (to, options) => navigate(to, { ...options, replace: false }),
    replace: (to, options) => navigate(to, { ...options, replace: true }),
    pathname: locationObj.pathname,
    query: new URLSearchParams(locationObj.search),
    params: params as Record<string, string>,
    match: match as MatchParams | any,
    location: locationObj as Location,
    navigate: (to, options) => navigate(to as string, options),
  };
}

export default useRouter;
