import React, { useState } from "react"
import MapGL from "react-map-gl"
const MAPBOX_TOKEN =
  "pk.eyJ1Ijoic29sdGEiLCJhIjoiY2txdGhsZ3B5MDB5ajJvbzRrNmMyd284ayJ9.KfMiL32b6BHJqk46DHBchA"

const MapBox = () => {
  const [viewport, setViewport] = useState({
    latitude: 37.8,
    longitude: -122.4,
    zoom: 14,
    bearing: 0,
    pitch: 0,
  })
  return (
    <div className="overflow-hidden" style={{ height: "300px" }}>
      <MapGL
        className=""
        {...viewport}
        width="100vw"
        height="100vh"
        mapStyle="mapbox://styles/mapbox/dark-v9"
        onViewportChange={setViewport}
        mapboxApiAccessToken={MAPBOX_TOKEN}
      />
    </div>
  )
}

export default MapBox
