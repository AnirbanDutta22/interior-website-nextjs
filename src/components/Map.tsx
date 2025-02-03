"use client";
import React, { useEffect } from "react";

const Map = () => {
  useEffect(() => {
    const initMap = () => {
      const myLocation = { lat: 26.323921, lng: 89.451088 }; // Replace with your coordinates
      const map = new window.google.maps.Map(document.getElementById("map"), {
        zoom: 8,
        center: myLocation,
      });
      new window.google.maps.Marker({
        position: myLocation,
        map: map,
      });
    };

    if (window.google) {
      initMap();
    } else {
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyCEc2r3t53O_Gri8A1C3wCNmD-K_2wsPbk&callback=initMap`;
      script.async = true;
      script.defer = true;
      window.initMap = initMap;
      document.body.appendChild(script);
    }
  }, []);

  return <div id="map" style={{ height: "400px", width: "100%" }} />;
};

export default Map;
