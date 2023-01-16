import React, { FC } from "react";
import styles from "./Button.module.css";
import github from "../../assets/svg-icons/github.svg";
import telegram from "../../assets/svg-icons/telegram.svg";
import email from "../../assets/svg-icons/Email.svg";
import ghPages from "../../assets/svg-icons/ghPages.svg";

type IButtonProps = React.PropsWithChildren<{
  href?: string;
  icon?: string;
  // value?: string;
  onClick?: React.MouseEventHandler;
}>;

export const Button: FC<IButtonProps> = React.memo(
  ({ href, icon, onClick, children }) => {
    // console.log(icon);
    function getIcon(icon: string) {
      switch (icon) {
        case "github":
          return github;
        case "telegram":
          return telegram;
        case "email":
          return email;
        case "ghPages":
          return ghPages;
        default:
          return;
      }
    }
    return (
      <a className={styles.btn} href={href} onClick={onClick}>
        <img
          className={styles.icon}
          src={getIcon(icon!)}
          alt="Иконка соцсети"
        />
        {children}
      </a>
    );
  }
);
