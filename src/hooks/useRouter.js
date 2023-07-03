import { useNavigate, useLocation, useParams, useMatch } from 'react-router-dom';

function useRouter() {
  const navigate = useNavigate();
  const location = useLocation();
  const params = useParams();
  
  // You can use useMatch to match the current location to a specific pattern
  const match = useMatch('/your-pattern-here'); // Example: '/topics/:topicId'

  return {
    // Navigation
    push: (to, options) => navigate(to, { ...options, replace: false }), // navigate('/about') # push a new entry onto the history stack
    replace: (to, options) => navigate(to, { ...options, replace: true }), // navigate('/login', { replace: true }) # replace the current entry on the history stack
    pathname: location.pathname, // location.pathname # /about
    
    // Search/query
    query: new URLSearchParams(location.search), // location.search # ?id=123
    
    // Match and Params
    params, // useParams() # {id: "123"}
    match, // useMatch('/topics/:topicId') # {path: "/topics/:topicId", url: "/topics/123", params: {…}}
    
    // Location
    location, // useLocation() # {pathname: "/about", search: "", hash: "", state: undefined, key: "5nvxpbdafa"}
    
    // Navigate
    navigate, // useNavigate() # { navigate('/about') } for navigation
  };
}

export default useRouter;
