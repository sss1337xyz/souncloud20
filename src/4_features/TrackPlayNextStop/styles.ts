import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
    `

export const WrapperTrackControl = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 16px;
`;

export const LeftControl = styled.div`
  display: flex;
  padding: 8px 8px 8px;
  align-items: end;
  gap: 24px;
    `

export const RightControl = styled.div`
  display: flex;
  padding: 8px;
  align-items: start;
  gap: 24px;
    `

export const ButtonPlay = styled.div`
  display: flex;
  width: 32px;
  height: 32px;
  padding: 8px;
  justify-content: center;
  align-items: center;

  border-radius: 32px;
  background:  ${({ theme }) => theme.white};
  
    `;