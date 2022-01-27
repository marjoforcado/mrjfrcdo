import classNames from "classnames";

import styles from "./styles.module.scss";

type PropsType = {
  children: string;
  variant?: "outlined" | "solid";
  color?: "primary" | "secondary" | "link" | "quiet" | "loud";
  rounded?: "none" | "full";
};

const Button = (props: PropsType) => {
  const {
    children,
    variant = "outlined",
    color = "primary",
    rounded = "none",
  } = props;

  return (
    <button
      className={classNames(
        styles["btn"],
        styles[`variant--${variant}`],
        styles[`color--${color}`],
        styles[`rounded--${rounded}`]
      )}
    >
      {children}
    </button>
  );
};

export default Button;
