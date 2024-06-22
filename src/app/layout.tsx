"use client";

import { RootLayout } from "@/layouts";
import { GlobalStyle } from "@/styles";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/wanteddev/wanted-sans@v1.0.3/packages/wanted-sans/fonts/webfonts/static/complete/WantedSans.min.css"
        />
      </head>
      <body>
        <RootLayout>{children}</RootLayout>
        <GlobalStyle />
      </body>
    </html>
  );
}
