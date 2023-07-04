import { useNavigate, useLocation, useParams, useMatch } from 'react-router-dom';
function useRouter() {
    const navigate = useNavigate();
    const locationObj = useLocation();
    const params = useParams();
    const match = useMatch('/your-pattern-here'); // You can adjust the pattern here as needed
    return {
        push: (to, options) => navigate(to, { ...options, replace: false }),
        replace: (to, options) => navigate(to, { ...options, replace: true }),
        pathname: locationObj.pathname,
        query: new URLSearchParams(locationObj.search),
        params: params,
        match: match,
        location: locationObj,
        navigate: (to, options) => navigate(to, options),
    };
}
export default useRouter;
