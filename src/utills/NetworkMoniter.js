import { useEffect } from 'react';

const NetworkMonitor = ({ router }) => {
  useEffect(() => {
    const handleNetworkChange = () => {
      if (!navigator.onLine) {
        router.navigate("/error"); 
      } else {
        window.location.reload();
      }
    };

    // Check network status on mount
    if (!navigator.onLine) {
      router.navigate("/error");
    }

    // Listen for network status changes
    window.addEventListener('offline', handleNetworkChange);
    window.addEventListener('online', handleNetworkChange);

    // Cleanup event listeners on unmount
    return () => {
      window.removeEventListener('offline', handleNetworkChange);
      window.removeEventListener('online', handleNetworkChange);
    };
  }, [router]);

  return null;  // This component only handles network logic
};

export default NetworkMonitor;
