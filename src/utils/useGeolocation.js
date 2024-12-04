import { useEffect, useState } from "react";

const useGeolocation = () => {
  const [location, setLocation] = useState({
    loaded: false,
    coordinates: {
      latitude: null,
      longitude: null,
    },
  });

  useEffect(() => {
    fetchLocation();
  }, []); // Runs once on mount

  const fetchLocation = async () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);

        setLocation({
          loaded: true,
          coordinates: {
            latitude: latitude,
            longitude: longitude,
          },
        });
      });
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  };

  // Log updated location whenever it changes
  useEffect(() => {
    if (location.loaded) {
      console.log("Updated Location: ", location);
    }
  }, [location]); // Will run every time `location` changes

  return location;
};

export default useGeolocation;
