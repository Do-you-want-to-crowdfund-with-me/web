import styled from "@emotion/styled";

export const Container = styled.div`
  width: 34.5625rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  cursor: pointer;
`;

export const Img = styled.img`
  border-radius: 0.5rem;
  height: 11.25rem;
  width: 100%;
  object-fit: cover;
`;

export const InfoBox = styled.div`
  padding: 0.25rem;
  width: 100%;
  height: 5.125rem;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

export const HeadLine = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  font-size: var(--Size-Body, 1rem);
  font-style: normal;
  font-weight: 700;
  line-height: var(--Line-Height-Body, 1.5rem); /* 150% */
  letter-spacing: -0.02rem;
  color: rgba(41, 42, 46, 1);
`;

export const Rate = styled.div`
  border-radius: 0.38rem;
  padding: 0.125rem 0.375rem;

  font-family: var(--Family, "Wanted Sans Variable");
  font-size: var(--Size-Footnote, 0.75rem);
  font-style: normal;
  font-weight: 500;
  line-height: var(--Line-Height-Footnote, 1.25rem); /* 166.667% */
  letter-spacing: -0.015rem;
  color: rgba(84, 114, 235, 1);
  background-color: rgba(84, 114, 235, 0.1);
`;

export const Name = styled.h1`
  font-size: var(--Size-Label, 0.875rem);
  font-style: normal;
  font-weight: 500;
  line-height: var(--Line-Height-Label, 1.375rem); /* 157.143% */
  letter-spacing: -0.0175rem;
  color: rgba(41, 42, 46, 0.7);
`;

export const Category = styled.h1`
  font-size: var(--Size-Footnote, 0.75rem);
  font-style: normal;
  font-weight: 500;
  line-height: var(--Line-Height-Footnote, 1.25rem); /* 166.667% */
  letter-spacing: -0.015rem;
  color: rgba(41, 42, 46, 0.5);
`;
