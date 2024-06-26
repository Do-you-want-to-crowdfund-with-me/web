"use client";

import { Global, css } from "@emotion/react";

import emotionReset from "emotion-reset";

export function GlobalStyle() {
  return (
    <Global
      styles={css`
        ${emotionReset}

        @import url('https://fastly.jsdelivr.net/gh/wanteddev/wanted-sans@v1.0.1/packages/wanted-sans/fonts/webfonts/variable/split/WantedSansVariable.min.css');

        body,
        * {
          font-family: "Wanted Sans Variable", "Wanted Sans", -apple-system,
            BlinkMacSystemFont, system-ui, "Segoe UI", "Apple SD Gothic Neo",
            "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji";

          font-weight: 600;
          box-sizing: border-box;
        }

        body {
          background: "#ffffff";
          height: 100vh;
          height: 100dvh;
          width: 100vw;
          overscroll-behavior-y: none;
        }

        a {
          text-decoration: none;
          color: inherit;
        }

        /* 
        html {
          @media (max-width: 599px) {
            font-size: 15px;
          }
          @media (max-width: 530px) {
            font-size: 14px;
          }
          @media (max-width: 490px) {
            font-size: 13px;
          }
          @media (max-width: 460px) {
            font-size: 12px;
          }
          @media (max-width: 420px) {
            font-size: 11px;
          }
          @media (max-width: 390px) {
            font-size: 10px;
          }
          @media (max-width: 350px) {
            font-size: 9px;
          }
          @media (max-width: 320px) {
            font-size: 8px;
          }
        } */

        button {
          padding: 0;
          border: none;
          outline: none;
          background: inherit;
          cursor: pointer;
        }
      `}
    />
  );
}

export default GlobalStyle;
