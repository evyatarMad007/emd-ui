"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const useNetwork = () => {
    const [isOnline, setIsOnline] = (0, react_1.useState)(navigator.onLine);
    (0, react_1.useEffect)(() => {
        const updateNetworkStatus = () => {
            setIsOnline(navigator.onLine);
        };
        window.addEventListener('online', updateNetworkStatus);
        window.addEventListener('offline', updateNetworkStatus);
        return () => {
            window.removeEventListener('online', updateNetworkStatus);
            window.removeEventListener('offline', updateNetworkStatus);
        };
    }, []);
    return isOnline;
};
exports.default = useNetwork;
