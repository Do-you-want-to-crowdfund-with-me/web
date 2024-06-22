"use client";

import { useRouter } from "next/navigation";
import * as S from "./style";

const MyFundingCard = () => {
  const { push } = useRouter();

  return (
    <S.Container onClick={() => push("/")}>
      <S.Img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5I4Lagk873BcYi-HY2fubcH37gffYHZYUgQ&s" />
      <S.InfoBox>
        <S.HeadLine>
          사용자 경험을 고려한 디자인 아이디어
          <S.Rate>70% 달성</S.Rate>
        </S.HeadLine>
        <S.Name>이주영</S.Name>
        <S.Category>#카테고리</S.Category>
      </S.InfoBox>
    </S.Container>
  );
};

export default MyFundingCard;
