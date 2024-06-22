"use client";

import { AddButton, DateHeader, IdeaCardBox } from "@/components";
import * as S from "./style";
import { CloudIcon } from "@/assets";

const IdeaLayout = () => {
  return (
    <S.Wrapper>
      <DateHeader />
      <S.Container>
        <S.LayoutHeader>
          <S.Box>
            <S.Date>6월 9일의</S.Date>
            <S.Text>
              <CloudIcon />
              아이디어
            </S.Text>
          </S.Box>
          <AddButton />
        </S.LayoutHeader>
        <S.CardContainer>
          <IdeaCardBox type="기쁨" />
          <IdeaCardBox type="슬픔" />
          <IdeaCardBox type="화남" />
          <IdeaCardBox type="놀람" />
          <IdeaCardBox type="불안" />
          <IdeaCardBox type="기대" />
        </S.CardContainer>
      </S.Container>
    </S.Wrapper>
  );
};

export default IdeaLayout;
