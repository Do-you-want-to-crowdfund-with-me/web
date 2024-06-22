"use client";

import { FundingHeader, FundingInfo } from "@/components";
import * as S from "./style";
import { Dispatch, SetStateAction } from "react";

interface Props {
  setType: Dispatch<SetStateAction<"감정" | "일정" | "위치">>;
  setIsModal: Dispatch<SetStateAction<boolean>>;
}

const FundingLayout: React.FC<Props> = ({ setType, setIsModal }) => {
  return (
    <S.Container>
      <FundingHeader />
      <FundingInfo setType={setType} setIsModal={setIsModal} />
    </S.Container>
  );
};

export default FundingLayout;
