import { useState } from "react";
import * as S from "./style";
import * as I from "@/assets";

const Emotion = () => {
  const [emotion, setEmotion] = useState<
    "기쁨" | "슬픔" | "화남" | "놀람" | "불안" | "기대"
  >("기쁨");

  return (
    <>
      <S.Title>감정을 선택해 주세요</S.Title>
      <S.EmotionSelectBox>
        <S.EmotionButton
          isSelected={emotion === "기쁨"}
          onClick={() => setEmotion("기쁨")}
        >
          <I.HappyIcon />
          기쁨
        </S.EmotionButton>
        <S.EmotionButton
          isSelected={emotion === "슬픔"}
          onClick={() => setEmotion("슬픔")}
        >
          <I.SadIcon />
          슬픔
        </S.EmotionButton>
        <S.EmotionButton
          isSelected={emotion === "화남"}
          onClick={() => setEmotion("화남")}
        >
          <I.AngryIcon />
          화남
        </S.EmotionButton>
        <S.EmotionButton
          isSelected={emotion === "놀람"}
          onClick={() => setEmotion("놀람")}
        >
          <I.SurpriseIcon />
          놀람
        </S.EmotionButton>
        <S.EmotionButton
          isSelected={emotion === "불안"}
          onClick={() => setEmotion("불안")}
        >
          <I.UnrestIcon />
          불안
        </S.EmotionButton>
        <S.EmotionButton
          isSelected={emotion === "기대"}
          onClick={() => setEmotion("기대")}
        >
          <I.HopeIcon />
          기대
        </S.EmotionButton>
      </S.EmotionSelectBox>
    </>
  );
};

export default Emotion;
