import styled from "@emotion/styled";

export const Title = styled.h1`
  font-size: var(--Size-Heading, 1.25rem);
  font-style: normal;
  font-weight: 700;
  line-height: var(--Line-Height-Heading, 1.75rem); /* 140% */
  letter-spacing: -0.025rem;
  color: rgba(41, 42, 46, 1);
`;

export const EmotionSelectBox = styled.div`
  display: flex;
  gap: 0.375rem;
  width: 21.5625rem;
  flex-wrap: wrap;
`;

export const EmotionButton = styled.button<{ isSelected: boolean }>`
  border-radius: 0.5rem;
  width: 10.59375rem;
  height: 3.5rem;
  gap: 0.75rem;
  justify-content: center;
  align-items: center;
  padding: 1rem 1.25rem;
  display: flex;
  border: 0.0625rem solid
    ${({ isSelected }) =>
      isSelected ? "rgba(84, 114, 235, 1)" : "rgba(121, 124, 138, 0.12)"};

  font-size: var(--Size-Body, 1rem);
  font-style: normal;
  font-weight: 500;
  line-height: var(--Line-Height-Body, 1.5rem); /* 150% */
  letter-spacing: -0.02rem;
  color: rgba(41, 42, 46, 1);
`;
