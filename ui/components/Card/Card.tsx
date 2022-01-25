import styles from "./styles.module.scss";

const Card = () => (
  <div className={styles["card"]}>
    <h1 className={styles["heading"]}>FFUF Manila Inc.</h1>
    <p className={styles["position"]}>
      Web Developer | <span className={styles["duration"]}>2016 - 2018</span>
    </p>
    <p className={styles["description"]}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis iusto
      harum vel quam ex nemo magni. Sed consequatur facilis facere...
      <a className={styles["read-more"]}>Read more</a>
    </p>
  </div>
);

export default Card;
