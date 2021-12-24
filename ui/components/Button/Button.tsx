import styles from "./styles.module.scss";

type PropsType = {
  children: any;
  clipRight?: JSX.Element;
  clipLeft?: JSX.Element;
};

const Button = (props: PropsType) => {
  const { children, clipRight, clipLeft } = props;

  return (
    <button className={styles["btn"]}>
      {clipLeft && <span>{clipLeft}</span>}
      <span>{children}</span>
      {clipRight && <span>{clipRight}</span>}
    </button>
  );
};

export default Button;
