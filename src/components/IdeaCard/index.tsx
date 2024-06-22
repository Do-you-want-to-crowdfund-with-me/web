"use client";

import { useRouter } from "next/navigation";
import * as S from "./style";

interface Props {
  title: string;
  hashTag: string;
}

const IdeaCard: React.FC<Props> = ({ title, hashTag }) => {
  const { push } = useRouter();

  return (
    <S.Card onClick={() => push("/")}>
      <S.CardImg src="https://images.augustman.com/wp-content/uploads/sites/6/2023/09/27121841/Untitled-2023-09-27T112707.003.png" />
      <S.RightSection>
        <S.CardTitle>{title}</S.CardTitle>
        <S.CardHashTag>{hashTag}</S.CardHashTag>
      </S.RightSection>
    </S.Card>
  );
};

export default IdeaCard;
