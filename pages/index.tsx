import {
  Button,
  Container,
  ExperienceCard,
  Link,
  Modal,
  SkillRating,
  Text,
} from "../ui/components";
import classNames from "classnames";
import { useState } from "react";

import styles from "./styles.module.scss";

const Actions = ({
  setShowModal,
}: {
  setShowModal: (showModal: boolean) => void;
}) => (
  <div className={styles["actions__container"]}>
    <Button rounded="full" variant="solid" onClick={() => setShowModal(true)}>
      Download CV
    </Button>
    <Link
      href="https://www.linkedin.com/in/marjoforcado"
      variant="text"
      size="small"
    >
      <svg
        className={styles["actions__icon"]}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20.4701 1.99999H3.53006C3.33964 1.99734 3.15056 2.03223 2.97362 2.10267C2.79669 2.17311 2.63536 2.27771 2.49886 2.4105C2.36235 2.54329 2.25334 2.70167 2.17805 2.8766C2.10276 3.05152 2.06267 3.23957 2.06006 3.42999V20.57C2.06267 20.7604 2.10276 20.9485 2.17805 21.1234C2.25334 21.2983 2.36235 21.4567 2.49886 21.5895C2.63536 21.7223 2.79669 21.8269 2.97362 21.8973C3.15056 21.9677 3.33964 22.0026 3.53006 22H20.4701C20.6605 22.0026 20.8496 21.9677 21.0265 21.8973C21.2034 21.8269 21.3648 21.7223 21.5013 21.5895C21.6378 21.4567 21.7468 21.2983 21.8221 21.1234C21.8974 20.9485 21.9375 20.7604 21.9401 20.57V3.42999C21.9375 3.23957 21.8974 3.05152 21.8221 2.8766C21.7468 2.70167 21.6378 2.54329 21.5013 2.4105C21.3648 2.27771 21.2034 2.17311 21.0265 2.10267C20.8496 2.03223 20.6605 1.99734 20.4701 1.99999V1.99999ZM8.09006 18.74H5.09006V9.73999H8.09006V18.74ZM6.59006 8.47999C6.17632 8.47999 5.77953 8.31563 5.48697 8.02307C5.19442 7.73052 5.03006 7.33372 5.03006 6.91999C5.03006 6.50625 5.19442 6.10946 5.48697 5.8169C5.77953 5.52434 6.17632 5.35999 6.59006 5.35999C6.80975 5.33507 7.03223 5.35684 7.24293 5.42387C7.45363 5.4909 7.6478 5.60168 7.81272 5.74895C7.97763 5.89622 8.10958 6.07667 8.19993 6.27847C8.29027 6.48027 8.33698 6.69888 8.33698 6.91999C8.33698 7.14109 8.29027 7.3597 8.19993 7.5615C8.10958 7.76331 7.97763 7.94375 7.81272 8.09103C7.6478 8.2383 7.45363 8.34907 7.24293 8.4161C7.03223 8.48313 6.80975 8.5049 6.59006 8.47999V8.47999ZM18.9101 18.74H15.9101V13.91C15.9101 12.7 15.4801 11.91 14.3901 11.91C14.0527 11.9125 13.7242 12.0183 13.4489 12.2132C13.1735 12.4081 12.9645 12.6827 12.8501 13C12.7718 13.235 12.7379 13.4826 12.7501 13.73V18.73H9.75006C9.75006 18.73 9.75006 10.55 9.75006 9.72999H12.7501V11C13.0226 10.5271 13.419 10.1375 13.8965 9.87319C14.374 9.60887 14.9146 9.47984 15.4601 9.49999C17.4601 9.49999 18.9101 10.79 18.9101 13.56V18.74Z"
          fill="currentColor"
        />
      </svg>
    </Link>
    <Link href="https://github.com/marjoforcado" variant="text" size="small">
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={styles["actions__icon"]}
      >
        <path
          d="M12 2.2467C9.6255 2.2468 7.32849 3.09182 5.51999 4.63055C3.71149 6.16929 2.50953 8.30133 2.12916 10.6452C1.74879 12.989 2.21485 15.3918 3.44393 17.4235C4.67301 19.4551 6.58491 20.9832 8.83755 21.7342C9.33755 21.8217 9.52505 21.5217 9.52505 21.2592C9.52505 21.0217 9.51254 20.2342 9.51254 19.3967C7.00003 19.8592 6.35003 18.7842 6.15003 18.2217C5.9281 17.6747 5.5763 17.1899 5.12503 16.8092C4.77503 16.6217 4.27503 16.1592 5.11252 16.1467C5.4323 16.1814 5.73901 16.2927 6.00666 16.4711C6.2743 16.6495 6.49499 16.8899 6.65003 17.1717C6.7868 17.4174 6.97071 17.6337 7.19122 17.8082C7.41173 17.9827 7.6645 18.112 7.93506 18.1886C8.20562 18.2652 8.48864 18.2877 8.76791 18.2548C9.04717 18.2219 9.3172 18.1342 9.56251 17.9967C9.6058 17.4883 9.83237 17.013 10.2 16.6592C7.97503 16.4092 5.65003 15.5467 5.65003 11.7217C5.63597 10.7279 6.00271 9.76631 6.67503 9.03423C6.36931 8.17045 6.40508 7.22252 6.77503 6.38423C6.77503 6.38423 7.6125 6.12172 9.52503 7.40923C11.1613 6.95921 12.8887 6.95921 14.525 7.40923C16.4375 6.10923 17.275 6.38423 17.275 6.38423C17.645 7.22251 17.6808 8.17046 17.375 9.03423C18.0494 9.76506 18.4164 10.7275 18.4 11.7217C18.4 15.5592 16.0625 16.4092 13.8375 16.6592C14.0762 16.9011 14.26 17.1915 14.3764 17.5107C14.4929 17.83 14.5393 18.1705 14.5125 18.5092C14.5125 19.8468 14.5 20.9217 14.5 21.2592C14.5 21.5217 14.6875 21.8342 15.1875 21.7342C17.4362 20.9771 19.3426 19.4455 20.5664 17.4128C21.7903 15.38 22.2519 12.9785 21.8689 10.6369C21.4859 8.29535 20.2832 6.16608 18.4755 4.62922C16.6678 3.09235 14.3727 2.24794 12 2.2467Z"
          fill="currentColor"
        />
      </svg>
    </Link>
    <Link href="mailto:marjoforcado@gmail.com" variant="text" size="small">
      <svg
        className={styles["actions__icon"]}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M19 4H5C4.20435 4 3.44129 4.31607 2.87868 4.87868C2.31607 5.44129 2 6.20435 2 7V17C2 17.7956 2.31607 18.5587 2.87868 19.1213C3.44129 19.6839 4.20435 20 5 20H19C19.7956 20 20.5587 19.6839 21.1213 19.1213C21.6839 18.5587 22 17.7956 22 17V7C22 6.20435 21.6839 5.44129 21.1213 4.87868C20.5587 4.31607 19.7956 4 19 4ZM18.59 6L12.71 11.88C12.617 11.9737 12.5064 12.0481 12.3846 12.0989C12.2627 12.1497 12.132 12.1758 12 12.1758C11.868 12.1758 11.7373 12.1497 11.6154 12.0989C11.4936 12.0481 11.383 11.9737 11.29 11.88L5.41 6H18.59ZM20 17C20 17.2652 19.8946 17.5196 19.7071 17.7071C19.5196 17.8946 19.2652 18 19 18H5C4.73478 18 4.48043 17.8946 4.29289 17.7071C4.10536 17.5196 4 17.2652 4 17V7.41L9.88 13.29C10.4425 13.8518 11.205 14.1674 12 14.1674C12.795 14.1674 13.5575 13.8518 14.12 13.29L20 7.41V17Z"
          fill="currentColor"
        />
      </svg>
    </Link>
    <Link href="/" variant="text" size="small">
      <svg
        className={styles["actions__icon"]}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.9943 2C10.0165 2 8.08306 2.58649 6.43856 3.6853C4.79407 4.78412 3.51235 6.3459 2.75547 8.17317C1.9986 10.0004 1.80056 12.0111 2.18641 13.9509C2.57227 15.8907 3.52467 17.6725 4.9232 19.0711C6.32172 20.4696 8.10355 21.422 10.0434 21.8079C11.9832 22.1937 13.9938 21.9957 15.8211 21.2388C17.6484 20.4819 19.2101 19.2002 20.309 17.5557C21.4078 15.9112 21.9943 13.9778 21.9943 12C21.9944 10.6868 21.7358 9.38634 21.2333 8.17304C20.7308 6.95973 19.9942 5.8573 19.0656 4.92869C18.137 4.00008 17.0345 3.26349 15.8212 2.76098C14.6079 2.25847 13.3075 1.99989 11.9943 2ZM15.1738 17.1525C15.1363 17.2458 15.0794 17.33 15.0067 17.3996C14.9341 17.4691 14.8474 17.5223 14.7525 17.5556C14.6576 17.5889 14.5567 17.6015 14.4566 17.5926C14.3564 17.5837 14.2593 17.5535 14.1718 17.504L11.4571 15.3946L9.71479 17.002C9.67436 17.0319 9.62707 17.0511 9.57726 17.0579C9.52746 17.0647 9.47675 17.0589 9.42979 17.0409L9.76379 14.0525L9.77448 14.061L9.78131 14.002C9.78131 14.002 14.6663 9.55445 14.8653 9.36496C15.0668 9.17596 15.0003 9.13496 15.0003 9.13496C15.0118 8.90443 14.6388 9.13496 14.6388 9.13496L8.16627 13.299L5.47078 12.381C5.47078 12.381 5.05678 12.2325 5.01778 11.906C4.97678 11.582 5.48427 11.406 5.48427 11.406L16.2013 7.14849C16.2013 7.14849 17.0823 6.75597 17.0823 7.406L15.1738 17.1525Z"
          fill="currentColor"
        />
      </svg>
    </Link>
  </div>
);

