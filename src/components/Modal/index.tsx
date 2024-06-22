import { Dispatch, SetStateAction, forwardRef } from "react";
import Date from "./Date";
import Emotion from "./Emotion";
import Location from "./Location";
import * as S from "./style";

interface Props {
  type: "감정" | "일정" | "위치";
  setIsModal: Dispatch<SetStateAction<boolean>>;
}

const Modal = forwardRef<HTMLDialogElement, Props>(({ type, setIsModal }) => {
  return (
    <S.Wrapper>
      <S.Container>
        {type === "감정" && <Emotion />}
        {type === "일정" && <Date />}
        {type === "위치" && <Location />}
        <form method="dialog">
          <S.Button
            onClick={() => {
              setIsModal(false);
            }}
          >
            확인
          </S.Button>
        </form>
      </S.Container>
    </S.Wrapper>
  );
});

export default Modal;
