"use client";

import { useRouter } from "next/navigation";
import * as S from "./style";
import * as I from "@/assets";

const SideBar = () => {
  const { push } = useRouter();

  return (
    <S.Container>
      <S.MyProfile>
        내 프로필
        <S.SideBarButton>
          <I.BellIcon />
          공지사항
        </S.SideBarButton>
        <S.SideBarButton>
          <I.ProfileIcon />내 프로필
        </S.SideBarButton>
      </S.MyProfile>
      <S.Hr />
      <S.Manage>
        관리
        <S.SideBarButton onClick={() => push("/my/funding")}>
          <I.TagIcon />내 펀딩
        </S.SideBarButton>
        <S.SideBarButton onClick={() => push("/my/idea")}>
          <I.PalletteIcon />내 아이디어
        </S.SideBarButton>
        <S.SideBarButton onClick={() => push("/other/idea")}>
          <I.OtherIdeaIcon />
          다른 아이디어
        </S.SideBarButton>
      </S.Manage>
    </S.Container>
  );
};

export default SideBar;
