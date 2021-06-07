import React from "react";
import { RectButtonProps } from "react-native-gesture-handler";

import { Text, View, KeyboardAvoidingViewProps } from "react-native";
import {
  Container,
  TitleProductContainer,
  TitleProductText,
  ValuesContainer,
  QuantityProduct,
  PriceProduct,
  ValuesView,
  TotalContainer,
  TotalTitle,
  TotalValue,
  SeparatorTitle,
} from "./styles";

const CardProducts: React.FC<RectButtonProps> = ({ ...rest }) => {
  return (
    <Container {...rest}>
      <TitleProductContainer>
        <TitleProductText numberOfLines={1}>
          Produto XPTO 01 - Marca Produto Produto Produto
        </TitleProductText>
      </TitleProductContainer>
      <SeparatorTitle />
      <ValuesContainer>
        <ValuesView>
          <PriceProduct>Preço - R$ 2.000,00</PriceProduct>
          <QuantityProduct>Qtd - 10</QuantityProduct>
        </ValuesView>

        <TotalContainer>
          <TotalTitle>Total</TotalTitle>
          <TotalValue>R$ 20.000,00</TotalValue>
        </TotalContainer>
      </ValuesContainer>
    </Container>
  );
};

export default CardProducts;
