import Header from "@/widgets/Header/Header";
import { Outlet } from "react-router-dom";
import styles from "./MainLayout.module.scss";
import { HTMLAttributes } from "react";
import cn from "classnames";

interface MainLayoutProps extends HTMLAttributes<HTMLDivElement> {}

const MainLayout = ({ className }: MainLayoutProps) => {
  return (
    <div className={cn(styles.MainLayout, className)}>
      <Header />
      <Outlet />
    </div>
  );
};

export default MainLayout;
