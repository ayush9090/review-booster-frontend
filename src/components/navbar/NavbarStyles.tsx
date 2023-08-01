import styled from "styled-components";

export const NavContainer = styled.div`
  height: 8vh;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: #6c98da;
`;

export const TabsOptions = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
`;

export const Option = styled.div<{ currentSelectd: boolean }>`
  display: flex;
  flex-direction: row;
  height: 100%;
  justify-content: center;
  align-items: center;
  padding: 0px 16px 0px 16px;
  background: ${(props) => (props.currentSelectd ? "#796BCD" : " #6c98da")};
`;

export const Icon = styled.div``;
