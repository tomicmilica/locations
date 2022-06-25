import React from "react";
import { useSelector } from "react-redux";
import { LocationApi } from "../api/locationsApi";
import LocationCard from "../components/location-card/locationCard";
import { GlobalState } from "../redux/reducers";
import Location from "../types/location";

const Locations = () => {
  const locations = useSelector(
    (state: GlobalState) => state.locations.locations
  );
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
