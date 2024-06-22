import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 10;
`;

export const Category = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 1.5rem;
  font-size: var(--Size-Body, 1rem);
  font-style: normal;
  font-weight: 500;
  line-height: var(--Line-Height-Body, 1.5rem); /* 150% */
  letter-spacing: -0.02rem;
  color: rgba(41, 42, 46, 0.7);
`;

export const Location = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 1.5rem;
  font-size: var(--Size-Body, 1rem);
  font-style: normal;
  font-weight: 500;
  line-height: var(--Line-Height-Body, 1.5rem); /* 150% */
  letter-spacing: -0.02rem;
  color: rgba(41, 42, 46, 0.7);
`;

export const Emotion = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 1.5rem;
  font-size: var(--Size-Body, 1rem);
  font-style: normal;
  font-weight: 500;
  line-height: var(--Line-Height-Body, 1.5rem); /* 150% */
  letter-spacing: -0.02rem;
  color: rgba(41, 42, 46, 0.7);
`;

export const Schedule = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 1.5rem;
  font-size: var(--Size-Body, 1rem);
  font-style: normal;
  font-weight: 500;
  line-height: var(--Line-Height-Body, 1.5rem); /* 150% */
  letter-spacing: -0.02rem;
  border-bottom: 0.25rem solid #797c8a29;
  color: rgba(41, 42, 46, 0.7);
`;

export const TextArea = styled.textarea`
  font-size: var(--Size-Body, 1rem);
  font-style: normal;
  font-weight: 500;
  line-height: var(--Line-Height-Body, 1.5rem); /* 150% */
  letter-spacing: -0.02rem;
  color: rgba(41, 42, 46, 0.7);
  border: 0;
  outline: none;
  padding: 0.875rem 1.5rem;
  resize: none;
`;
