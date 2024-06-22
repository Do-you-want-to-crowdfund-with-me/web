"use client";

import { useState } from "react";
import * as S from "./style";

const DateHeader = () => {
  const [date, setDate] = useState<
    "월" | "화" | "수" | "목" | "금" | "토" | "일"
  >("일");

  return (
    <S.Container>
      <S.DateWrapper>
        <S.DateText>일</S.DateText>
        <S.DateButton isSelected={date === "일"} onClick={() => setDate("일")}>
          9
        </S.DateButton>
      </S.DateWrapper>
      <S.DateWrapper>
        <S.DateText>월</S.DateText>
        <S.DateButton isSelected={date === "월"} onClick={() => setDate("월")}>
          10
        </S.DateButton>
      </S.DateWrapper>
      <S.DateWrapper>
        <S.DateText>화</S.DateText>
        <S.DateButton isSelected={date === "화"} onClick={() => setDate("화")}>
          11
        </S.DateButton>
      </S.DateWrapper>
      <S.DateWrapper>
        <S.DateText>수</S.DateText>
        <S.DateButton isSelected={date === "수"} onClick={() => setDate("수")}>
          12
        </S.DateButton>
      </S.DateWrapper>
      <S.DateWrapper>
        <S.DateText>목</S.DateText>
        <S.DateButton isSelected={date === "목"} onClick={() => setDate("목")}>
          13
        </S.DateButton>
      </S.DateWrapper>
      <S.DateWrapper>
        <S.DateText>금</S.DateText>
        <S.DateButton isSelected={date === "금"} onClick={() => setDate("금")}>
          14
        </S.DateButton>
      </S.DateWrapper>
      <S.DateWrapper>
        <S.DateText>토</S.DateText>
        <S.DateButton isSelected={date === "토"} onClick={() => setDate("토")}>
          15
        </S.DateButton>
      </S.DateWrapper>
    </S.Container>
  );
};

export default DateHeader;
