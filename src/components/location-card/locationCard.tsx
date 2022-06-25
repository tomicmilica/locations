import Location from "../../types/location";

interface LocationCardProps {
  location: Location;
  onClick: () => void;
}

const LocationCard = ({ location, onClick }: LocationCardProps) => {
  return (
    <div onClick={onClick}>
      <div>
        <h1>{location.name}</h1>
        <button>
          <img alt=""></img>
        </button>
      </div>
    </div>
  );
};

export default LocationCard;
