import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import { fetchUsers } from "./asyncActions/repos";
import { Header } from "./components/Header";
import { Loader } from "./components/Loader";
import { Main } from "./components/Main";
import "./main.global.css";

export const App = () => {
  return (
    <div className="container">
      <Header />
      <Main />
    </div>
  );
};
