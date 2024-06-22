"use client";

import { useRouter } from "next/navigation";
import * as S from "./style";

const FundingHeader = () => {
  const { push } = useRouter();

  return (
    <S.Container>
      <S.HeadLineBox>
        <S.Img src="https://image.blip.kr/v1/file/77c182de146fceb14334cb1347d8a0d1" />
        <S.HeadLineText>헤드라인</S.HeadLineText>
      </S.HeadLineBox>
      <S.ButtonBox>
        <S.FundingButton onClick={() => push("/my/funding")}>
          펀딩하기
        </S.FundingButton>
        <S.CompleteButton onClick={() => push("/my/idea")}>
          완료
        </S.CompleteButton>
      </S.ButtonBox>
    </S.Container>
  );
};

export default FundingHeader;
