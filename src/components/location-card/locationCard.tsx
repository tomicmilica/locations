import Location from "../../types/location";
import LocationCardContent from "../location-card-content/locationCardContent";
import Timezone from "../../assets/icons/Timezone.svg";
import Users from "../../assets/icons/Users.svg";
import Views from "../../assets/icons/Views.svg";
import Edit from "../../assets/icons/Edit.svg";
import moment from "moment";
import { LocationCardContainer } from "./styled/locationCardContainer";
import { LocationCardHeader } from "./styled/locationCardHeader.styled";

interface LocationCardProps {
  location: Location;
  onClick: () => void;
}

const LocationCard = ({ location, onClick }: LocationCardProps) => {
  return (
    <LocationCardContainer onClick={onClick} data-testid="location-card">
      <LocationCardHeader>
        <h1>{location.name}</h1>
        <button>
          <img src={Edit} alt="edit"></img>
        </button>
      </LocationCardHeader>
      <LocationCardContent
        icon={Users}
        data={`${location.userCount.toString()} users`}
      />
      <LocationCardContent
        icon={Timezone}
        data={`${moment(location.createdAt).format("h:mm:ss a")} (GMT${moment(
          location.createdAt
        ).format("Z")})`}
      />
      <LocationCardContent icon={Views} data={location.views || 0} />
    </LocationCardContainer>
  );
};

export default LocationCard;
