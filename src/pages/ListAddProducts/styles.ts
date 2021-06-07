import styled from "styled-components/native";
import { KeyboardAvoidingView, Platform } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

interface ContainerProps {
  headerHeight: number;
}

export const Container = styled(KeyboardAvoidingView)<ContainerProps>`
  flex: 1;
  align-items: flex-start;
  justify-content: flex-start;
  background-color: #0b2038;
  padding: 0 15px;
  padding-top: ${(props) =>
    Platform.OS === "ios"
      ? getStatusBarHeight() + props.headerHeight + 3
      : props.headerHeight + 10}px;
`;
