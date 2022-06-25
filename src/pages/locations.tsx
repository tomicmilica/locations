import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import LocationCard from "../components/location-card/locationCard";
import { GlobalState } from "../redux/reducers";
import { GET_LOCATIONS_REQUESTED } from "../redux/types/types";
import Location from "../types/location";

const Locations = () => {
  const dispatch = useDispatch();
  const locations = useSelector(
    (state: GlobalState) => state.locations.locations
  );

  const handleLocationClik = (id: string) => {};
  useEffect(() => {
    dispatch({ type: GET_LOCATIONS_REQUESTED });
  });

  return (
    <>
      {locations?.map((location) => {
        console.log(location, "111111111");
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
