import React, { FC } from "react";
import { Button } from "../../Button";
import styles from "./ProjectCard.module.css";

interface IProjectCardProps {
  name: string;
  description: string;
  has_pages: boolean;
  html_url: string;
}

export const ProjectCard: FC<IProjectCardProps> = ({
  name,
  description,
  has_pages,
  html_url,
}) => {
  const ghPagesLink = `https://kartspire.github.io/${name}/`;

  return (
    <li className={styles.cardWrapper}>
      <div className={styles.card}>
        <div className={styles.imgWrapper}>
          <div
            className={description ? styles.img : styles.defaultImage}
            style={{
              backgroundImage: `url(assets/img/${name}.jpg)`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
        </div>
        <div className={styles.reposContent}>
          <p className={styles.name}>{name}</p>
          <p className={styles.description}>
            {description ? description : "Этот проект пока еще не готов"}
          </p>
          <div className={styles.buttonWrapper}>
            {has_pages && (
              <Button href={ghPagesLink} icon="ghPages">
                page
              </Button>
            )}
            <Button href={html_url} icon="github">
              repository
            </Button>
          </div>
        </div>
      </div>
    </li>
  );
};
