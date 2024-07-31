import { MapContainer, TileLayer } from "react-leaflet"

import "leaflet/dist/leaflet.css"
import "./leaflet-style.css"

const Map = () => {
  const coordinates = {
    lat: -8.836712264052078,
    long: 13.23460813078094,
  }
  return (
    <div className="relative w-full flex items-center justify-center h-[40vh] md:h-[70vh] border">
      <MapContainer
        zoom={14}
        className="leaflet-container"
        center={[coordinates.lat, coordinates.long]}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
    </div>
  )
}

export default Map
