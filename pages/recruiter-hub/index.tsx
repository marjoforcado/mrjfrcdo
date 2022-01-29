import { Button, Container, Input, Link, Text } from "../../ui/components";

import styles from "./styles.module.scss";

const IndexPage = () => (
  <Container>
    <div className={styles["container"]}>
      <div>
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
        <Button variant="solid" rounded="md">
          Generate
        </Button>
        <Link href="/" color="link" variant="text">
          Go Back
        </Link>
      </div>
    </div>
  </Container>
);

export default IndexPage;
