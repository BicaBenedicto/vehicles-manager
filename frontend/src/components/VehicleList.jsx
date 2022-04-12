import React, { useContext } from "react";
import Context from "../services";
import VehicleItem from "./VehicleItem.jsx";
import "../sass/VehicleList.scss";

export default function VehicleList() {
  const { vehicles } = useContext(Context);
  return (
    <div className="vehicle-list">
      {vehicles.map((vehicle) => (
        <VehicleItem key={vehicle.id} vehicle={vehicle} />
      ))}
    </div>
  );
}
