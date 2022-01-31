import classNames from "classnames";
import styles from "./styles.module.scss";

type PropsType = {
  children: any;
  fullHeight?: boolean;
  centerHorizontal?: boolean;
  marginBottom?: 4;
};

const Container = (props: PropsType) => {
  const { fullHeight, children, centerHorizontal, marginBottom = 4 } = props;

  return (
    <div
      className={classNames(
        styles["app-container"],
        styles[`margin-bottom--${marginBottom}`],
        {
          [styles["full-height"]]: fullHeight,
          [styles["center-horizontal"]]: centerHorizontal,
        }
      )}
    >
      {children}
    </div>
  );
};

export default Container;
