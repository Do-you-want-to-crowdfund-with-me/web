import styled from "@emotion/styled";

export const Container = styled.div`
  width: 70.125rem;
  display: flex;
  flex-direction: column;
  border-radius: 0.5rem;
  border: 0.0625rem solid rgba(121, 124, 138, 0.12);
`;

export const CardHeader = styled.div`
  width: 100%;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
`;

export const Img = styled.img`
  object-fit: cover;

  width: 100%;
  height: 11.25rem;
`;

export const CardBottom = styled.div`
  padding: 1rem;
  width: 100%;
  height: 12.875rem;
`;

export const ProfileBox = styled.div`
  display: flex;
  gap: 0.75rem;

  font-size: var(--Size-Label, 0.875rem);
  font-style: normal;
  font-weight: 500;
  line-height: var(--Line-Height-Label, 1.375rem); /* 157.143% */
  letter-spacing: -0.0175rem;
  color: rgba(41, 42, 46, 1);
`;

export const ProfileImg = styled.img`
  border-radius: 50%;
  width: 1.5rem;
  height: 1.5rem;
  object-fit: cover;
`;

export const HeadLine = styled.h1`
  display: flex;
  gap: 0.375rem;

  font-size: var(--Size-Body, 1rem);
  font-style: normal;
  font-weight: 700;
  line-height: var(--Line-Height-Body, 1.5rem); /* 150% */
  letter-spacing: -0.02rem;
  color: rgba(41, 42, 46, 1);
`;

export const Location = styled.h2`
  display: flex;
  gap: 0.25rem;
  font-size: var(--Size-Label, 0.875rem);
  font-style: normal;
  font-weight: 500;
  line-height: var(--Line-Height-Label, 1.375rem); /* 157.143% */
  letter-spacing: -0.0175rem;
  color: rgba(41, 42, 46, 0.7);
  margin: 0.25rem 0;
`;

export const Category = styled.h3`
  font-size: var(--Size-Footnote, 0.75rem);
  font-style: normal;
  font-weight: 500;
  line-height: var(--Line-Height-Footnote, 1.25rem); /* 166.667% */
  letter-spacing: -0.015rem;
  color: rgba(41, 42, 46, 0.5);
`;

export const Text = styled.p`
  font-size: var(--Size-Label, 0.875rem);
  font-style: normal;
  font-weight: 500;
  line-height: var(--Line-Height-Label, 1.375rem); /* 157.143% */
  letter-spacing: -0.0175rem;
  color: rgba(41, 42, 46, 1);
  margin: 1rem 0;
`;

export const UtilBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const LikeButton = styled.button`
  height: 1.5rem;
  display: flex;
  gap: 0.375rem;
  align-items: center;

  font-size: var(--Size-Label, 0.875rem);
  font-style: normal;
  font-weight: 700;
  line-height: var(--Line-Height-Label, 1.375rem); /* 157.143% */
  letter-spacing: -0.0175rem;
  color: rgba(255, 64, 53, 1);
`;

export const CommentButton = styled.button`
  height: 24px;
  gap: 0.375rem;
  display: flex;
  align-items: center;

  font-size: var(--Size-Label, 0.875rem);
  font-style: normal;
  font-weight: 500;
  line-height: var(--Line-Height-Label, 1.375rem); /* 157.143% */
  letter-spacing: -0.0175rem;
  color: rgba(41, 42, 46, 0.7);
`;

export const SaveButton = styled.button`
  height: 24px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;