const Introduction = ({
  setShowModal,
}: {
  setShowModal: (showModal: boolean) => void;
}) => (
  <Container centerHorizontal>
    <div className={classNames(styles["section"], styles["section--gap-3"])}>
      <Text color="loud" weight="black" size="2xl" leading="tight">
        Hi, I&apos;m{" "}
        <Text
          component="span"
          color="primary"
          decoration="underline"
          decorationColor="primary"
          decorationSize={4}
          size="2xl"
          weight="black"
        >
          Marjo Forcado
        </Text>{" "}
        a Fullstack Javascript Engineer.{" "}
        <span className={styles["introduction__blinker"]}>|</span>
      </Text>
      <Text size="sm" color="quiet" leading="normal">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum velit
        eveniet aliquam iure non vitae reprehenderit, delectus voluptatibus
        quisquam illum.
      </Text>
      <Actions setShowModal={setShowModal} />
    </div>
  </Container>
);

const Experience = () => (
  <Container centerHorizontal>
    <Text component="h1" color="loud" weight="bold" size="2xl" marginBottom={4}>
      Experience
    </Text>
    <div className={classNames(styles["section"], styles["section--gap-5"])}>
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
);

const RatingGrid = ({ title, children }: { title: string; children: any }) => (
  <div className={styles["rating-grid__wrapper"]}>
    <Text component="h1" color="loud" weight="bold" size="2xl">
      {title}
    </Text>
    <div className={styles["rating-grid__grid"]}>{children}</div>
  </div>
);

