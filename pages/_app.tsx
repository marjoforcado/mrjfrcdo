import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { NextPage } from "next";
import { DefaultLayout } from "../ui/layouts";

export type NextPageWithLayout = NextPage & {
  layout?: "default";
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const { layout } = Component;

  switch (layout) {
    case "default": {
      return (
        <DefaultLayout>
          <Component {...pageProps} />
        </DefaultLayout>
      );
    }
    default: {
      return <Component {...pageProps} />;
    }
  }
}

export default MyApp;
