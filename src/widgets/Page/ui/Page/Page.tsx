import { HTMLAttributes } from "react";
import styles from "./Page.module.scss";
import cn from "classnames";

interface PageProps extends HTMLAttributes<HTMLDivElement> {}
export const Page = ({ children, className }: PageProps) => {
  return <main className={cn(styles.Page, className)}>{children}</main>;
};