const Skills = () => (
  <Container centerHorizontal>
    <div className={styles["skills__wrapper"]}>
      <RatingGrid title="Skills">
        <SkillRating title="HTML" rating={5} />
        <SkillRating title="CSS" rating={5} />
        <SkillRating title="Javascript" rating={3} />
        <SkillRating title="Database" rating={3} />
        <SkillRating title="Docker" rating={3} />
        <SkillRating title="AWS" rating={3} />
      </RatingGrid>
      <RatingGrid title="Libraries">
        <SkillRating title="React" rating={5} />
        <SkillRating title="NextJs" rating={5} />
        <SkillRating title="NodeJs" rating={5} />
        <SkillRating title="NestJs" rating={3} />
        <SkillRating title="Prisma" rating={3} />
        <SkillRating title="GraphQL" rating={3} />
        <SkillRating title="React Native" rating={3} />
        <SkillRating title="Tailwind" rating={5} />
      </RatingGrid>
    </div>
  </Container>
);

const RecruiterHub = () => (
  <Container centerHorizontal>
    <div className={styles["recruiter__flex"]}>
      <Text
        align="center"
        size="sm"
        weight="semibold"
        leading="snug"
        color="loud"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, enim.
        Quibusdam architecto quisquam, numquam non dolor nulla quidem corrupti
        vel.
      </Text>
      <Link
        href="/recruiter-hub"
        variant="solid"
        color="link"
        size="large"
        rounded="full"
      >
        Recruiter Hub
      </Link>
    </div>
  </Container>
);

const IndexPage = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Introduction setShowModal={setShowModal} />
      <Experience />
      <Skills />
      <RecruiterHub />
      <Modal isToggled={showModal} onClose={() => setShowModal(false)} />
    </>
  );
};

export default IndexPage;
