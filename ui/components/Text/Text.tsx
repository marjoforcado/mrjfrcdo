import classNames from "classnames";
import { createElement } from "react";

import styles from "./styles.module.scss";

type PropsType = {
  children: any;
  component?: "p" | "span" | "h1";
  color?: "primary" | "secondary" | "link" | "quiet" | "loud";
  weight?: "normal" | "black" | "bold";
  size?: "base" | "2xl" | "sm" | "lg" | "xs";
  leading?: "none" | "tight" | "normal" | "snug";
  decoration?: "none" | "underline";
  decorationColor?: "primary" | "link";
  decorationSize?: 4;
  marginBottom?: 5 | 4 | 3;
};

const Text = (props: PropsType) => {
  const {
    children,
    component = "p",
    color = "primary",
    weight = "normal",
    size = "base",
    leading = "none",
    decoration = "none",
    decorationColor = null,
    decorationSize = null,
    marginBottom = null,
  } = props;

  return createElement(
    component,
    {
      className: classNames(
        styles[`color--${color}`],
        styles[`weight--${weight}`],
        styles[`size--${size}`],
        styles[`leading--${leading}`],
        styles[`decoration--${decoration}`],
        {
          [styles[`decoration-color--${decorationColor}`]]:
            decorationColor && decoration !== "none",
          [styles[`decoration-size--${decorationSize}`]]:
            decorationSize && decoration !== "none",
          [styles[`margin-bottom--${marginBottom}`]]: marginBottom !== null,
        }
      ),
    },
    children
  );
};

export default Text;
