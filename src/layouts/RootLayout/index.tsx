"use client";

import { SideBar, Header } from "@/components";
import * as S from "./style";

interface Props {
  children: React.ReactNode;
}

const RootLayout: React.FC<Props> = ({ children }) => {
  return (
    <S.Container>
      <SideBar />
      <S.RightSection>
        <Header />
        {children}
      </S.RightSection>
    </S.Container>
  );
};

export default RootLayout;
