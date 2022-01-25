import { Card } from "..";

import styles from "./styles.module.scss";

type PropsType = {
  title: string;
  position: string;
  duration: string;
  description: string;
};

const ExperienceCard = (props: PropsType) => {
  const { title, position, duration, description } = props;

  return (
    <Card>
      <Card.Header>
        <h1 className={styles["title"]}>{title}</h1>
        <p className={styles["position"]}>
          {position} |<span className={styles["duration"]}>{duration}</span>
        </p>
      </Card.Header>
      <Card.Content>
        <p className={styles["description"]}>
          {description}...
          <a className={styles["read-more"]}>Read more</a>
        </p>
      </Card.Content>
    </Card>
  );
};

export default ExperienceCard;
