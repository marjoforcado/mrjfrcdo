import { Text } from "..";
import styles from "./styles.module.scss";

type PropsType = {
  title: string;
  rating: 1 | 2 | 3 | 4 | 5;
};

const SkillRating = (props: PropsType) => {
  const { title, rating } = props;

  return (
    <div className={styles["wrapper"]}>
      <Text size="lg" color="loud" weight="bold">
        {title}
      </Text>
      <div className={styles["rating-flex"]}>
        {[1, 2, 3, 4, 5].map((index) => {
          if (index <= rating) {
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={styles["rating"]}
                fill="currentColor"
                viewBox="0 0 24 24"
                stroke="currentColor"
                key={`rating-${index}`}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                />
              </svg>
            );
          }

          return (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={styles["rating"]}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              key={`rating-${index}`}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
              />
            </svg>
          );
        })}
      </div>
    </div>
  );
};

export default SkillRating;
