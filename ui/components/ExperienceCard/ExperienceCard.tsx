import { Card, Text } from "..";

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
        <Text component="h1" size="lg" weight="black" color="primary">
          {title}
        </Text>
        <Text size="sm" weight="bold" color="loud">
          {position} |{" "}
          <Text component="span" size="xs" weight="bold" color="loud">
            {duration}
          </Text>
        </Text>
      </Card.Header>
      <Card.Content>
        <Text size="sm" color="quiet" leading="snug">
          {description}...
          <a className={styles["read-more"]}>Read more</a>
        </Text>
      </Card.Content>
    </Card>
  );
};

export default ExperienceCard;
