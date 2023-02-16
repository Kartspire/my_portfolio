import React, { FC } from "react";
import styles from "./Button.module.css";
import github from "../../assets/svg-icons/github.svg";
import telegram from "../../assets/svg-icons/telegram.svg";
import email from "../../assets/svg-icons/Email.svg";
import ghPages from "../../assets/svg-icons/ghPages.svg";

type IButtonProps = React.PropsWithChildren<{
  href?: string;
  icon?: string;
  onClick?: React.MouseEventHandler;
}>;

export const Button: FC<IButtonProps> = React.memo(
  ({ href, icon, onClick, children }) => {
    function getIcon(icon: string) {
      switch (icon) {
        case "github":
          return (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 20.5675C6.57143 21.7248 3.71429 20.5675 2 17"
                stroke="#30352E"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10 22V18.7579C10 18.1596 10.1839 17.6396 10.4804 17.1699C10.6838 16.8476 10.5445 16.3904 10.1771 16.2894C7.13394 15.4528 5 14.1077 5 9.64606C5 8.48611 5.38005 7.39556 6.04811 6.4464C6.21437 6.21018 6.29749 6.09208 6.31748 5.9851C6.33746 5.87813 6.30272 5.73852 6.23322 5.45932C5.95038 4.32292 5.96871 3.11619 6.39322 2.02823C6.39322 2.02823 7.27042 1.74242 9.26698 2.98969C9.72282 3.27447 9.95075 3.41686 10.1515 3.44871C10.3522 3.48056 10.6206 3.41384 11.1573 3.28041C11.8913 3.09795 12.6476 3 13.5 3C14.3524 3 15.1087 3.09795 15.8427 3.28041C16.3794 3.41384 16.6478 3.48056 16.8485 3.44871C17.0493 3.41686 17.2772 3.27447 17.733 2.98969C19.7296 1.74242 20.6068 2.02823 20.6068 2.02823C21.0313 3.11619 21.0496 4.32292 20.7668 5.45932C20.6973 5.73852 20.6625 5.87813 20.6825 5.9851C20.7025 6.09207 20.7856 6.21019 20.9519 6.4464C21.6199 7.39556 22 8.48611 22 9.64606C22 14.1077 19.8661 15.4528 16.8229 16.2894C16.4555 16.3904 16.3162 16.8476 16.5196 17.1699C16.8161 17.6396 17 18.1596 17 18.7579V22"
                stroke="#30352E"
                fill="none"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          );
        case "telegram":
          return (
            <svg
              width="21"
              height="19"
              viewBox="0 0 21 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.81882 14.1115L15.1064 17.9672C16.3479 18.8724 18.1041 18.0978 18.2727 16.5706L18.9367 10.5556L19.8009 1.80348C19.9019 0.779998 19.3145 0.326282 18.3591 0.706974C15.6608 1.78213 9.77352 4.10055 1.73441 7.77774C-0.0135038 8.57726 0.399145 11.2253 2.29934 11.5146L6.0815 12.0904C6.63336 12.1744 7.19522 12.024 7.63126 11.6754L11.1175 8.88885L15.2877 5.55552L10.0749 10.5555L9.53871 11.127C8.71601 12.0038 8.84735 13.4031 9.81882 14.1115Z"
                stroke="#30352E"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          );
        case "email":
          return (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 6L10.9169 11.7271C11.3279 12.0116 11.8721 12.0116 12.2831 11.7271L20 6M4.4 19.4H18.8C20.1255 19.4 21.2 18.3255 21.2 17V7.4C21.2 6.07452 20.1255 5 18.8 5H4.4C3.07452 5 2 6.07452 2 7.4V17C2 18.3255 3.07452 19.4 4.4 19.4Z"
                strokeWidth="1.5"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          );
        case "ghPages":
          return (
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.8 16.95L14.2923 12.8154H12.0769L10.6 11.3385L13.5538 6.90769H18.7231M5.43077 3.21538L6.99718 4.7818C7.83888 5.62349 8.09798 6.88582 7.6559 7.99102V7.99102C7.20401 9.12075 6.10984 9.86154 4.89308 9.86154H1.73846M20.2 10.6C20.2 15.9019 15.9019 20.2 10.6 20.2C5.29807 20.2 1 15.9019 1 10.6C1 5.29807 5.29807 1 10.6 1C15.9019 1 20.2 5.29807 20.2 10.6Z"
                stroke="black"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          );
        default:
          return;
      }
    }
    return (
      <a className={styles.btn} href={href} onClick={onClick}>
        {/* <img
          className={styles.icon}
          src={getIcon(icon!)}
          alt="Иконка соцсети"
        /> */}
        {getIcon(icon!)}
        {children}
      </a>
    );
  }
);
