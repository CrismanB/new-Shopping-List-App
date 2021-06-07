import styled from "styled-components/native";
import { Image, KeyboardAvoidingView } from "react-native";

export const Container = styled(KeyboardAvoidingView)`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #0b2038;
  padding: 0 30px;
`;

export const LogoCart = styled(Image)`
  height: 120px;
  width: 120px;
`;
