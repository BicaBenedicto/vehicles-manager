import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Context from "../services";
import ManagerComponent from "../components/Manager.jsx";
import "../sass/Manager.scss";

export default function Manager() {
  const { isLogged } = useContext(Context);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLogged) navigate("/");
  }, [isLogged]);

  return <ManagerComponent />;
}
