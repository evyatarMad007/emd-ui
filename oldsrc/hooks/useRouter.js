"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_router_dom_1 = require("react-router-dom");
function useRouter() {
    const navigate = (0, react_router_dom_1.useNavigate)();
    const locationObj = (0, react_router_dom_1.useLocation)();
    const params = (0, react_router_dom_1.useParams)();
    const match = (0, react_router_dom_1.useMatch)('/your-pattern-here'); // You can adjust the pattern here as needed
    return {
        push: (to, options) => navigate(to, Object.assign(Object.assign({}, options), { replace: false })),
        replace: (to, options) => navigate(to, Object.assign(Object.assign({}, options), { replace: true })),
        pathname: locationObj.pathname,
        query: new URLSearchParams(locationObj.search),
        params: params,
        match: match,
        location: locationObj,
        navigate: (to, options) => navigate(to, options),
    };
}
exports.default = useRouter;
