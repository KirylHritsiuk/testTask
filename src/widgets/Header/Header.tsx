import cn from "classnames";
import styles from "./Header.module.scss";
import { HTMLAttributes } from "react";

interface HeaderProps extends HTMLAttributes<HTMLHeadElement> {}

const Header = ({ className }: HeaderProps) => {
  return (
    <header className={cn(styles.header, className)}>
      <div className={styles.logoBlock}>
        <h1 className={styles.logo}>cat</h1>
        <span className={styles.description}>currencies academic terms</span>
      </div>
    </header>
  );
};

export default Header;
