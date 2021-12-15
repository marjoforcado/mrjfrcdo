import styles from "./styles.module.scss";

type PropsType = {
  children: string;
};

const Button = (props: PropsType) => {
  const { children } = props;

  return <button>{children}</button>;
};

export default Button;
