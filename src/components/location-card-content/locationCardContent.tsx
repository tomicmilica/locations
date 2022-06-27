import { LocationContentContainer } from "./styled/locationContentContainer.styled";

interface LocationCardItemProps {
  icon?: string;
  data: string | number;
}

const LocationCardContent = ({ icon, data }: LocationCardItemProps) => {
  return (
    <LocationContentContainer data-testid="location-card-content">
      <img src={icon} alt="icon" />
      <p>{data} views</p>
    </LocationContentContainer>
  );
};

export default LocationCardContent;
