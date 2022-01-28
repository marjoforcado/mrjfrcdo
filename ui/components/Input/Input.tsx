import styles from "./styles.module.scss";

type PropsType = {
  type?: "text";
  required?: boolean;
  placeholder?: string;
};

const Input = (props: PropsType) => {
  const { type = "text", ...rest } = props;

  return <input className={styles["input"]} type={type} {...rest} />;
};

export default Input;
