import { Navbar } from "../../components";

import styles from "./styles.module.scss";

type PropsType = {
  children: any;
};

const ProfileLayout = (props: PropsType) => {
  const { children } = props;

  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
};

export default ProfileLayout;
