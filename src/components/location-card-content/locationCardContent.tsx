interface LocationCardItemProps {
  icon?: string;
  data: string | number;
}

const LocationCardContent = ({ icon, data }: LocationCardItemProps) => {
  return (
    <div>
      <img src={icon} alt="" />
      <p>{data} views</p>
    </div>
  );
};

export default LocationCardContent;
