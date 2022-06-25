import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import LocationCard from "../components/location-card/locationCard";
import { GlobalState } from "../redux/reducers";
import { GET_LOCATIONS_REQUESTED } from "../redux/types/types";
import Location from "../types/location";
import { LocationsContainer } from "./styled/locationContainer.styled";
import { LocationHeader } from "./styled/locationsHeader.styled";

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
      <LocationHeader>
        <h1>All locations</h1>
        <h2>Acme locations</h2>
      </LocationHeader>
      <LocationsContainer>
        {locations?.map((location) => {
          console.log(location, "111111111");
          return (
            <LocationCard
              location={location}
              onClick={() => handleLocationClik(location.id)}
            />
          );
        })}
      </LocationsContainer>
    </>
  );
};

export default Locations;
