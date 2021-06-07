import styled from "styled-components";
import { Modal, View, Text, Platform } from "react-native";

export const Container = styled(Modal)``;

export const ContainerInfo = styled(View)`
  height: 300px;
  background-color: #d8e4eb;
  margin: auto 10px;
  border-radius: 10px;
  border: 2px solid #149875;
`;

export const Header = styled(View)`
  width: 100%;
  height: 45px;
  align-items: center;
  flex-direction: row;

  justify-content: space-between;
  padding: 0 6%;
`;

export const HeaderTitle = styled(Text)`
  font-family: "Inter_500Medium";
  font-size: ${Platform.OS === "ios" ? "16px" : "12px"};
  color: #3355a3;
`;
