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
      {clipLeft && clipLeft}
      {children}
      {clipRight && clipRight}
    </button>
  );
};

export default Button;
