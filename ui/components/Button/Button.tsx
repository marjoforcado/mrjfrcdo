import classNames from "classnames";
import React, { createElement } from "react";

import styles from "./styles.module.scss";

export type PropsType = {
  children: string;
  variant?: "outlined" | "solid" | "text";
  color?: "primary" | "secondary" | "link" | "quiet" | "loud";
  rounded?: "none" | "full" | "sm" | "md" | "lg";
  size?: "normal" | "large" | "small";
  component?: "button" | "a";
  href?: string;
  target?: "_blank" | "_self" | "_parent" | "_top" | "framename";
  onClick?: () => void;
};

const Button = React.forwardRef((props: PropsType, ref) => {
  const {
    children,
    variant = "outlined",
    color = "primary",
    rounded = "none",
    size = "normal",
    component = "button",
    href,
    target,
    onClick = () => {},
  } = props;

  return createElement(
    component,
    {
      ref,
      className: classNames(
        styles["btn"],
        styles[`variant--${variant}`],
        styles[`color--${color}`],
        styles[`rounded--${rounded}`],
        styles[`size--${size}`]
      ),
      ...(component === "a" && href && { href }),
      ...(component === "a" && target && { target }),
      onClick,
    },
    children
  );
});

Button.displayName = "Button";

export default Button;
