import styled from "styled-components";
import { Text } from "react-native";
import { RectButton } from "react-native-gesture-handler";

interface ContainerProps {
  background?: string;
}

interface TextButtonProps {
  colorFont?: string;
}

export const Container = styled(RectButton)<ContainerProps>`
  height: 50px;
  width: 100%;
  background-color: ${(props) =>
    props.background ? props.background : "#e83f61"};
  margin: 5px 0;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
`;

export const TextButton = styled(Text)<TextButtonProps>`
  color: ${(props) => (props.colorFont ? props.colorFont : "#fff")};
  font-size: 16px;
  font-weight: bold;
  font-family: "Inter_900Black";
`;
