import { Button, Container, Input, Link, Text } from "../../ui/components";

import styles from "./styles.module.scss";

const IndexPage = () => (
  <Container>
    <div className={styles["magic-form__flex"]}>
      <div className={styles["magic-form__content"]}>
        <Text
          size="xs"
          weight="black"
          color="loud"
          marginBottom={3}
          align="center"
        >
          Enter Magic String
        </Text>
        <Input />
        <Text align="center" size="sm" leading="snug">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet,
          laudantium!
        </Text>
        <div className={styles["magic-form__footer"]}>
          <Button variant="solid" rounded="md">
            Generate Code
          </Button>
          <Link href="/" color="link" variant="text">
            Go Back
          </Link>
        </div>
      </div>
    </div>
  </Container>
);

export default IndexPage;
