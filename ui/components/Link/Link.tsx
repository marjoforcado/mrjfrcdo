import LinkComponent from "next/link";

type PropsType = {
  href: string;
  children: any;
};

const Link = (props: PropsType) => {
  const { href, children } = props;

  return <LinkComponent href={href}>{children}</LinkComponent>;
};

export default Link;
