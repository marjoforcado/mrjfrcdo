import classNames from "classnames";
import styles from "./styles.module.scss";

type PropsType = {
  children: any;
  fullHeight?: boolean;
};

const Container = (props: PropsType) => {
  const { fullHeight, children } = props;

  return (
    <div
      className={classNames(styles["app-container"], {
        [styles["full-height"]]: fullHeight,
      })}
    >
      {children}
    </div>
  );
};

export default Container;
