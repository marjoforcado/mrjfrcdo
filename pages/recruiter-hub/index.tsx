import { Container, Input, Text } from "../../ui/components";

import styles from "./styles.module.scss";

const IndexPage = () => (
  <Container>
    <Text size="xs" weight="black" color="link" marginBottom={3} align="center">
      Enter Magic String
    </Text>
    <Input />
  </Container>
);

export default IndexPage;
