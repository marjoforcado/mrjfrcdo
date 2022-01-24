import { Container } from "../ui/components";
import { NextPageWithLayout } from "./_app";

import styles from "./styles.module.scss";

const IndexPage: NextPageWithLayout = () => (
  <Container centerHorizontal>
    <div className={styles["section-1"]}>
      <p className={styles["greetings"]}>
        Hi I&apos;m{" "}
        <span className={styles["highlight-red"]}>Marjo Forcado</span> a
        Fullstack Javascript Engineer.
      </p>
      <p className={styles["description"]}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum velit
        eveniet aliquam iure non vitae reprehenderit, delectus voluptatibus
        quisquam illum.
      </p>
      <div>
        <button className={styles["download-btn"]}>Download CV</button>
      </div>
    </div>
  </Container>
);

IndexPage.layout = "profile";

export default IndexPage;
