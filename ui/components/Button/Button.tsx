import classNames from "classnames";
import { createElement } from "react";

import styles from "./styles.module.scss";

export type PropsType = {
  children: string;
  variant?: "outlined" | "solid" | "text";
  color?: "primary" | "secondary" | "link" | "quiet" | "loud";
  rounded?: "none" | "full" | "sm" | "md" | "lg";
  size?: "normal" | "large" | "small";
  component?: "button" | "a";
  href?: string;
  onClick?: () => void;
};

const Button = (props: PropsType) => {
  const {
    children,
    variant = "outlined",
    color = "primary",
    rounded = "none",
    size = "normal",
    component = "button",
    href,
    onClick = () => {},
  } = props;

  return createElement(
    component,
    {
      className: classNames(
        styles["btn"],
        styles[`variant--${variant}`],
        styles[`color--${color}`],
        styles[`rounded--${rounded}`],
        styles[`size--${size}`]
      ),
      ...(component === "a" && href && { href }),
      onClick,
    },
    children
  );
};

export default Button;
