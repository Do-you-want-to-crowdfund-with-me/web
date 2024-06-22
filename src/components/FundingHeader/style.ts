import styled from "@emotion/styled";

export const Container = styled.header`
  width: 100%;
  height: 5rem;
  padding: 0.75rem 1.5rem;
  display: flex;
  justify-content: space-between;
`;

export const ButtonBox = styled.div`
  display: flex;
  gap: 0.75rem;
  align-items: center;
`;

export const FundingButton = styled.button`
  font-size: var(--Size-Body, 1rem);
  font-style: normal;
  font-weight: 500;
  line-height: var(--Line-Height-Body, 1.5rem); /* 150% */
  letter-spacing: -0.02rem;
  background-color: #057fff1a;
  color: #057fff;
  padding: 1rem 1.25rem;
  border-radius: 0.75rem;
`;

export const CompleteButton = styled(FundingButton)`
  background-color: #057fff;
  color: #ffffff;
`;

export const HeadLineBox = styled(ButtonBox)``;

export const HeadLineText = styled.h1`
  font-size: var(--Size-Title, 1.5rem);
  font-style: normal;
  font-weight: 700;
  line-height: var(--Line-Height-Title, 2rem); /* 133.333% */
  letter-spacing: -0.03rem;
  color: rgba(41, 42, 46, 0.7);
  opacity: 0.7;
  border: 0;
  outline: none;
`;

export const Img = styled.img`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  object-fit: cover;
`;
