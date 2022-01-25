import styles from "./styles.module.scss";

type PropsType = {
  children: any;
};

const Header = (props: PropsType) => {
  const { children } = props;

  return <div className={styles["header"]}>{children}</div>;
};

export default Header;
