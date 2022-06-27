import Location from "../../types/location";
import LocationCardContent from "../location-card-content/locationCardContent";
import Timezone from "../../assets/icons/Timezone.svg";
import Users from "../../assets/icons/Users.svg";
import Views from "../../assets/icons/Views.svg";
import Close from "../../assets/icons/Close.svg";

import moment from "moment";
import { LocationCardHeader } from "../location-card/styled/locationCardHeader.styled";
import { ModalContentContainer } from "./styled/modalContentContainter";
import { DoneButton } from "./styled/doneButton.styled";

interface ModalItemProps {
  location: Location | null;
  onClose: () => void;
}

const ModalContent = ({ location, onClose }: ModalItemProps) => {
  return (
    location && (
      <ModalContentContainer data-testid={"modal-content"}>
        <LocationCardHeader>
          <h1>{location.name}</h1>
          <button onClick={onClose}>
            <img src={Close} alt=""></img>
          </button>
        </LocationCardHeader>
        <LocationCardContent
          icon={Users}
          data={`${location.userCount.toString()}`}
        />
        <LocationCardContent
          icon={Timezone}
          data={`${moment(location.createdAt).format("h:mm:ss a")} (GMT${moment(
            location.createdAt
          ).format("Z")})`}
        />
        <LocationCardContent
          icon={Views}
          data={`${location.views?.toString()}`}
        />
        <h2>Description</h2>
        <p>{location.description}</p>
        <DoneButton onClick={onClose} data-testid="modal-x-button">
          Done
        </DoneButton>
      </ModalContentContainer>
    )
  );
};

export default ModalContent;
