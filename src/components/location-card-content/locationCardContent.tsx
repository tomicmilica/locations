import { LocationContentContainer } from "./styled/locationContentContainer.styled";

interface LocationCardItemProps {
  icon?: string;
  data: string | number;
}

const LocationCardContent = ({ icon, data }: LocationCardItemProps) => {
  return (
    <LocationContentContainer>
      <img src={icon} alt="" />
      <p>{data} views</p>
    </LocationContentContainer>
  );
};

export default LocationCardContent;
