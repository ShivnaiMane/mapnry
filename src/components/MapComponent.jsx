import { Map, Marker } from "@vis.gl/react-google-maps";
const MapComponent = ({ setShowMap, profile }) => {
  const { lat, lng } = profile.address.coordinates;
  return (
    <div to="/mapcomponent">
      <button
        className="flex-none rounded-md bg-black px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm ml-10 my-5 sm:my-2 "
        onClick={() => setShowMap(false)}
      >
        Back
      </button>
      <div className="w-[80%] h-[500px] flex justify-center mx-auto ">
        <Map defaultZoom={13} defaultCenter={{ lat: lat, lng: lng }}>
          <Marker position={{ lat: lat, lng: lng }} />
        </Map>
      </div>
    </div>
  );
};

export default MapComponent;
