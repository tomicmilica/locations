import React from "react";
import { LocationApi } from "../api/locationsApi";
import LocationCard from "../components/location-card/locationCard";
import Location from "../types/location";

interface LocationProps {
  locations: Location[];
}

const Locations = ({ locations }: LocationProps) => {
  const handleLocationClik = (id: string) => {};

  return (
    <>
      {locations?.map((location) => {
        return (
          <LocationCard
            location={location}
            onClick={() => handleLocationClik(location.id)}
          />
        );
      })}
    </>
  );
};

export default Locations;
