import { Button, Container, Text } from "../ui/components";
import { NextPageWithLayout } from "./_app";

import styles from "./styles.module.scss";
import Image from "next/image";

const IndexPage: NextPageWithLayout = () => (
  <div className={styles["section-1"]}>
    <Container>
      <div className={styles["description"]}>
        <Image
          src="/assets/images/image-1.jpg"
          alt="profile"
          width={150}
          height={150}
          className={styles["profile-pic"]}
        />
        <Text>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae iusto
          excepturi voluptatem eos magnam. Ex pariatur officia nobis quod qui
          dicta, aperiam amet placeat, corporis vero vel, possimus atque
          praesentium.
        </Text>
        <div>
          <Button
            clipRight={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            }
          >
            Download CV{" "}
          </Button>
        </div>
      </div>
    </Container>
  </div>
);

IndexPage.layout = "profile";

export default IndexPage;
