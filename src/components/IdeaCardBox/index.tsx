"use client";

import { HappyIcon } from "@/assets";
import * as S from "./style";
import { IdeaCard } from "@/components";

interface Props {
  type: "기쁨" | "슬픔" | "화남" | "놀람" | "불안" | "기대";
}

const IdeaCardBox: React.FC<Props> = ({ type }) => {
  return (
    <S.Container>
      <S.Title>
        <HappyIcon /> {type}
      </S.Title>
      <S.ListBox>
        <IdeaCard
          title="사용자 경험을 위한 아이디어는 무엇일까?"
          hashTag="#카테고리"
        />
        <IdeaCard
          title="사용자 경험을 위한 아이디어는 무엇일까?"
          hashTag="#카테고리"
        />
        <IdeaCard
          title="사용자 경험을 위한 아이디어는 무엇일까?"
          hashTag="#카테고리"
        />
      </S.ListBox>
    </S.Container>
  );
};

export default IdeaCardBox;
