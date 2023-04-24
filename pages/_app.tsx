import { Global } from "@emotion/react";
import { globalStyles } from "../src/commons/styles/globalStyles";
import type { AppProps } from "next/app";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <RecoilRoot>
        <Global styles={globalStyles} />

        <Component {...pageProps} />
      </RecoilRoot>
    </>
  );
}
