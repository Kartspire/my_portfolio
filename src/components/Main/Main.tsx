import React, { FC, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { fetchUsers } from "../../asyncActions/repos";
import { Loader } from "../Loader";
import styles from "./Main.module.css";
import { ProjectCard } from "./ProjectCard";

interface IMainProps {}

export const Main: FC<IMainProps> = () => {
  const dispatch = useAppDispatch();
  const loader = useAppSelector((state) => state.loader.loader);
  const error = useAppSelector((state) => state.repos.error);
  const repos = useAppSelector((state) => state.repos.repos);

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  const reposList = repos.map((el) => {
    if (
      el.name !== "reddit" &&
      el.name !== "my_portfolio" &&
      el.name !== "fool"
    ) {
      return (
        <ProjectCard
          key={el.id}
          name={el.name}
          description={el.description}
          has_pages={el.has_pages}
          html_url={el.html_url}
        />
      );
    }
  });

  return (
    <div className={styles.mainWrapper}>
      <div className={styles.container}>
        {loader ? (
          <Loader />
        ) : error ? (
          <div>
            <h1>{error}</h1>
          </div>
        ) : (
          <ul className={styles.reposList}>{reposList}</ul>
        )}
      </div>
    </div>
  );
};
