"use client";

import * as I from "@/assets";
import * as S from "./style";

const OtherIdeaCard = () => {
  return (
    <S.Container>
      <S.CardHeader>
        <S.ProfileBox>
          <S.ProfileImg src="https://image.blip.kr/v1/file/77c182de146fceb14334cb1347d8a0d1" />
          강해린
        </S.ProfileBox>
        <I.MoreIcon />
      </S.CardHeader>
      <S.Img src="https://github.com/themoment-team/GSM-Networking-front/assets/128475660/088f33e8-de1f-467d-9b80-d41de05267c5" />
      <S.CardBottom>
        <S.HeadLine>
          <I.HappyIcon />
          뉴진스 민지와 연애하는 법
        </S.HeadLine>
        <S.Location>
          <I.LocationIcon />
          선린인터넷고등학교
        </S.Location>
        <S.Category>#카테고리 #카테고리</S.Category>
        <S.Text>
          친구) 왜 이런 생각을 하십니까?
          <br />
          나) 예내뇌야뭐 별의별거 다있습니다
        </S.Text>
        <S.UtilBox>
          <S.ButtonWrapper>
            <S.LikeButton>
              <I.HeartIcon />
              587K
            </S.LikeButton>
            <S.CommentButton>
              <I.CommentIcon />
              2,111
            </S.CommentButton>
          </S.ButtonWrapper>
          <S.SaveButton>
            <I.SaveIcon></I.SaveIcon>
          </S.SaveButton>
        </S.UtilBox>
      </S.CardBottom>
    </S.Container>
  );
};

export default OtherIdeaCard;
