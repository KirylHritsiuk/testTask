import { Grid } from "react-loader-spinner";
import styles from "./RootLoader.module.scss";

export const RootLoader = () => {
  return (
    <Grid
      height="80"
      width="80"
      color="black"
      ariaLabel="Loading..."
      wrapperClass={styles.overlay}
    />
  );
};
