import classNames from "classnames";
import styles from "./styles.module.scss";

type PropsType = {
  children: any;
  variant?: "blockquotes" | "none";
};

const Card = (props: PropsType) => {
  const { children, variant = "none" } = props;

  return (
    <div className={classNames(styles["card"], styles[`card--${variant}`])}>
      <div className={styles["header"]}>
        <h1 className={styles["heading"]}>FFUF Manila Inc.</h1>
        <p className={styles["position"]}>
          Web Developer |{" "}
          <span className={styles["duration"]}>2016 - 2018</span>
        </p>
      </div>
      <div className={styles["content"]}>
        <p className={styles["description"]}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
          iusto harum vel quam ex nemo magni. Sed consequatur facilis facere...
          <a className={styles["read-more"]}>Read more</a>
        </p>
      </div>
    </div>
  );
};

export default Card;
