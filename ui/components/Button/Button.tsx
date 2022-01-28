import classNames from "classnames";
import { createElement } from "react";

import styles from "./styles.module.scss";

export type PropsType = {
  children: string;
  variant?: "outlined" | "solid" | "text";
  color?: "primary" | "secondary" | "link" | "quiet" | "loud";
  rounded?: "none" | "full" | "sm" | "md" | "lg";
  size?: "normal" | "large";
  component?: "button" | "a";
  href?: string;
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
    },
    children
  );
};

export default Button;
