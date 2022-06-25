import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import LocationCard from "../components/location-card/locationCard";
import ModalContent from "../components/modal-content/modalContent";
import Modal from "../components/modal/modal";
import { GlobalState } from "../redux/reducers";
import { GET_LOCATIONS_REQUESTED } from "../redux/types/types";
import Location from "../types/location";
import { LocationsContainer } from "./styled/locationContainer.styled";
import { LocationHeader } from "./styled/locationsHeader.styled";

const Locations = () => {
  const dispatch = useDispatch();
  const [selectedLocationId, setSelectedLocationId] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const locations = useSelector(
    (state: GlobalState) => state.locations.locations
  );

  const handleLocationClik = (id: string) => {
    setIsOpen(true);
    setSelectedLocationId(id);
  };

  const getSelectedLocation = (id: string) => {
    return locations?.find((location) => location.id === id);
  };

  return (
    <>
      <div>
        <Modal isOpen={isOpen}>
          <ModalContent
            onClose={() => setIsOpen(false)}
            location={getSelectedLocation(selectedLocationId) || null}
          />
        </Modal>
      </div>
      <LocationHeader>
        <h1>All locations</h1>
        <h2>Acme locations</h2>
      </LocationHeader>
      <LocationsContainer>
        {locations?.map((location) => {
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
