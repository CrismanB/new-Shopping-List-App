import styled from "styled-components";
import { RectButton } from "react-native-gesture-handler";
import { KeyboardAvoidingView, View, Text, Platform } from "react-native";

export const Container = styled(RectButton)`
  width: 100%;
  height: 90px;
  background-color: #d8e4eb;
  border-radius: 5px;
  padding: 5px;
  margin-bottom: 10px;
`;

export const TitleProductContainer = styled(View)``;

export const TitleProductText = styled(Text)`
  font-size: ${Platform.OS === "ios" ? 18 : Platform.OS === "android" && 12}px;
  font-family: "Inter_700Bold";
  color: #3355a3;
`;

export const ValuesContainer = styled(View)`
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  flex: 1;
`;

export const QuantityProduct = styled(Text)`
  font-size: ${Platform.OS === "ios" ? 18 : Platform.OS === "android" && 12}px;
  font-family: "Inter_500Medium";
  color: #3355a3;
`;

export const PriceProduct = styled(Text)`
  font-size: ${Platform.OS === "ios" ? 18 : Platform.OS === "android" && 12}px;
  font-family: "Inter_500Medium";
  color: #3355a3;
`;

export const ValuesView = styled(View)`
  flex: 1;
  height: 100%;
  justify-content: space-between;
  padding: 0;
`;

export const TotalContainer = styled(View)`
  justify-content: space-between;

  height: 100%;
  font-family: "Inter_700Bold";
  padding: 0;
  width: 140px;
`;

export const TotalTitle = styled(Text)`
  font-size: ${Platform.OS === "ios" ? 18 : Platform.OS === "android" && 12}px;
  font-family: "Inter_700Bold";
  color: #3355a3;
`;

export const TotalValue = styled(Text)`
  font-size: ${Platform.OS === "ios" ? 18 : Platform.OS === "android" && 12}px;
  font-family: "Inter_700Bold";
  color: #3355a3;
`;

export const SeparatorTitle = styled(View)`
  height: 2px;
  background-color: #3355a3;
  width: 100%;
  margin: 3px 0;
`;
