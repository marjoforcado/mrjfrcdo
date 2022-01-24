import classNames from "classnames";
import styles from "./styles.module.scss";

type PropsType = {
  children: any;
  fullHeight?: boolean;
  centerHorizontal?: boolean;
};

const Container = (props: PropsType) => {
  const { fullHeight, children, centerHorizontal } = props;

  return (
    <div
      className={classNames(styles["app-container"], {
        [styles["full-height"]]: fullHeight,
        [styles["center-horizontal"]]: centerHorizontal,
      })}
    >
      {children}
    </div>
  );
};

export default Container;
