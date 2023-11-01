import styles from "./ErrorPage.module.scss";
import cn from "classnames";
import { HTMLAttributes } from "react";

interface ErrorPageProps extends HTMLAttributes<HTMLDivElement> {}

export const ErrorPage = ({ className }: ErrorPageProps) => {
  const reloadPage = () => {
    location.reload();
  };

  return (
    <div className={cn(styles.ErrorPage, className)}>
      <p>Произошла непредвиденная ошибка</p>
      <button onClick={reloadPage}>Обновить страницу</button>
    </div>
  );
};
