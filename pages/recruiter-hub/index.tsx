import { Container } from "../../ui/components";
import { NextPageWithLayout } from "../_app";

import styles from "./styles.module.scss";

const IndexPage: NextPageWithLayout = () => (
  <Container>
    <div>Recruiter Hub</div>
  </Container>
);

IndexPage.layout = "profile";

export default IndexPage;
