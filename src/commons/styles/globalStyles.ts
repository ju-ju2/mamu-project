import { css } from "@emotion/react";

export const globalStyles = css`
  * {
    margin: 0;
    box-sizing: border-box;
    font-size: 16px;
    font-family: globalFont;
    /* color: #222222; */
  }
  body {
    overflow-x: hidden;
    overflow-y: auto;
  }

  @font-face {
    font-family: "mainTitle";
    src: url("/fonts/AlfaSlabOne.ttf");
  }
  @font-face {
    font-family: "globalFont";
    src: url("/fonts/NotoSansKR-Medium.otf");
  }
`;
