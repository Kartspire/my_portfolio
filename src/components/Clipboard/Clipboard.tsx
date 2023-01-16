import React, { FC, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { changeClipboardVisible } from "../../app/reducers/clipboardSlice";
import styles from "./Clipboard.module.css";

interface IClipboardProps {}

export const Clipboard: FC<IClipboardProps> = () => {
  const dispatch = useAppDispatch();
  const clipboardIsShown = useAppSelector((state) => state.clipboard.isShown);

  // useEffect(() => {
  //   return () => {
  //     dispatch(changeClipboardVisible());
  //   };
  // }, []);

  return (
    <div
      className={`${styles.clipboard} ${clipboardIsShown && styles.clicked}`}
    >
      copied to clipboard
    </div>
  );
};
