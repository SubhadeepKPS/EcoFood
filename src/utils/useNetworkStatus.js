import { useEffect, useState } from "react";

const useNetworkStatus = () => {
  const [networkStatus, setNetworkStatus] = useState(true);

  // check if online
  useEffect(() => {
    window.addEventListener("online", () => {
      setNetworkStatus(true);
    });
    window.addEventListener("offline", () => {
      setNetworkStatus(false);
    });
  }, []);

  return networkStatus;
};

export default useNetworkStatus;
