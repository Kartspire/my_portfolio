import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import { fetchUsers } from "./asyncActions/repos";
import { Header } from "./components/Header";
import { Loader } from "./components/Loader";
import { Main } from "./components/Main";
import "./main.global.css";

export const App = () => {
  // const dispatch = useAppDispatch();
  // const loader = useAppSelector((state) => state.loader.loader);
  // const error = useAppSelector((state) => state.repos.error);

  // useEffect(() => {
  //   dispatch(fetchUsers());
  // }, []);

  // return loader ? (
  //   <Loader />
  // ) : error ? (
  //   <div>
  //     <h1>{error}</h1>
  //   </div>
  // ) : (
  //   <div className="container">
  //     <Header />
  //     <Main />
  //   </div>
  // );
  return (
    <div className="container">
      <Header />
      <Main />
    </div>
  );
};
