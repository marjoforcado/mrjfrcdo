import { Navbar } from "../../components";

type PropsType = {
  children: any;
};

const DefaultLayout = (props: PropsType) => {
  const { children } = props;

  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
};

export default DefaultLayout;
