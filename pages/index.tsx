import { Container, ExperienceCard } from "../ui/components";
import { NextPageWithLayout } from "./_app";

import styles from "./styles.module.scss";

const IndexPage: NextPageWithLayout = () => (
  <>
    <Container centerHorizontal>
      <div className={styles["section-1"]}>
        <p className={styles["greetings"]}>
          Hi, I&apos;m{" "}
          <span className={styles["highlight-red"]}>Marjo Forcado</span> a
          Fullstack Javascript Engineer.{" "}
          <span className={styles["blinker"]}>|</span>
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
    <Container centerHorizontal>
      <div className={styles["section-2"]}>
        <ExperienceCard
          title="FFUF Manila Inc."
          position="Web Developer"
          duration="2016 - 2018"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
          iusto harum vel quam ex nemo magni. Sed consequatur facilis facere"
        />
        <ExperienceCard
          title="FFUF Manila Inc."
          position="Web Developer"
          duration="2016 - 2018"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
          iusto harum vel quam ex nemo magni. Sed consequatur facilis facere"
        />
        <ExperienceCard
          title="FFUF Manila Inc."
          position="Web Developer"
          duration="2016 - 2018"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
          iusto harum vel quam ex nemo magni. Sed consequatur facilis facere"
        />
        <ExperienceCard
          title="FFUF Manila Inc."
          position="Web Developer"
          duration="2016 - 2018"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
          iusto harum vel quam ex nemo magni. Sed consequatur facilis facere"
        />
      </div>
    </Container>
  </>
);

IndexPage.layout = "profile";

export default IndexPage;
