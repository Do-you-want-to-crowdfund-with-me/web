import styled from "@emotion/styled";

export const Title = styled.h1`
  font-size: var(--Size-Heading, 1.25rem);
  font-style: normal;
  font-weight: 700;
  line-height: var(--Line-Height-Heading, 1.75rem); /* 140% */
  letter-spacing: -0.025rem;
  color: rgba(41, 42, 46, 1);
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  width: 21.5625rem;
  position: relative;

  & > svg {
    position: absolute;
    bottom: 0.75rem;
    left: 1rem;
  }
`;

export const Input = styled.input`
  padding: 0.75rem 1rem 0.75rem 3rem;
  font-size: var(--Size-Body, 1rem);
  font-style: normal;
  font-weight: 500;
  line-height: var(--Line-Height-Body, 1.5rem); /* 150% */
  letter-spacing: -0.02rem;
  color: rgba(41, 42, 46, 0.5);
  outline: none;
  background-color: rgba(121, 124, 138, 0.08);
  border-radius: 0.5rem;
  border: 0.0625rem solid rgba(121, 124, 138, 0.12);
`;

export const Text = styled.h1`
  padding: 0.5rem 0.75rem;
  font-size: var(--Size-Label, 0.875rem);
  font-style: normal;
  font-weight: 500;
  line-height: var(--Line-Height-Label, 1.375rem); /* 157.143% */
  letter-spacing: -0.0175rem;
  color: rgba(41, 42, 46, 0.7);
`;
