import React, { FC } from "react";
import { Button } from "../../Button";
import styles from "./ProjectCard.module.css";
import сlientBase from "../../../assets/img/client-base.jpg";
import euklid from "../../../assets/img/euklid.jpg";
import recipes from "../../../assets/img/recipes.jpg";
import rickMortyCharacters from "../../../assets/img/rick-morty-characters.jpg";
import starWars from "../../../assets/img/star-wars.jpg";
import todo from "../../../assets/img/todo.jpg";
import wsChat from "../../../assets/img/websocket_chat.jpg";

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

  function getImage(name: string) {
    switch (name) {
      case "client-base":
        return сlientBase;
      case "euklid":
        return euklid;
      case "recipes":
        return recipes;
      case "rick-morty_characters":
        return rickMortyCharacters;
      case "star-wars":
        return starWars;
      case "todo":
        return todo;
      case "websocket_chat":
        return wsChat;
      default:
        return;
    }
  }

  return (
    <li className={styles.card}>
      <div className={styles.imgWrapper}>
        <img className={styles.img} src={getImage(name)} alt="" />
      </div>
      <div className={styles.reposContent}>
        <p className={styles.name}>{name}</p>
        <p className={styles.description}>{description}</p>
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
    </li>
  );
};
