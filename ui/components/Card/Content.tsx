import styles from "./styles.module.scss";

type PropsType = {
  children: any;
};

const Content = (props: PropsType) => {
  const { children } = props;

  return <div className={styles["content"]}>{children}</div>;
};

export default Content;
