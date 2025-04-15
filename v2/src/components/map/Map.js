import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';  // <-- this is required!
import { Box } from '@mui/material';

mapboxgl.accessToken = 'pk.eyJ1IjoibWljaGFlbG11cndheWkiLCJhIjoiY2xsMHRtNW04MDFvdTNsczBraHJuZnV2NCJ9.GksXjlbauDHoS9yqT4d8Ng';

const MapBox = () => {
  const mapContainer = useRef(null);
  const map = useRef(null);

  useEffect(() => {
    if (map.current) return;

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [36.82965106039985, -1.2892697869762284],
      zoom: 15
    });

    map.current.scrollZoom.disable();
    map.current.boxZoom.disable();
    map.current.doubleClickZoom.disable();
    map.current.touchZoomRotate.disable();
    map.current.dragRotate.disable();

    map.current.addControl(new mapboxgl.NavigationControl({ showCompass: false }), 'top-right');

    new mapboxgl.Marker()
      .setLngLat([36.82965106039985, -1.2892697869762284])
      .addTo(map.current);

  }, []);

  return (
    <Box
      sx={{
        width: '100%',
        height: { xs: '300px', md: '500px' },
        borderRadius: 2,
        overflow: 'hidden',
        boxShadow: 3,
      }}
    >
      <div ref={mapContainer} style={{ width: '100%', height: '100%' }} />
    </Box>
  );
};

export default MapBox;
