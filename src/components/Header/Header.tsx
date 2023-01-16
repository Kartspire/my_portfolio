import React, { FC, useEffect } from "react";
import styles from "./Header.module.css";
import avatar from "../../assets/img/avatar.png";
import { Button } from "../Button";
import { Clipboard } from "../Clipboard";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { changeClipboardVisible } from "../../app/reducers/clipboardSlice";

interface IHeaderProps {}

export const Header: FC<IHeaderProps> = () => {
  const dispatch = useAppDispatch();
  const clipboardIsShown = useAppSelector((state) => state.clipboard.isShown);
  let timeout: any;
  console.log(clipboardIsShown);

  function copiedEmail() {
    clearTimeout(timeout);
    navigator.clipboard.writeText("Limk94@mail.ru");
    dispatch(changeClipboardVisible(true));
    timeout = setTimeout(() => {
      dispatch(changeClipboardVisible(false));
    }, 2000);
  }

  return (
    <header className={styles.header}>
      <Clipboard />
      <div className={styles.container}>
        <div className={styles.avatar}>
          <img src={avatar} alt="тут была моя аватарка" />
        </div>
        <p className={styles.name}>Кирилл Лимонов</p>
        <Button href="https://github.com/Kartspire" icon="github">
          github
        </Button>
        <Button href="https://t.me/Kartspire" icon="telegram">
          telegram
        </Button>
        <Button icon="email" onClick={copiedEmail}>
          Email
        </Button>
      </div>
    </header>
  );
};
