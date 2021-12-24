import classNames from "classnames";
import { createElement } from "react";

import styles from "./styles.module.scss";

type PropsType = {
  children: any;
  component?: "p" | "span";
  font?: "roboto-slab" | "courier-prime";
};

const Text = (props: PropsType) => {
  const { children, component = "p", font = "courier-prime" } = props;

  return createElement(
    component,
    { className: classNames(styles[`font-face--${font}`]) },
    children
  );
};

export default Text;
