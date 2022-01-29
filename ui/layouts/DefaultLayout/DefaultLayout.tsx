import { Footer, Navbar } from "../../components";

import styles from "./styles.module.scss";

type PropsType = {
  children: any;
};

const DefaultLayout = (props: PropsType) => {
  const { children } = props;

  return (
    <>
      <Navbar />
      <div className={styles["container"]}>
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default DefaultLayout;
