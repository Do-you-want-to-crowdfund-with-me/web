import { SearchIcon } from "@/assets";
import * as S from "./style";

const Location = () => {
  return (
    <>
      <S.Title>위치를 추가해 주세요</S.Title>
      <S.Wrapper>
        <S.Text>위치</S.Text>
        <S.Input />
        <SearchIcon />
      </S.Wrapper>
    </>
  );
};

export default Location;
