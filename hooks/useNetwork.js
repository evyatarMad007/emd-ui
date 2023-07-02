// useNetwork: Tracks network status.
import { useState, useEffect } from 'react';

const useNetwork = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
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

export default useNetwork;


// example use
// import React from 'react';
// import useNetwork from './useNetwork';

// const NetworkStatus = () => {
//   const isOnline = useNetwork();

//   return (
//     <div>
//       <p>Network status: {isOnline ? 'Online' : 'Offline'}</p>
//     </div>
//   );
// };

// export default NetworkStatus;


