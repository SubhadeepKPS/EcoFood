import { createContext } from "react";

const GeolocationContext = createContext({
  location: {
    loaded: false,
    coordinates: {
      latitude: null,
      longitide: null,
    },
  },
});

export default GeolocationContext;
