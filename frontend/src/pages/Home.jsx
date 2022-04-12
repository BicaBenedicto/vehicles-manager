import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router";
import Context from "../services";
import Table from "../components/Table.jsx";
import VehicleList from "../components/VehicleList.jsx";
import { takeVehicles } from "../services/requisitionsApi";
import tableIcon from "../imgs/table.svg";
import gradeIcon from "../imgs/grade.svg";
import "../sass/Home.scss";

export default function Home() {
  const { setVehicles, isTable, vehicles, setIsTable, isLogged } =
    useContext(Context);
  const navigate = useNavigate();

  useEffect(() => {
    const get = async () => {
      const vehiclesGet = await takeVehicles();
      setVehicles(vehiclesGet);
    };
    get();
  }, [setVehicles]);

  const onChangeTableClick = () => {
    setIsTable(!isTable);
  };

  if (!isLogged) {
    return navigate("/");
  }

  if (!vehicles) {
    return <h1 className="loading">Carregando</h1>;
  }

  return (
    <main>
      <button
        onClick={onChangeTableClick}
        type="button"
        className="show-type-button"
      >
        <img src={isTable ? tableIcon : gradeIcon} alt="changeTableIcon" />
      </button>
      {isTable ? <Table /> : <VehicleList />}
    </main>
  );
}
