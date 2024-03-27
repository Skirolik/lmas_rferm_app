import { Button, Text } from "@mantine/core";
import React, { useState } from "react";
import LazyLoad from "react-lazy-load";
import {
  Map,
  Marker,
  GeolocateControl,
  NavigationControl,
  Popup,
} from "react-map-gl";

const MAPBOX_TOKEN =
  "pk.eyJ1Ijoic2tpcm8iLCJhIjoiY2w1aTZjN2x2MDI3ODNkcHp0cnhuZzVicSJ9.HMjwHtHf_ttkh_aImSX-oQ";

interface RfermMapData {
  lat: number;
  lon: number;
  status: string;
  pit_name: string;
}

export const Rferm_map: React.FC<{ data: RfermMapData[] }> = ({ data }) => {
  console.log("Data for map", data);
  const [selectedMarker, setSelectedMarker] = useState<RfermMapData | null>(
    null
  );
  const popupStyle = {
    // backgroundColor: "lightgray",
    padding: "12px",
    borderRadius: "10px",

    color: "black",
    boxColor: "red",
  };

  const markercolor = (status: string) => {
    if (status == "Danger") {
      return "#c51d31";
    } else if (status == "Unhealthy") {
      return "#d14d14";
    } else {
      return "#24782c";
    }
  };

  return (
    <div>
      <LazyLoad>
        <Map
          style={{ width: "100%", height: 450 }}
          initialViewState={{
            latitude: 23.1957247,
            longitude: 77.7908816,
            zoom: 3.5,
          }}
          mapStyle="mapbox://styles/mapbox/streets-v9"
          mapboxAccessToken={MAPBOX_TOKEN}
        >
          {data.map((entry) => (
            <Marker
              longitude={entry.lon}
              latitude={entry.lat}
              color={markercolor(entry.status)}
              onClick={() => setSelectedMarker(entry)}
            ></Marker>
          ))}
          <GeolocateControl position="top-left" />
          <NavigationControl position="top-left" />
          {selectedMarker && (
            <Popup
              latitude={selectedMarker.lat}
              longitude={selectedMarker.lon}
              style={popupStyle}
              closeButton={true}
              onClose={() => setSelectedMarker(null)} // To close the popup when the close button is clicked
              closeOnClick={false}
            >
              <div>
                <Button
                  size="xs"
                  variant="light"
                  style={{
                    position: "absolute",
                    top: "3px",
                    right: "0px",
                  }}
                >
                  x
                </Button>
                <Text>{selectedMarker.pit_name}</Text>
                <Text>Latitude: {selectedMarker.lat}</Text>
                <Text>Longitude: {selectedMarker.lon}</Text>
                <Text>Resistance: {selectedMarker.status}</Text>
                {/* Add more details as needed */}
              </div>
            </Popup>
          )}
        </Map>
      </LazyLoad>
    </div>
  );
};
