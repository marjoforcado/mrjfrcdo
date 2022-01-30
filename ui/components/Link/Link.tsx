import LinkComponent from "next/link";
import Button, { PropsType as ButtonProps } from "../Button";

type PropsType = Omit<ButtonProps, "component" | "children"> & {
  href: string;
  children: any;
};

const Link = (props: PropsType) => {
  const { children, href, ...rest } = props;

  return (
    <LinkComponent href={href} passHref>
      <Button component="a" {...rest}>
        {children}
      </Button>
    </LinkComponent>
  );
};

export default Link;
