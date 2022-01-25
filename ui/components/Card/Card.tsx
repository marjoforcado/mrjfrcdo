import Content from "./Content";
import Header from "./Header";

import styles from "./styles.module.scss";

type PropsType = {
  children: any;
};

const Card = (props: PropsType) => {
  const { children } = props;

  return <div className={styles["card"]}>{children}</div>;
};

Card.Header = Header;
Card.Content = Content;

export default Card;
