import styles from "./styles.module.scss";

type PropsType = {
  children: any;
};

const Container = (props: PropsType) => {
  const { children } = props;

  return <div className={styles["app-container"]}>{children}</div>;
};

export default Container;
